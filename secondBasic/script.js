// LECTURE: HOISTING

/*
function calculateAge(year){
    console.log(2016-year);
}

calculateAge(1980);


calcuAge(1992); // this is  called  hoisting [we have called function even before it declear]   
                //as this is function  decleartion
function calcuAge(year){
    console.log(2019-year);
}




var retirement=function(year){
    console.log(65-(2016-year));
}

retirement(1990); 



// here hoistion does not work because it is a functon expression;


// retirement1(1232);
//  var retirement1=function(year){
//     console.log(65-(2016-year));
//  }






 //hoistion  for variable
console.log(age);
 var age=23;
 console.log(age);



 function foo(){
     console.log(age);
     var age=65;
     console.log(age);
 }
 foo();
 console.log(age);


 */
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




//LECTURE :  SCOPING  AND SCOPE CHAIN


//scoping chain
//this format of writing code is called lexically [first(second())]
/*
var a='Hello !';

first();
function first(){
    var b= "Hi  !";
    seccond();
    function seccond(){
        var c="Hey!";
        console.log(a+b+c);
    }
}


var a='Hello !';

first();
function first(){
    var b= "Hi  !";
    seccond();
    function seccond(){
        var c="Hey!";
        third();
    }
}
function third(){ 
    var d='Jhon';
    console.log(a+d);    
}

*/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// this keyword


/*
// console.log(this);

// calculateAge(1980);

// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this);
// }


var john={
    name:'John',
    yearOfbirth :1960,
    calculateAge: function(){
        console.log(this);
        console.log(2016-this.yearOfbirth);


        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
};
john.calculateAge();


var mike={
name:'Mike',
yearOfbirth:1984,
};


mike.calculateAge=john.calculateAge;//this is call method borrwing because we
//have just point the john's-- calculateAge ()   to  mike 
//so  now calcuteAge will work same as it did for john object

mike.calculateAge();

*/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%







