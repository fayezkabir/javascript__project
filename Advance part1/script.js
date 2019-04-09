
/**
 *  CREATING OBJECT THROUGHT BLUE-PRINT(Person) 
 */
// fucntion constructor

/*
var john ={
    name:'john',
    yaerOfBirth:1990,
    job:'teacher'
}


var Person= function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    // this.calculateAge = function(){
    //     console.log(2016 - this.yearOfBirth);
    // }
}



Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}
Person.prototype.lastName =  'Smith';



var john= new Person('john',1990,'teacher');


var Jane= new Person("Jane",1997,'designer');


var Mark= new Person("Mak",1985,'developer');


john.calculateAge();
Jane.calculateAge();
Mark.calculateAge();

console.log(john.lastName);
console.log(Jane.lastName);
console.log(Mark.lastName);

*/



/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/



/**
 * 
 * CREATING OBJECT THROUGH object.create METHOD
 * 
 */


/*
var personProto ={
    calculateAge: function(){
        console.log(2016-yearOfBirth )
    }
};

var john = Object.create(personProto);

john.name='John';
john.yearOfBirth=1996;
john.job='teacher';



var jane=Object.create(personProto,{
    name: {value: 'Jane'},
    yearOfBirth:{value:1980},
    job:{value:'designer'}
});
 */




//*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 



//**
//* *      /*PRIMITIVE  VS OBJECT
//*
//*
//*

/*
//primitive
var a=23;
var b=a;

a=46;

console.log(a);
console.log(b);

//object
var obj1={
    name:'john',
    age:26
}
var obj2=obj1;


obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);


// function
var age=27;
var obj={
     name:'fayez',
     city:'kolkata'
}

function change(a,b){    
    a=50;
    b.city='beldanga';
}
change(age,obj);

console.log(age);
console.log(b.city);


*/

// /**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@

//passing funtions as arguments

/*
var years=[1990,1998,1985,1965,1970];


function arrayCalc(arr, fn){

    var arrResult =[];

    for(var i=0;i<arr.length;i++){

        arrResult.push(fn(arr[i]));
    }

    return arrResult;
}

//call back function (fn)


function calculateAge(ele){
    return 2016-ele;
}

function isFullAge(ele){
    return ele>=19;
}




function maxHeartRate(ele){

    if(ele>=19 && ele<=81){
        return Math.round(206.9-(0.67*ele));
    }else{
        return -1;
    }
}



var ages=arrayCalc(years, calculateAge);
var  fulAge=arrayCalc(ages,isFullAge);
var heartRate=arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(fulAge);
console.log(heartRate);


*/



       // /********PRACTICE********
/*
        var fayez=[150,250,189,246,136];

        function calFayez(arr, fn){
            var kabir=[];

            for(var i=0; i<arr.length;i++){
                kabir.push(fn(arr[i]));
            }
            return kabir;
        }

         function Mokyou(ele){
            return Math.round((ele + 2)/3);
         }



         var x =calFayez(fayez,Mokyou);

         console.log(x);
         
         
         
         */


 //*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//***
 //* *****Fucntion Returning*
  //                        ******/



/*
function interviewQuestion(job){ //generic function
    if(job === 'designer'){
        return function(name){ //annonimas function because it does not have any name

            console.log(name + ' , can you plz say what is UX ?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log(name+' , what subkect Do You Teach ??');
        }
    }else{
        return function(name){
            console.log(name +' , what do you do ??');
        }
    }
}


//this is one method of  calling function generic and anonimas function
var teacherQuestion=interviewQuestion('teacher');

var desinerQuestion=interviewQuestion('designer');


teacherQuestion('fayez');  //calling the annonmas function

desinerQuestion('kabir');


//and this is the    shortcut method of calling  generics and anonimas functon together

interviewQuestion('dancer')("rohit");
 */



        //**********practice*********
/*
    function progLang(lang){
        if(lang === 'java'){
            return function(name){
                console.log('so '+ name+ ' why your fav subject is ' + lang);
            }
        }else if(lang === 'javascript'){
            return function(name){
                console.log('ok '+ name+ ' you have chosen the language smartly');
            }
        }else if(lang === 'c'){
            return function(name){
                console.log(name+ ' respect the language -> ' +lang +  ' <-its the base');
            }
        }else{
            return function(name){
                console.log(name + 'what is  name of your favourute language');
            }
        }
    }


    var javaaa=progLang('c');
    javaaa('fayez');

    progLang('java')('kabir');

*/







