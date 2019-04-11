
'use strict';

//BUDGET CONTROLLER

var budgetcontroller = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1 ;
    };


    Expense.prototype.calcPercentage = function(totalIncome) {
        if(totalIncome >0){
            this.percentage = Math.round((this.value/totalIncome)*100); 
        }else{
            this.percentage = -1 ;
        }
    
    };


    Expense.prototype.getPercrntage = function() {
        return this.percentage;
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


        deleteItem : function(type , id) {
            var IDs , index;

            // id = 3
            //IDs = [ 1 3 4 6 8 ]
            //index = 1
            // it will not work here because of the unorder  id --> data.allitems[type][3];



            // the difference between  foreach loop  and map  is map will return a brand new array

            IDs = data.allitems[type].map(function(current) {
                    return current.id;
            });

            index = IDs.indexOf(id); 
            
            if(index !== -1) {
                //splice is use for remove an element and slice is used to make a copy

                data.allitems[type].splice(index, 1);
            }


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

        calculatePercentages : function() {
            //a=20
            //b=30
            //c=40
            //inc=100
            // a= 20/100=20%
            // a= 30/100=30%
            // a= 40/100=40%
            data.allitems.exp.forEach(function(cur){

                cur.calcPercentage(data.totals.inc); 

            });
        },

        getPercentages: function(){

            var allPerc = data.allitems.exp.map(function(cur){

                return cur.getPercrntage();
            });
            return allPerc;
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
        expenseContainer: '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLabel : '.budget__income--value',
        expanseLabel : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container : '.container',
        expensesPercentageLabel : '.item__percentage',
        dateLabel : '.budget__title--month'

    };


    var formatNumber = function(num,type) {

        var numSplit , dec , int, type;
        // + or - before the number
        // exactly 2 decimal points
        //coma separateing the thousands
        // 2310.468 ->  +2.310.46
        //2000 -> +2,000.00

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];

        if(int.lenght >3 ) {
            int  = int.subsrt(0, int.lenght - 3) + ',' + int.subsrt(int.lenght - 3 , 3); // i/p - 2031 , o/p - 2,031
        }

        dec = numSplit[1];



       

        return  (type === 'exp'  ? '-' : '+') + ' ' + int + '.' + dec;
    };


    var nodeListForEach = function(list , callback) {

        for (var i =0; i<list.length; i++){
            callback(list[i], i);
        }
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

                html = `<div class="item clearfix" id="inc-%id%">
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

                html = `<div class="item clearfix" id="exp-%id%">
                            <div class="item__description">%description%</div>
                                <div class="right clearfix"><div class="item__value">%value%</div>
                                 <div class="item__percentage">21%</div>
                            <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div>
                        </div>`;
            }

            //replace the placceholder text with some actual code
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value , type));


            //Insert the  HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);



        },


        deleteListItem : function(selecterID) {
            var el = document.getElementById(selecterID);

            el.parentNode.removeChild(el);
        },



        displayBudget : function(obj) { 
            var type;

            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstring.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstring.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstring.expanseLabel).textContent =  formatNumber(obj.totalExp, 'exp');
            

            if(obj.percentage > 0){
                document.querySelector(DOMstring.percentageLabel).textContent = obj.percentage + '%';
            }else{
                document.querySelector(DOMstring.percentageLabel).textContent = '-----';
            }
        },


        displayPercentages : function(percentages){
            //it will return a node list
            var fields = document.querySelectorAll(DOMstring.expensesPercentageLabel);


            //this following function is a callback function and its called via argument callback
            nodeListForEach(fields, function(current, index) {
                if(percentages[index] > 0) {

                    current.textContent = percentages[index] + '%';
                }else{
                    current.textContent = '----';
                }
            });

        },



        displayMonth  : function() {

            var now , month ,months, year;
            now =  new Date();
             //  var chirtmas = new Date(2016, 11 , 25);

             
             months= ['Janary', 'February', 'March', 'April', 'May', 'June','July','August' , 'September', 'October', 'November', 'December'];
             month = now.getMonth();

             year = now.getFullYear();

             document.querySelector(DOMstring.dateLabel).textContent = months[month] + ' ' + year;


             //following line of code woun't work as it is  placed after year.....should be before year 
             //months= ['Janary', 'February', 'March', 'April', 'May', 'June','July','August' , 'September', 'October', 'November', 'December'];
             //month = now.getMonth();


         
        },

        changeType :  function() {
            var fields = document.querySelectorAll(
                DOMstring.inputType + ',' + DOMstring.inputDescription + ',' + DOMstring.inputValue
            );

                nodeListForEach(fields , function(cur){

                    cur.classList.toggle('red-focus');
                });

                document.querySelector(DOMstring.inputButton).classList.toggle('red');
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


                // this method is for event delegation

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);


        document.querySelector(DOM.inputType).addEventListener('change' , UICtrl.changeType);
    };




    var updateBudget=function() {
        
        // 1. Calculate the budget
            budgetCtrl.calculateBudget();


        // 2. Return the budget
            var budget = budgetCtrl.getBudget();

        //6. Display the budget on the UI
            UICtrl.displayBudget(budget);

    };

    var updatePercentage = function() {


        // 1. Calculate percentage
            budgetCtrl.calculatePercentages();

        // 2. Update percentage from the budgetcontroller
            var percentages =budgetCtrl.getPercentages();  

        // 3. Update the UI with new percentage
        //console.log(percentages);
            UICtrl.displayPercentages(percentages);
    };



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


            // 6. Caculate and update percentage 

                updatePercentage();


        }

        
    };

    var  ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;

        
        //following line of code is DOM triversing
        itemID= event.target.parentNode.parentNode.parentNode.parentNode.id;


        if(itemID){
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. delete the item from the data structure
                budgetCtrl.deleteItem(type, ID);

            // 2. Delete the item from the UI
                UICtrl.deleteListItem(itemID);


            // 3. Update and show the new budget
                updateBudget();

            // 4. Calculate and Update Percentages

                updatePercentage();


        }
    };



    return {
        init: function () {
            UICtrl.displayMonth();
            console.log("app started");
            UICtrl.displayBudget( {
                budget: 0,
                totalInc: 0,
                totalExp : 0,
                percentage : -1
            });
            setupEventListeners();
        }
    };



})(budgetcontroller, UIcontroller);


controller.init();






