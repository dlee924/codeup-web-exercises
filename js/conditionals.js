"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */




function analyzeColor(color) {

    var color = prompt("what color do you like better blue,red,cyan ");


    if (color==="red"){
        console.log(('strawberries are ' + color));;}

    else if (color==="blue"){
        console.log(("the ocean is " + color));}

else if (color==="cyan"){
        console.log(("the sky is the same color as " + color));
    }
    else{
        console.log(("This is not a color we have Sorry!! " + color));};



}
console.log(analyzeColor())








// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */


function analyzeColor(randomColor) {

    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    var randomColor =  colors[Math.floor(Math.random() * colors.length)];

    if (randomColor==="red"){
        console.log(("santa claus hat is " + randomColor));
    }
    else if (randomColor==="orange"){
        console.log(("A basketball is, " + randomColor));
    }
    else if (randomColor==="yellow"){
        console.log(("the sun is " + randomColor));
    }
    else if (randomColor==="green"){
        console.log(("the grass is " + randomColor));
    }
    else if (randomColor==="blue"){
        console.log(("The sky is " + randomColor));
    }
    else if (randomColor==="indigo"){
        console.log(("is"  + randomColor + "even a color"));
    }

    else if (randomColor+"violet"){
        console.log((colors + "is a good color"));
    }
    else{
        console.log( ! randomColor + "we dont have this color sorry");};

}


analyzeColor(randomColor)





/**
// //



 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

var randomColor =  colors[Math.floor(Math.random() * colors.length)];


function analyzeColor(colors) {


    switch (randomColor) {
        case "red":
            console.log(("this is red"));;
            break;
        case "orange":
            console.log(("basketballs are orange"));;
            break;
        case"yellow":
            console.log(("the sun is yellow"));;
            break;
        case"green":
            console.log((" the grass is always greener on the other side"));;
            break;
        case"blue":
            console.log(("The sky is blue"));;
            break;
        case"indigo":
            console.log("what color is this ???")
            break;
        case"violet":
            console.log("this is another blue")
            break;
        default:
            console.log(randomColor + "I just love all colors :) ")

    }

}


analyzeColor()






// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
//
//

function analyzeColor(randomColors) {

    var colors = prompt("what is your favorite color red','orange', 'yellow', 'green', 'blue', 'indigo', 'violet") ;



    if (randomColors==="red"){
        alert("santa claus hat is " + randomColors);
    }
    else if (randomColors==="orange"){
        alert("A basketball is, " + randomColors);
    }
    else if (randomColors==="yellow"){
        alert("the sun is " + randomColors);
    }
    else if (randomColors==="green"){
        alert("the grass is " + randomColor);
    }
    else if (randomColors==="blue"){
        alert(("The sky is " + randomColors));
    }
    else if (randomColors==="indigo"){
        alert(("is"  + randomColors + "even a color"));
    }

    else if (randomColors+"violet"){
        alert((colors + "is a good color"));
    }
    else{
        alert( ! randomColors + "we dont have this color sorry");};
}


//
//
//
//
//
//
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//
//


var discountZero =0;

var discountOne = .10;

var discountTwo = .25;

var discountsThree =.35;

var discountFour =.50

var discountFive = "Free"


let billTotal = "random"




function calculateTip (discounts,billTotal){
    return (discounts*billTotal-billTotal);

}

calculateTip()







/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6;

var luckyNumber = Math.floor(Math.random() * 6);




function calculateTip(totalBill, luckyNumber) {


    var luckyNumber = Math.floor(Math.random() * 6);

    var totalBill = prompt("what is you bill Total?");

    // var pay = calculateTip(totalBill,luckyNumber);

    alert("your lucky Number was ???"+ luckyNumber);

    alert(totalBill+"is your total bill!! ");

    alert("you bill after discount"+totalBill+luckyNumber*0.15);
}

calculateTip();


//
//
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 *
 */


// pull us confirm window asking user "would you like a number"//

var  userInput =confirm ("would you like to pick a number")


// pulls up prompt widow telling user to choose a number//
 var pickNumber = prompt("choose a number, 1 ,2,3")



if (isNaN(pickNumber)){

    alert("Hello my friend this is not a number")};


// if/else statment for

if (pickNumber % 2===0){alert("this number is even ")}
else{alert("this number is odd")


var plusHundred = pickNumber +100;

    alert(pickNumber+plusHundred)

    if(pickNumber > 0){alert(pickNumber+ "you got a positive number")}
else if(0<0){
    alert(pickNumber+ "is a negative number my friend")


    }

}







// // refactored problem//
//
// function evenOrOdd(num) {
//     if (num % 2 ===0){
//         return true;
//     }
//
//     else { return false
//     }
//
// }
//
// function isHundred(num) {
//
//     return num + 100;
//
// }
//
//
// function posOrNeg(num) {
//
//     if (num<0){
//         return false;
//     }
//     else {
//         return true;
//     };
//
// }
//
// posOrNeg()
//
// isHundred()
//
// evenOrOdd()
//
