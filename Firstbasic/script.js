//JUST VARIABLE CLASS
/*
console.log('hello World');

var name = 'John';
console.log(name); 

var lastName='Smith';
console.log(lastName);

var age=26;
console.log(age);


var fullAge  = true;
console.log(fullAge); 
*/

/*
var name="john";
var age=26;
console.log(name+age);
console.log(age+age);



var job, isMarried;
console.log(job);

job='programmer';
isMarried=true;
console.log(name+'is a '+age+'yerars old'+job+' . is he married --'+isMarried);

age='thirty six';
job='driver';
console.log(name+'is a '+age+'yerars old'+job+' . is he married --'+isMarried);


// var lastName=prompt('what is the lastname ?');
// console.log(lastName);





alert (name+'is a '+age+'yerars old'+job+' . is he married --'+isMarried);


*/


//OPERATOR LECTURE
/*
var now=2016;
var birthYear=now-26;

birthYear   = now-26*2;


console.log(birthYear);

ageOfJhon= ageMark=(3+5)*4-6;

ageOfJhon++;
ageMark*=2;

console.log(ageMark);
console.log(ageOfJhon) ;
*/







//if else loop : lecture 

/*var name='john';
var age=26; 
var Ismarried='no';
if(Ismarried==='yes'){
    console.log(name+"is married")
}else{
    console.log(name+'hope fully get  married soon')
}



Ismarried=false;
if(Ismarried){
    console.log("YESSS");
}else{
    console.log("NO!");
}




if(23=="23"){  ///THIS IS CALLS TYPE QUARTION
    console.log('somthing to print..')
}

*/
/*
var age=33;
if(age<20  ){
    console.log("John is Just a  teanager!!!!");
}else if(age>=20 && age<30){
    console.log(" John Is a young man");
}
else{
    console.log("John is a man ");
} 



var job=prompt('whta does he  want to do????');
switch(job){
    case 'teacher':
    console.log('john is a techer')
   ;
   break;
   case 'driver':
   console.log("john  is a driver");
   break;
   case "Police":
   console.log('john is a freedom fighter');
   break;
   default:
   console.log('Johnn has no  idea whta is he gonna  be') ;
}

*/





//FIRST CHALLENGE 
/*
var heightOFjohn=16;
var heightOFfriend=16;

var ageOfJhon=20;
var ageOffriend=20;
var John=heightOFjohn+5*ageOfJhon;

var Friend=heightOFfriend+5 *ageOffriend;

// if(John>Friend){
//     console.log("john the winner   "+John);
// }else if( Friend>John){
//     console.log("the winner  is "+Friend)
// }else{
//     console.log("game is tie")
// } 

var  heightMerry=16;
var ageMerry=20;

Merry=heightMerry+5*ageMerry;

  if(John>Friend && John>Merry){
      console.log('the winner is jhon with'+John);
  }else if(Friend>John && Friend>Merry){
      console.log('the winner is Frined with'+Friend);
  }else if(Merry>John && Merry>Friend){
      console.log('the winner is merry'+Merry);
  }else {
      console.log('it\'sgame drawn');
  }

  */



  //FUNCTIONS
/* 
  function calculateAge(yearOfBirth){
      var age=2016-yearOfBirth;
      return age;
  }

    // var ageJhon=calculateAge(1990);
    // console.log(ageJhon);


    function yearsUntilRetireMent(name,year){
 
        var age=calculateAge(year);

        var retirement=65-age;
        if(retirement>=0){
        console.log(name+"  retires "+retirement); 
        }else{
            console.log('alreadey retired');
        }
    }

    yearsUntilRetireMent('jhon',1990);   

*/
    //PRACTICE CODE OF MULTIPLE FUNCTIONS


    /*

    function  ageLimitCalculation(yearOB){

        var age=2019-yearOB;
        return age;
    }



    function selectionProcess(name ,year){
         var result=ageLimitCalculation(year)-7;
         if(result<20 &&result>8){
             console.log(name+" is selected . because he eligibility age is "+result);
         }else{
             console.log(name+"you are not eligible because your eligibility age is "+result)
         }
    }

    selectionProcess("kabir",1996);

    */


    

//ARRAY : LETURE

/*

var namess=['rit','jana','mark'];
var years=new Array(1990,1996,1948);
  
console.log( namess[0]);
namess[1]='Ben';
console.log(namess[1]);
var john=['John','Smith',1990,'teacher',false];

john.push('blue');
// console.log(john);
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);
alert(john.indexOf('Smith'));

if(john.indexOf('dancer')===-1){
    console.log('John is not a teacher');
}

*/



// LECTURE :--OBJECT

/*
 var john={

    name:'John',
    lastName:'Smith',
    yearOfBirth:1990,
    job:'teacher',
    isMarried:false,
    
};
console.log(john.lastName);
console.log(john['lastName']);

var xyz='job';
console.log(john[xyz]);

john.lastName='miller';
john['job']='Programmer';
console.log(john);

console.log(john);



var jane= new Object();
jane.name='Jane';
jane.lastName='smith';
jane['birthDay']=1980;
jane['job']='retired';
jane['isMarried']=false;
console.log(jane);



// version1.2########################



var kabir={

    name:'John',
    lastName:'Smith',
    yearOfBirth:1990,
    job:'teacher',
    isMarried:false,
    family:['Jane','Mark','bob'],

    calculateAge:function(){
        return 2016-this.yearOfBirth;
    }
};
console.log(kabir.family) ;
console.log(kabir.family[2]);

console.log(kabir.calculateAge()); 


//version2.0 ###########################



var kabir={

    name:'John',
    lastName:'Smith',
    yearOfBirth:1960,
    job:'teacher',
    isMarried:false,
    family:['Jane','Mark','bob'],

    calculateAge:function(){
        //return 2016-this.yearOfBirth;
        this.age=2016-this.yearOfBirth;
    }
};

kabir.calculateAge();
console.log(kabir);
*/
   

//LECTURE:  LOOPS
 for(var i=0;i<=10;i++){
     console.log(i);
 }
 
 
 var namess=['Jsohn','Mary','Kary','Lori'];
 namess.forEach(i => {
     console.log(i);
     
    });
    
    for(var i=namess.length-1;i>=0;i--){
        console.log(namess[i]);
    }


var i=0;

     while(i<namess.length){
         console.log(namess[i]);
         i++;
     }


for(var i=0;i<=5;i++){
         console.log(i);
         if(i===2){
             break;
         }
     }


     //Coding Challenge 
      var years=[1230,1996,1998,2000];
      



 function printFullAges(years){

    var ages=[];
    var fullAges=[];
      
for(var i=0;i<years.length;i++){
       ages[i]=2019-years[i];
     }
   
         for(i=0;i<ages.length;i++){
             if(ages[i]>=18){

                console.log("person  "+i+" is "+ages[i]+"years old ");

                fullAges.push(true);
                 }else{
                     console.log("the person  "+i+"is "+ages[i]+'years old and he is not of full age');
                     fullAges.push(false);
                 }
             }
             return fullAges;
 }

 var full1=printFullAges(years);
 var full2=printFullAges([2012,1988,1845]);



console.log("hiiii ");






























