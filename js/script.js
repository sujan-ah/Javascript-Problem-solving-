/*============== ludu khelai kivabe amra 1-6 porjonto randomly print korte pari ==================*/

// function getRndomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRndomNum(1, 6));

/*============== Kivabe amra amader shrenikokkher sokoler nam Alphabatically sajate pari ==================*/

// const student = ["Sujan", "Roki", "Coki", "Abid"];

// console.log(student.sort());

/*============== Kivabe amra amader shrenikokkher sokoler roll number krom onujayi sajate pari ==================*/

// const roll_number = [1, 8, 2, 5, 56, 3];

// console.log(
//   roll_number.sort(function (a, b) {
//     return a - b;
//   })
// );

/*============== Kon sal Leap Year kina ta kivabe ber korte pari? ==================*/

// function isLeapYear(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// }

// isLeapYear(2024);

/*============== Kono sentence e kotogulo vowel ache ta nirnoy kora jai kivabe? ==================*/

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowel(s) {
//   let count = 0;
//   const letters = Array.from(s);

//   letters.forEach((v) => {
//     if (vowels.includes(v)) {
//       count++;
//     }
//   });

//   return count;
// }

// console.log(countVowel("I like you so much"));

/*============== kono Array theke duplicate number gulo k kivabe ber kore ante pari? ==================*/

// const number = [1, 4, 5, 5, 9, 9, 3, 2, 8, 8];

// const dupNum = number.filter((value, index, array) => {
//   if (array.indexOf(value) !== index) {
//     return value;
//   }
// });

// console.log(dupNum);

/*============== kono Array theke unique number gulo k kivabe ber kore ante pari? ==================*/

// const number = [1, 4, 5, 5, 9, 9, 3, 2, 8, 8];

// const uniqueNum = number.filter((value, index, array) => {
//   if (array.indexOf(value) === index) {
//     return value;
//   }
// });

// console.log(uniqueNum);
