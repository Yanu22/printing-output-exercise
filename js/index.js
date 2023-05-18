// TASK 1
let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
let output = `
    let a = 3;\n
    let b = 5;\n
    let c;
    -------------
    a + b = ${a + b}
    a - b = ${a - b}
    a * b = ${a * b}
    a / b = ${a / b}
    a % b = ${a % b}
    a += b = ${a += b}
    a -= b = ${a -= b}
    a *= b = ${a *= b}
    a /= b = ${a /= b}
    a %= b = ${a %= b}
    a == b = ${a == b}
    a != b = ${a != b}
    a > b = ${a > b}
    a < b = ${a < b}
    !a && !c = ${!a && !c}
    !a || !c = ${!a || !c}
    `;
alert(output);

/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

// TASK 2
// Declare variable first_name and assign it with value "Yashvi".
let first_name = "Yashvi";
// Declare variable last_name and assign it with value "Panchal".
let last_name = "Panchal";
// Declare variable email_id and assign it with email.
let email_id = "panc0063@algonquinlive.com";

// Concatenate first_name, last_name, email_id and string literals needed 
// to form the sentence:
	// My name is Yashvi Panchal 
	// you can contact me at panc0063@algonquinlive.com
	
    output = " My name is " + first_name + " " + last_name + " you can contact me at " + email_id + " .";
    
    // Assign variable experiment with concatenated expression.
            
    // Print experiment using alert()
    // Print experiment using console.log()
    console.log(output);
    
    // Assign variable experiment with concatenated expression.
    `My name is ${first_name} ${last_name} you can contact me at ${email_id}.`;
    console.log(output);
    alert(output);