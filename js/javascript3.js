let input = prompt("enter a number to add 7 to");
let n1 = prompt("enter an n1");
let n2 = prompt("enter an n2");
let textToCapitalize = prompt(" enter a string to capitalize");
let textToGrabLastLetter = prompt("enter a string from which you want to grab the last letter");


alert(`${input} + 7 = ${add7(input)}`);
alert(`${n1} * ${n2} = ${multiply(n1,n2)}`);
alert(`${textToCapitalize} Capitalized = ${capitalize(textToCapitalize)}`);
alert(`The last letter of ${textToGrabLastLetter} is ${lastLetter(textToGrabLastLetter)}`);

function add7 (input) {
    return Number(input) + 7;
};

function multiply(n1, n2) {
    return Number(n1) * Number(n2);
}

function capitalize(text){
    let capitalizedFirstLetter = text.substring(0,1)
    let capitalizedText = (text.substring(0,1)).toUpperCase() + (text.substring(1,text.length)).toLowerCase();
    return capitalizedText;
}

function lastLetter(text){
    let lastLetterText = text.substring(text.length-1, text.length);
    return lastLetterText;
}