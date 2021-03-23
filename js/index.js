// Iteration 1: Names and Input
const hacker1= "Dalia"
console.log(`The driver name is ${hacker1}`);
const hacker2= "Sandra"
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1 === hacker2){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1

let string1= "";

for (let i=0; i<hacker1.length; i++) {
string1+= hacker1[i].toUpperCase() + " ";
}
console.log(string1);

//3.2
let string2="";
for (let i = hacker2.length-1; i>=0; i--){
    string2 += hacker2[i];
}
console.log(string2);

//3.3

if (hacker1.localeCompare(hacker2) >0){
console.log(`The driver's name goes first`)
} else if (hacker1.localeCompare(hacker2) <0){
    console.log(`Yo, the navigator goes first definitely`)
} else if (hacker1.localeCompare(hacker2 =0 ){
    console.log(`What?! You both have the same name?`)
}
