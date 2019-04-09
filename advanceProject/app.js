


//BUDGET CONTROLLER

var budgetcontroller = (function(){

    var  Expense = function(id, description , value){

        this.id = id;
        this.description = description;
        this.value = value;
    };

    var  Income = function(id, description , value){

        this.id = id;
        this.description = description;
        this.value = value;
    };



    var data = {
        allitems : {
            exp : [] , 
            inc: []
        },
        totals : {
            exp : 0 ,
            inc : 0 
        }
    };
    
})();





// UI controller

var UIcontroller = (function() {

    var DOMstring = {
        //this function will get the  selecter name from the  html file so that 
        //we donot have to change everyehere 
        inputType : '.add__type',
        inputDescription :'.add__description',
        inputValue : '.add__value',
        inputButton :'.add__btn'
    };



    return {

        //this function will get the input from the user and this is public function
        getInput : function(){

            return{
                // this function will return these three properties as  1 object
                 type : document.querySelector(DOMstring.inputType).value, // will be either inc or exp (from html)

                description : document.querySelector(DOMstring.inputDescription).value,

                value : document.querySelector(DOMstring.inputValue).value
            };
            
        },

        getDOMstrings : function(){
            //exposing the private DOMstring function
            //and making it usable for another function scope
            return DOMstring;
        }

    };


})();





//GLOBAL APP CONTROLLER

var controller = (function(budgetCtrl , UICtrl) {

    var setupEventListeners = function (){
        var DOM = UICtrl.getDOMstrings();
            
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        //key press event
        document.addEventListener('keypress', function(keyboard) {
            if(keyboard.keyCode === 13  || keyboard.which === 13){
                
                ctrlAddItem();
            }
        });

    };
  

    var ctrlAddItem = function() {
        // 1. get the filled input data

            var input= UICtrl.getInput();
            console.log(input);

        // 2. Add the Item  to the budget controller

        // 3. Add the Itrm to the UI

        // 4. Calculate the budget


        //5. Display the budget on the UI

        
    };



return {
    init : function() {
        console.log("appstarted");
        setupEventListeners();
    }
};







})(budgetcontroller , UIcontroller);


controller.init();






