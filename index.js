// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}
// **ANSWERS**
// 1. The difference between the counters is that counter1 defines the value for count within the first function, limiting its scope and accessiblity. It needs the return function as it's function to make count accessible. Counter1 uses a callback to redefine the value of count. Counter2 defines the value of count in global scope where it is stored in memory so when the function is called, the function will search for it outside and be able to refer to it. Counter2 doesn't need a callback to modify the value of count.

// 2. Counter1 uses a closure because it uses a callback.

// 3. It could be perferable to use Counter1 when the value of the element is sensitive information (i.e. a person's bank balance) so don't want to make it accessible. Counter2 could be preferable when the speed of the function using slightly simpler code outweighs any need for privacy. 
 
/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    return (Math.floor (Math.random()*Math.floor(3)));
}

inning();


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


  function finalScore(callback, inningTotal){
    let awayScore=0;
    let homeScore=0;
      for(let i=0; i<inningTotal; i++){ 
          awayScore+=callback(); 
          homeScore+=callback();
  }
return {Away: awayScore, Home: homeScore};  
}
console.log(finalScore(inning,9));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

    let awayFinalTotal = 0;
    let homeFinalTotal = 0;
    let sumAwayTotal = [];
    let sumHomeTotal = [];
    let finalSum = 0;

  function scoreboard(callback1, callback2, numOfInnings) {
    for (let i = 1; i <= numOfInnings; i++) {
        awayFinalTotal = callback2();
        sumAwayTotal.push(awayFinalTotal);
        homeFinalTotal = callback2();
        sumHomeTotal.push(homeFinalTotal);
        if (i === 1){
            console.log(`1st inning: ${callback1()}`);
        } else if (i === 2){
            console.log(`2nd inning: ${callback1()}`);
        } else if (i === 3){
            console.log(`3rd inning: ${callback1()}`);
        } else {
            console.log(`${i}th inning: ${callback1()}`);
        }
    }  
    function getArraySum(a){
        var total=0;
        for(var i in a) { 
            total += a[i];
        }
        return total;
    }
    
    let awayFinalSum = getArraySum(sumAwayTotal);
    let homeFinalSum = getArraySum(sumHomeTotal);
    console.log(`Final Score: ${awayFinalSum} - ${homeFinalSum}`);
  }

   function getInningScore(){
    awayFinal = awayFinalTotal;
    homeFinal = homeFinalTotal;
    return `${awayFinal} - ${homeFinal}`;
   }
   scoreboard(getInningScore, inning, 9);

