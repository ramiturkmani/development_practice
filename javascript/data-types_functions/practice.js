//The Recipe Card
var foodName = "The Best Cake Ever";
var serving = 2;
var ingredients = ["Sugar", "Flour", "Salt", "Love"];

// console.log("- " + foodName);
// console.log("- Serves: " + serving);
// console.log("- Ingredients:");
// console.log("- " + ingredients[0]);
// console.log("- " + ingredients[1]);
// console.log("- " + ingredients[2]);
// console.log("- " + ingredients[3]);


//The Reading List
var books = ["Diary Of A Wimpy Kid", "Harry Potter", "The Hobbit"];
var authors = ["John Green", "JK Rowling", "Jack Black"];
var alreadyRead = ["Yes", "No", "No"];

for (let i = 0; i < books.length; i++) {
    console.log(books[i] + " by " + authors[i]);
    if (alreadyRead[i]=="Yes") {
        console.log(`You already read "${books[i]}" by ${authors[i]}.`);
    } else {
        console.log(`You still need to read "${books[i]}" by ${authors[i]}.`);
    }
}


//Your top choices
var colors = ["Orange", "Blue", "Green"];
var presidents = ["John Green", "JK Rowling", "Jack Black"];
var cars = ["Prosche", "BMW", "Ferrari"];

for (let i = 0; i < colors.length; i++) {
    if (i==0) {
        console.log(`My 1st choice is ${colors[i]}, ${presidents[i]}, and ${cars[i]}.`);
    } else if (i==1) {
        console.log(`My 2nd choices are ${colors[i]}, ${presidents[i]}, and ${cars[i]}.`);
    } else if (i==2) {
        console.log(`My 3rd choices are ${colors[i]}, ${presidents[i]}, and ${cars[i]}.`);
    }
}


//What number's bigger?
function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log(`The greater number of ${num1} and ${num2} is ${num1}.`);
    } else {
        console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);
    }
}

greaterNum(5, 10);
greaterNum(14, 7);


//The World Translator
function helloWorld(lang) {
    if (lang == "es") {
        console.log("Hola, Mundo");
    } else if (lang == "fr") {
        console.log("Bonjour, le monde");
    } else {
        console.log("Hello, World");
    }
}

helloWorld("es");
helloWorld("fr");
helloWorld("en");


//The Grade Assigner
function assignGrade(score) {
    if (score >= 90) { //extra credit over 100 is still an A
        console.log("A");
    } else if (score <= 89 && score >= 80) {
        console.log("B");
    } else if (score <= 79 && score >= 70) {
        console.log("C");
    } else if (score <= 69 && score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

assignGrade(60);


//The Pluralizer
function pluralize(noun, number) {
    if (number == 1) {
        console.log(`${number} ${noun}`);
    } else {
        console.log(`${number} ${noun}s`);
    }
}

pluralize("dog", 1);
pluralize("cat", 10);


//The Fortune Teller
function tellFortune(jobTitle, location, spouse, numChild) {
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${spouse} with ${numChild} kids.`);
}

tellFortune("Engineer", "Kanasas City", "Fatima", "4");


//The Puppy Age Calculator
function calculateDogAge(puppyAge) {
    console.log(`Your doggie is ${puppyAge*7} years old in dog years!`);
}

calculateDogAge(3);


//The Lifetime Supply Calculator
