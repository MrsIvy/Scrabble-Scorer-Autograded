// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// I'm not sure if word is defined, but I think that is should be 
// and that way it will be able to be called in the "if statement"
//  and that will help calculate the score of the word
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {


   console.log("Let's play some scrabble! ");
    word = input.question("Enter a word to score:"); 
    
   //  console.log(oldScrabbleScorer(word));
   // console.log(simpleScorer(word));

   //   used input.question to grab the player's answer
};


let newPointStructure;  


   function simpleScorer(word) {
      
      word = word.toLowerCase();
  
      // Initialize the score
      let score = 0;
  
      // Iterate through each character in the word
      for (let i = 0; i < word.length; i++) {
          // Check if the character is a letter (ignore non-letter characters)
          if (word[i]) {
              // Increment the score by 1 for each letter
              score += 1;

              console.log(`Points for '${word[i]}': 1`);
          } 
      }
      
      return `The score for ${word} is ${score}`;
  };
  
function vowelBonusScorer(word) {
 word = word.toLowerCase();

// Initialize scores for vowels and consonants
let vowelScore = 0;
let vowels = "aeiou";

// Iterate through each character in the word
for (let i = 0; i < word.length; i++) {
   if (vowels.includes(word[i])) {
      vowelScore += 3;
} else {
  vowelScore++;
}
    return 

    // Check if the character is a vowel
    
   console.log(letter)
   totalScore = `Points for the are '${vowelScore}' overall score is ${word[i]}'`
};
}

let scrabbleScorer;

const scoringAlgorithms = [
    simpleScorer = {
      name: "Simple Score",
      description: "Each letter is worth 1 point",
      scoreFunction: "A function with a parameter for user input that returns a score."
   },

   vowelBonusScorer = {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoreFunction: "A function tht returns a score based on the number of vowels and consonants."
   },

   scrabbleScorer = {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scoreFunction: "Uses the oldScrabbleScorer() function to determine the score for a given word."

   }
];

// I need to ask them a question to see with way they 
// want to score their word. Give option to pick which 
// scoring system they want. Scoringalgorithm
// input.question or console.log()
// irritate the array of scoring algorithms
// when the array prints out they will see their choices and 
// be able to pick one
// need to create a variable determine the choice of scoring system
// console.log(variable)

function scorerPrompt() {}

function transform() {};

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
