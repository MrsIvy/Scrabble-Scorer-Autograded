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
   let letterPoints = 0;

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }
      }
   }
   return letterPoints;
}


function initialPrompt() {

   let word = input.question("Let's play Scarabble! Enter a word to score: ");

   return word;

};


// need to flip the letters and then nunbers to be more effiecent trying break this array into strings and I need that I am going to use a for in loop

let simpleScorer = function(word) {

   word = word.toLowerCase();

   // Initialize the score
   let score = 0;

   // Iterate through each character in the word
   for (let i = 0; i < word.length; i++) {
      score = score + 1
   };
   // Check if the character is a letter (ignore non-letter characters)

   // Increment the score by 1 for each letter
   return score;
};


function vowelBonusScorer(word) {
   word = word.toLowerCase(word);

   //  Initialize scores for vowels and consonants
   let vowelScore = 0;
   let vowels = "aeiou";

   // Iterate through each character in the word
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
         vowelScore += 3;
      } else {
         vowelScore = vowelScore + 1;
      }

   }
   return vowelScore;

};

let scrabbleScorer = function (word) {
   word = word.toLowerCase();
   let score = 0;
   for (let i = 0; i < word.length; i++) {
      score += newPointStructure[word[i]];
   }

   return score;
};


const scoringAlgorithms = [
   {
      name: "Simple Score",
      description: "Each letter is worth 1 point",
      scoreFunction: simpleScorer
   },
   {
      name: "Vowel Bonus",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoreFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scoreFunction: scrabbleScorer
   }
];


function scorerPrompt() {

   console.log("What scoring algorithm would you like to use?");
   for (let i = 0; i < scoringAlgorithms.length; i++) {
      let option = scoringAlgorithms[i];
      console.log(i + "-" + option["name"] + ": " + option["description"]);
   }
   let choice = Number(input.question("Select a number: 0, 1, 2 "));

   return scoringAlgorithms[choice];
}


function transform(oldPointSystem) {
   let emptyObject = {};
   for (let key in oldPointSystem) {
      let letters = oldPointSystem[key];
      for (let i = 0; i < letters.length; i++) {
         emptyObject[letters[i].toLowerCase()] = Number(key);
      }
   }
   return emptyObject;
};


let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   let scorer = scorerPrompt().scoreFunction;
   
   console.log(word);
   console.log(scorer(word));
   
}
// initialPrompt --> contain in a variable to pass into scorerprompt within the runProgram function


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