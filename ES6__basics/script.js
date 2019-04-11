//portion : let and const 


// ***var is function scoped  and let is block scoped
/*
//ES5
 var name5 = 'Fayez Kabie';
 var age5 = 22;
 name5 = 'Fayez kabir';
 console.log(name5);

 //ES6
 const name6 = 'Fayez Kabie';
 let age6 = 23;

 name6 = 'Fayez Kabir';

 console.log(name6);
 */


 //ES5

 /*
 function driverLicense5(passedTest){

    if(passedTest){
        var firstName = 'Fayez';

        var yearOfBirth = 1996;
       
    }
    console.log(firstName + '  , borned in   ' + yearOfBirth + '  allowed' );
 }



driverLicense5(true);


//ES6

// if you use a variable before its delaration then it will give 
//an  error  which is  call {DeadZOne}

function driverLicense6(passedTest){

    if(passedTest){
        let firstName = 'Fayez';

        const yearOfBirth = 1996;
        console.log(firstName + '  , borned in   ' + yearOfBirth + '  allowed' );
    }
   // console.log(firstName + '  , borned in 6  ' + yearOfBirth + '  allowed' );
 }



driverLicense6(true);






//block scope example


// var i =23;
// for (var i=0 ; i< 5 ; i++){
//     console.log(i);
// }
// console.log(i);





let i =23;
for (let i=0 ; i< 5 ; i++){
    console.log(i);
}
console.log(i);


*/


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//  SECTION ABOUT :: BLOCKS AND IIFEs

//ES6
/*
{
    const a =12;
    let b =20;
    var  c= 6;

}
console.log(c);
console.log(a + b);


//ES5
(function(){
    var c =23;
})();
console.log(c);
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// SECTION ABOUT ::  STRINGs
/*
let firstName = 'fayez';
let lastName = 'Kabir';

const yearOfBirth = 1996;

function calcAge(year){
    return 2016 - year;
}

//ES5
console.log('Tis is '+ firstName +' ' + lastName + ' he was born in '+ yearOfBirth + 'today he is' +calcAge(yearOfBirth) );

 //ES6 {templet literals}
 console.log(`This is ${firstName} ${lastName} he eas born ${yearOfBirth} .Today he is ${calcAge(yearOfBirth)} Years old `);


const n =`${firstName} ${lastName}`;
console.log(n.startsWith('f'));
console.log(n.endsWith('ir'));
console.log(n.includes('ye'));

console.log(`${firstName} ` .repeat(3));
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//SECTION ABOUT :: Arrow Function
/*
const years = [1990 ,1658,7895,1995];


//ES5
var ages5 = years.map(function(el){
    return 2016 - el;
});
console.log(ages5);

//ES6

let ages6 = years.map(el => 2016 - el);
console.log(ages6);


ages6 = years.map((el ,index) => `Age element ${index +1}
 : ${2016-el}.`);

 console.log(ages6);

 ages6 = years.map((el, index) => {

    const now = new Date().getFullYear();

    const age=  now- el;
     return  `Age element ${index +1}
     : ${age}.`
 });

 console.log(ages6);

 */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//SECTION ABOUT :: STRING LITERAL

//ES5
/*
var box5 = {
    color : 'green',
    position : '1',
    clickme : function(){

        var self = this;
        document.querySelector('.green').addEventListener('click' , function(){
            var str = 'This is box number  '+ self.position +
            ' and the  color is  ' +self.color;
            alert(str); 
        });
    }
}

 //box5.clickme();




//ES6


const box6 = {
    color : 'green',
    position : '1',
    clickme : function(){

        
        document.querySelector('.green').addEventListener('click' , () => {
            var str = 'This is box number  '+ this.position +
            ' and the  color is  ' +this.color;
            alert(str); 
        });
    }
}

 //box6.clickme();

*/
 
// var box66 = {
//     color : 'green',
//     position : '1',
//     clickme :() => {

//         var self = this;
//         document.querySelector('.green').addEventListener('click' , () => {
//             var str = 'This is box number  '+ this.position +
//             ' and the  color is  ' +this.color;
//             alert(str); 
//         });
//     }
// }

//  box66.clickme();




function Person(name){
    this.name=name;
}

//ES5
Person.prototype.myfriends5 = function(friends) {

    var arr =friends.map(function(el){
        return this.name + ' is friends with '  + el;
    }.bind(this));

    console.log(arr);

}

var friend = ['Ram','Shaym','Jodu', 'Modu'];

    new Person('john').myfriends5(friend);




console.log('hii');

//ES6

Person.prototype.myfriends5 = function(friends) {

    var arr =friends.map(el => 
        ` ${this.name} ' is friends with    ${el}  `
    );

    console.log(arr);

}

var friend = ['Ram','Shaym','Jodu', 'Modu'];

    new Person('john').myfriends5(friend);









