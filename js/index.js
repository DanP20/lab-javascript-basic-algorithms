// Iteration 1: Names and Input
let hacker1 = 'daniel';
        console.log(`The drivers name is ${hacker1}.`)

let hacker2 = 'daniel';

console.log(`The Navigators name is ${hacker2}.`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`) 
    } else if (hacker1.length < hacker2.length) { 
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else { console.log(`Wow, you both have equally long names ${hacker1.length}`) 
    }

// Iteration 3: Loops
let upperCaseDriver = " "
for (i = 0; i < hacker1.length; i++) {
   upperCaseDriver += (hacker1.charAt(i).toUpperCase() + " ");
}
   console.log(upperCaseDriver)

   let reversenavigator = " "
 for (let j = hacker2.length - 1; j >= 0; j--) {
     reversenavigator += hacker2[j]; 
 }
console.log(reversenavigator)

if (hacker1.localeCompare(hacker2) == -1 ) {
console.log(`The driver's name goes first`) 
} else if  (hacker1.localeCompare(hacker2) == 1)  {
    console.log(`Yo, the navigator's goes first definitely`)
} else {
    console.log(`What?! You both have the same name?`)
} 