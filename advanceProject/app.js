
'use strict';

//BUDGET CONTROLLER

var budgetcontroller = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type){
        var sum = 0;

        data.allitems[type].forEach(function(cur){
            sum += cur.value;
        });
       data.totals[type] = sum;
    };


    //the following functions are for storing data
    var data = {
        allitems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget : 0 ,
        percentage : -1
    };


    return {
        addItem: function (type, des, val) {

            var newItem, ID;

            // dreate new id 

            // ID = lastID + 1
            if (data.allitems[type].lenght > 0) {
                ID = data.allitems[type][data.allitems[type].lenght - 1].id + 1;
            } else {
                ID = 0;
            }

            //create new item based on 'inc' or 'exp' type

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }



            //push it into our data Structure

            data.allitems[type].push(newItem);

            //return the new element
            return newItem;
        },

        calculateBudget :function (){
            //calculate total income and expenses
                calculateTotal('exp');
                calculateTotal('inc');


            //Calculate the budget : income - expenses
                data.budget = data.totals.inc - data.totals.exp;


            //calculate the percentage of the income that we  spent
                if(data.totals.inc > 0){
                    data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                }else{
                    data.percentage = -1;
                }
        },

        getBudget : function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp : data.totals.exp,
                percentage : data.percentage
            }
        },


        testing: function () {
            console.log(data);

        }
    };

})();







// UI controller

var UIcontroller = (function () {

    var DOMstring = {
        //this function will get the  selecter name from the  html file so that 
        //we donot have to change everyehere 
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };



    return {

        //this function will get the input from the user and this is public function
        getInput: function () {

            return {
                // this function will return these three properties as  1 object
                type: document.querySelector(DOMstring.inputType).value, // will be either inc or exp (from html)
                description: document.querySelector(DOMstring.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstring.inputValue).value)
            };

        },

        clearInput: function () {
            /*
            document.querySelector(DOMstring.inputType).value = '';
            document.querySelector(DOMstring.inputDescription).value = '';
            document.querySelector(DOMstring.inputValue).value = '';
            */

            //*************OR******\\\\


            
            var fields ,fieldsArray;
             fields = document.querySelectorAll(DOMstring.inputDescription + ',' + DOMstring.inputValue);


             fieldsArray=Array.prototype.slice.call(fields);


             fieldsArray.forEach(function(current, index, array) {
                 current.value="";
             });
             
            fieldsArray[0].focus();
        },


        addListItem: function (obj, type) {

            var html, newHtml, element;


            //create html string with placeholder text

            if (type === 'inc') {

                element = DOMstring.incomeContainer;

                html = `<div class="item clearfix" id="income-%id%">
                        <div class="item__description">%description%</div>
                            <div class="right clearfix"><div class="item__value">%value%</div>
                                <div class="item__delete"><button class="item__delete--btn">
                                <i class="ion-ios-close-outline"></i>
                                </button>
                            </div>
                        </div>
                    </div>`;
            } else if (type === 'exp') {

                element = DOMstring.expenseContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placceholder text with some actual code
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);


            //Insert the  HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);



        },

        getDOMstrings: function () {
            //exposing the private DOMstring function
            //and making it usable for another function scope
            return DOMstring;
        }

    };


})();





//GLOBAL APP CONTROLLER

var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        //key press event
        document.addEventListener('keypress', function (keyboard) {
            if (keyboard.keyCode === 13 || keyboard.which === 13) {

                ctrlAddItem();
            }
        });

    };




    var updateBudget=function() {
        
        // 1. Calculate the budget
            budgetCtrl.calculateBudget();


        // 2. Return the budget
            var budget = budgetCtrl.getBudget();

        //6. Display the budget on the UI
        console.log(budget);

    }



    var ctrlAddItem = function () {
        var input, newItem;



        // 1. get the filled input data

        input = UICtrl.getInput();


        if(input.description !== ""   &&  !isNaN(input.value)  && input.value >0){

            // 2. Add the Item  to the budget controller

                newItem = new budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the Itrm to the UI
                UICtrl.addListItem(newItem, input.type);


            //4. Clear the input after submit
                UICtrl.clearInput();


            // 5. Calculate the budget & 6. Display the budget on the UI

                updateBudget();


        }

        
    };



    return {
        init: function () {
            console.log("app started");
            setupEventListeners();
        }
    };



})(budgetcontroller, UIcontroller);


controller.init();






