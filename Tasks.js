//Javascript program-main
// Star program
for(let i=0; i<5; i++){
    let star = "*"
    for(let j=0; j<i; j++){
        star += "*";    
    }
    console.log(star);    
}

// Find even or odd number
let num = 10;
if(num % 2 === 0){
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}

// Largest of 3 numbers
let x1 = 5;
let x2 = 10;
let x3 = 15;
if(x1 > x2 && x1 > x3){
    console.log(x1 + " is the largest number");
} else if(x2 > x1 && x2 > x3){
    console.log(x2 + " is the largest number");
} else {
    console.log(x3 + " is the largest number");
}

// Reverse a number
let y1 = 1789;
let y2 = y1;
let y3="";
while(y2 > 10){
    y3 += (y2%10).toString();
    y2 = Math.floor(y2/10);
}
console.log("Reverse of "+y1+ " is "+ (y3 + (y2.toString())));    

// swap two numbers
let a = 5;
let b = 10; 
console.log("Before swap: a = " + a + ", b = " + b);
let temp = a;
a = b;
b = temp;
console.log("After swap: a = " + a + ", b = " + b);


// check if a number is +ve, -ve or zero
let num1 = -5;
if(num1 > 0){
    console.log(num1 + " is a positive number");
} else if(num1 < 0){
    console.log(num1 + " is a negative number");
} else {
    console.log(num1 + " is zero");
}

// count number of vowels in a string
let givenName = "javascripti";
let length = givenName.length;
let vowelCount = 0;
for(let i=0; i<length; i++){
    if((givenName.charAt(i) === "a") || (givenName.charAt(i) === "e") || (givenName.charAt(i) === "i") || (givenName.charAt(i) === "o") || (givenName.charAt(i) === "u")){
        vowelCount++;
    }
}
if(vowelCount > 0){
    console.log("Number of vowels in " + givenName + " is " + vowelCount);
}

// capitalize first letter of a string
let givenString = "hello world";
givenString = givenString.charAt(0).toUpperCase() + givenString.slice(1);
console.log(givenString);

// factorial of a number
let givenNumber = 10;
let x = 1;
for(let i = givenNumber; i > 1 ; i--){
    x = x * i;
}
console.log("Factorial of " + givenNumber + " is " + x);

//print alphabet like a triangle
let alphabet = "";  
for(let i=65; i<=90; i++){
    alphabet += String.fromCharCode(i);
}   
console.log(alphabet);


for(let j = 0; j < alphabet.length; j++){
    let newAphabet = "";
    for(let k= 0; k <= j; k++){
        newAphabet += alphabet.charAt(k) + " ";
    }
    console.log(newAphabet);
}
