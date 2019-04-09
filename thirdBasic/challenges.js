

var scores, roundScore,activePlayer,gamePlaying,lastDice;
inIt();




//document.querySelector('#current-'+activePlayer).textContent=dice;

// document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'<em>';


//var x=document.querySelector('#score-1').textContent;
//console.log(x);



//  function btn(){
//      //do some thing here
     
//  }
//  btn();





//THIS SECTION IS FOR ROLL-DICE BUTTON


document.querySelector('.btn-roll').addEventListener('click' , function(){
    if(gamePlaying){
    // this is calls Anonmas funnction 
    //1. Random Number( as soon as the event fired the the following will happend)

     var dice1 = (Math.floor(Math.random()*6)+1);
     var dice2 = (Math.floor(Math.random()*6)+1);


     

    //2. Display the result

   document.getElementById('dice-1').style.display='block';
   document.getElementById('dice-2').style.display='block';
   document.getElementById('dice-1').src='dice-' + dice1 + '.png';
   document.getElementById('dice-2').src='dice-' + dice2 + '.png';

    

    //3. Update the result If the Number  Was Not a 1
    // if(dice===6 && lastDice===6){
    //     //player looses his score 
    //     scores[activePlayer]=0;
    //     document.querySelector('#score-'+activePlayer).textContent='0';
    //     nextPlayer(); 
    // }else
    
    if(dice1 !== 1  && dice2!==1){
        //Add Score
        roundScore+=dice1 +dice2;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;


    

    }else{
        nextPlayer();
    }

    lastDice=dice;
}
    

} );



// this section is for hold button



document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
    //add currrent score to global score 

    scores[activePlayer] += roundScore;


    //update the UI

    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];


    var  input=document.querySelector('.final-score').value;
    var winningScore;
    //Undefined,0,null or "" are type corced to false
    // Any thing else is COERCED to true 
    if(input){
         winningScore =input;

    }else{
        winningScore=100;
    }



    //check if player won the game

    if(scores[activePlayer]>=winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner';
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        gamePlaying=false;
    }else{

         //next player
    nextPlayer();
    }

}



});

function nextPlayer(){
    // next player
        activePlayer === 0 ? activePlayer= 1 : activePlayer =0; // this is call turnary operator 
        roundScore=0;

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';

        //  document.querySelector('player-0-panel').classList.remove('active');
        //  document.querySelector('player-1-panel').classList.add('active');

          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
        
          document.getElementById('dice-1').style.display='none';
          document.getElementById('dice-2').style.display='none';
   
};

//NOW  WE WILL IMPLEMENT NEW-GAME BUTTON

document.querySelector('.btn-new').addEventListener('click',inIt);


function inIt(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    


    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

document.getElementById('score-0').textContent =  '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';

document.getElementById('name-0').textContent = 'Player 0';
document.getElementById('name-1').textContent = 'Player 1';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

};




 


