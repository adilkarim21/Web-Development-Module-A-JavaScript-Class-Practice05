// 22 STRINGS: MEASURING LENGTHS AND EXTRACTING PARTS


// var userEmail = prompt("Enter your email");

// for ( var i = 0 ; i > userEmail.length ; i++ ) {
//     if ( userEmail.slice( i , i + 10 ) === "@gmail.com" ) {
//         alert("Account found!");
//     }
// }


// var str = prompt("Enter some text");

// for ( var i = 0 ; i < str.length ; i++ ) {
//     if ( str.slice ( i , i + 2 ) === "  " ) {
//         alert("Double space found!");
//     }
//     else if ( str.slice ( i , i + 1 ) === "!" ) {
//         alert("! found");
//     }
//     else if ( str.slice ( i , i + 1 ) === "#" ) {
//         alert("# found");
//     }
// }



// 22 STRINGS: FINDING SEGMENTS


// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be";

// for ( var i = 0 ; i < text.length ; i++ ) {
//     if ( text.slice(i,i+12) === "World War II" ) {
//         text = text.slice (0,i) + "The Second World War" + text.slice (i+12); 
//     }
// }

// console.log(text);


// var text = "Khan achieved the all-rounder's triple (securing 3000 runs and 300 wickets) in 75 Tests, the second-fastest record";

// for ( var i = 0 ; i < text.length ; i++ ) {
//     if ( text.slice ( i , i + 6 ) === "second" ) {
//         text = text.slice (0,i) + "first" + text.slice (i+6);
//     } 
// }

// console.log(text);


// var text = "In February 2024, Khan was mentioned as a possible candidate to be Chancellor of the University of Oxford, following the announcement of the retirement of the incumbent, Chris Patten.[114] On 18 August 2024, Khan's advisor Zulfi Bukhari confirmed that the nomination papers were submitted on behalf of Khan.[115][116]";

// for ( var i = 0 ; i < text.length ; i++ ) {
//     if ( text.slice ( i , i + 4 ) === "Khan" ) {
//         text = text.slice ( 0 , i ) + "Imran khan" + text.slice ( i + 4 );
//     }
// }

// console.log(text);



// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be";

// var indexNum = text.indexOf("World War II");

// var startingText = text.slice ( 0 , 49 );

// var replace = 

// console.log(startingText);




// IndexOff Method:



// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be";

// var indexNum = str.indexOf("World War II");

// var start = str.slice ( 0 , 49 );

// var replace = "The Second World War";

// var remaining = str.slice(indexNum + 12);

// console.log(start + replace + remaining);




// var str = "Wikipedia was launched on January 15, 2001 as a single English-language edition at www.wikipedia.com, and was announced by Sanger on the Nupedia mailing list. The name originated from a blend of the words wiki and encyclopedia. Its integral policy of neutral point-of-view was codified in its first few months.";

// var indexNum = str.indexOf("January");

// var start = str.slice ( 0 , 26 );

// var replace = "December";

// var remaining = str.slice ( indexNum + 7 );

// console.log(start + replace + remaining);




// Replace Method:



// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II";

// console.log( text.replace("World War II","The Second World War") );



// ReplaceAll Method:



// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II";

// console.log( text.replaceAll("World War II","The Second World War") );



// var text = "This 2022 photograph shows the temple of Isis from the Philae temple complex in its current location.";

// console.log(text.replaceAll("Isis","Asia"));



// STARTS WITH:


// var str = `hello world`;

// var getChar = str.startsWith(`h`);

// console.log(getChar);


// ENDS WITH:


// var str = `hello world`;

// var getChar = str.endsWith(`d`);

// console.log(getChar);


// INCLUDES:


// var str = `hello world`;

// var getChar = str.includes(`llo`);

// console.log(getChar);


// SPLIT:


// var str = "hello world";

// var getChar = str.split();
// var getChar = str.split("");
// var getChar = str.split(" ");

// console.log(getChar);


// JOIN METHOD:


// var arr = [10,20,30,40,50];

// var data = arr.join(" ");
// var data = arr.join("      ");
// var data = arr.join("+");
// var data = arr.join("_");

// console.log(data);


// --------------------------------------------------------------------------