//The Fortune Teller
var numOfKids = 3;
var spouse = "Jennifer";
var geoLocation = "San Francisco";
var jobTitle = "Developer";

console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${spouse} with ${numOfKids} kids.`)


//The Age Calculator
var birthYear = 1932;
var futureYear = 2078;
var age = futureYear-birthYear;

console.log(`I will be either ${age-1} or ${age} in ${futureYear}`);


//The Lifetime Supply Calculator
var currentAge = 15;
var maxAge = 85;
var dailyAmount = 6;
var totalAmount = ((maxAge-currentAge)*365)*6;

console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}.`)


//The Geometrizer
var radius = 15;
var circumference = 2*Math.PI*radius;
var area = Math.PI*(Math.pow(radius,2));

console.log(`The circumference is ${circumference}`);
console.log(`The area is ${area}`);


//The Temperature Converter
var tempC = 15;
var convertedTempC = (tempC * (9/5)) + 32;
var tempF = 99;
var convertedTempF = (tempF - 32) * (5/9);

console.log(`${tempC}°C is ${convertedTempC}°F`);
console.log(`${tempF}°F is ${convertedTempF}°C`);