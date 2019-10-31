
/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 * By Allen Huynh
 */

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while (guess != answer) {

  guess = prompt ("pick a number 1 to 100");
  if (guess =="q") break;
  if (validator(guess)==true){
	  turns++;

  if (guess < answer) alert ("too low");

  else if (guess > answer) alert ("too high");
 
}
else alert("Invalid Guess");
}

if (guess == answer) alert("You got it in "+turns+" turns.");
else alert("Quitter");

function validator(guess){
	if (guess > 0 && guess < 101) return true;
	else return false;
}