/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

///IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)


/*

function game(){
    var score=Math.random()*10;
    console.log(score>=5);
}
 game();
 


 //iife function (data privacy)

 (function () {
     var score =Math.random()*10;
     console.log(score >= 5);
 })();





 //another example

 (function (goodluck) {
    var score =Math.random()*10;
    console.log(score >= 5  - goodluck);
})(5);


*/








//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//
//LECTURE:-->CLOSURES
//


/*
function retirement(retirementAge){

    var a=' year left untill retirement from job.... ';  
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log(( retirementAge - age ) + a)
    }
}



var retirementUs=retirement(66);

retirementUs(1990);

//another way of callling function

retirement(66)(1992);




var retirementGermany=retirement(65);
retirementGermany(1980);

var retirementIndia=retirement(63);
retirementIndia(1996);


     ////////*****Practice*****\\\\\\\\\

     function langLove(lang){
        var a=' .. so what do know about ..';
        return function(name){
            if(lang === "java"){
                console.log(name + a + lang);
            }else if(lang === "javascript"){
                console.log(name + a +lang);
            }else{
                console.log( name + ' .. tell me something about  ' + lang)
            }
        }
     }

     var favlang=langLove("c");
     favlang('kabir');


     */



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//
////****** LECTURE :- Bind , Call and Apply 
//

/*
var john = {
    name : 'John',
    age  :26,
    job : 'teacher',
    presentation : function(style, timeOfDate) {
        if(style === 'formal'){
            console.log('good ' +timeOfDate + '  ladies and gentelmen !  I\'m ' + this.name + 
                        ' I\'m ' + this.job + ' and I\'m' + this.age + ' years old' );
        }else  if(style === 'friendly') {
            console.log('Hey ! what\'s up ? I\'m '+   this.name + 
            ' I\'m ' + this.job + ' and I\'m' + this.age + ' years old' 
            + ' have a nice  ' + timeOfDate);
        }
    }
};


john.presentation('formal', 'morning');



var emily ={

    name : 'Emily',
    age: 35,
    job:'dancer'
};


// ********* here we have used call function(method borrowing), 
//here emily will replace all the john's fields with emily
// so (this)  will now point emily not John 

john.presentation.call(emily, 'friendly','afternoon');




// this is bind method pretty similar to call method but 
// it creates the copy and thet we can store some where
//*********curring   because
//bind allow us to preset some aguments

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');



var emilyFormal=
john.presentation.bind(emily,'formal');

emilyFormal('evening');






var years=[1970,1980, 1990  ,2000, 2005];

function arrayCalc(arr ,fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calculateAge(el){
    return 2016-el;
}

function isFullAge(limit,el){
     return el>=limit;
}

var ages=arrayCalc(years, calculateAge);

var fullJapan= arrayCalc(ages , isFullAge.bind(this, 20));


console.log(ages);
console.log(fullJapan);

*/





/// ***@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ********practice*********



(function(){

function Question(question, answers, correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for(var i=0;i<this.answers.length;i++){
        console.log(i + ':' +  this.answers[i]);
    }
}


Question.prototype.checkAnswer = function(ans , callback){
    var sc;
    if (ans === this.correct){
        console.log("correct answer  !!");

        sc= callback(true);
    }else{
        console.log('worng answer !'); 

        sc = callback(false);
    }

    this.displayScore(sc);
}



Question.prototype.displayScore= function(score) {

    console.log('your current score is  : ' + score);

    console.log('--------------------------------------');
}




var q1= new Question('is javascript is the coolest proglang',
     ['yes', 'no'] , 0);


var q2= new Question('what is he name of this course\'s teacher?'
            ['john','joans', 'micheal'] , 2);
    
            


var q3 =new Question('what does best described coding ?',
       ['Boring','Hard','Fun','Tedious'], 2 );



var questions=[q1,q2,q3];



function score(){
    var sc = 0 ;
    return function(correct){
        if(correct){
            sc++;
        }

        return sc;
    }
}

var keepScore = score();




function nextQuestion(){

    
    var n = Math.floor( Math.random() * questions.length);

    questions[n].displayQuestion();

    var  answer =prompt('please select the correct answer');


   
    if(answer !== 'exit'){
        questions[n].checkAnswer(parseInt(answer) , keepScore);
        nextQuestion();

    }

    

}

nextQuestion();

})();



//expert level










