//---------------- Problem-1 -----------//

/*============== No:1
ludu khelai kivabe amra 1-6 porjonto randomly print korte pari 
==================*/

// function getRndomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRndomNum(1, 6));

/*============== No:2
Kivabe amra amader shrenikokkher sokoler nam Alphabatically sajate pari 
==================*/

// const student = ["Sujan", "Roki", "Coki", "Abid"];

// console.log(student.sort());

/*============== No:3
Kivabe amra amader shrenikokkher sokoler roll number krom onujayi sajate pari ==================*/

// const roll_number = [1, 8, 2, 5, 56, 3];

// console.log(
//   roll_number.sort(function (a, b) {
//     return a - b;
//   })
// );

/*============== No:4
Kon sal Leap Year kina ta kivabe ber korte pari? 
==================*/

// function isLeapYear(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }
// }

// isLeapYear(2024);

/*============== No:5
Kono sentence e kotogulo vowel ache ta nirnoy kora jai kivabe? 
==================*/

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

/*============== No:6
kono Array theke duplicate number gulo k kivabe ber kore ante pari? 
==================*/

// const number = [1, 4, 5, 5, 9, 9, 3, 2, 8, 8];

// const dupNum = number.filter((value, index, array) => {
//   if (array.indexOf(value) !== index) {
//     return value;
//   }
// });

// console.log(dupNum);

/*============== No:7
kono Array theke unique number gulo k kivabe ber kore ante pari? 
==================*/

// const number = [1, 4, 5, 5, 9, 9, 3, 2, 8, 8];

// const uniqueNum = number.filter((value, index, array) => {
//   if (array.indexOf(value) === index) {
//     return value;
//   }
// });

// console.log(uniqueNum);

//-------------------------------- 0 -----------------------

/* //---------------- Problem-2 -----------//
================ No:1
nicher sentence e "sujan" word ti koybar use hoyeche? protombar "sujan" word ti koto number position e paoua geche? 
==================*/

// const sentence =
//   " I am a MERN Stack developer. my name is . i am trying to get a good job.  is my nick name. my full name is Md. kharshed alam ";

// const matches = sentence.match(/sujan/gi);
// console.log(matches);

// const occurances = matches ? matches.length : 0;
// console.log(occurances);

// let position = sentence.search(/sujan/i);
// a = position >= 0 ? position : "not found!";

// console.log(a);

/*============== No:2
  input: linearSearch(['a','b','c','d','e'], 'c')
  output : 2 or "not found!"
  problem: linearSearch() function ti implement kore  dekhan
==================*/

// function linearSearch(arr, val) {
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     let a = arr[i];
//     if (a === val) {
//       return i;
//     }
//   }

//   return "not found!";
// }

// console.log(linearSearch(["a", "b", "c", "d", "e"], "c"));

/*============== No:3
  kono Array theke ki vabe sob theke boro string khuje ber korben & tar index number dekhaben?
==================*/

// function longestString(names) {
//   let longestWord = "";

//   for (n of names) {
//     if (n.length > longestWord.length) {
//       console.log(n);
//       longestWord = n;
//     }
//   }

//   return [longestWord, names.indexOf(longestWord)];
// }

// console.log(longestString(["sujan", "sajid", "ahmed didar", "rana", "tuhin"]));

/*============== No:4
  1-100 porjonto kon songkha gulo 3, 5 & 3 o 5 uvoy songkha dhara bivajjo ta ber korun.
==================*/

// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 15 === 0) {
//       console.log(`${i} is FizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} is Fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} is Buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(100);

/*============== No:5
  'Array' theke 'falsy value' kivabe khuje ber kore bad dite pari?
==================*/

// const mixedArr = [
//   "lws",
//   undefined,
//   "learn with sumit",
//   false,
//   "",
//   "apple",
//   40,
//   "k",
//   "true",
//   "thanks all",
//   NaN,
// ];

// const trueval = mixedArr.filter((e) => {
//   if (!e) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(trueval);

// const trueval = mixedArr.filter(Boolean);

// console.log(trueval);

/*============== No:6
  'Object' theke 'falsy value' kivabe khuje ber kore bad dite pari?
==================*/

// const obj = {
//   a: "lws",
//   b: undefined,
//   c: "learn with sumit",
//   d: false,
//   e: "",
//   f: "apple",
//   g: 40,
//   h: "k",
//   i: "true",
//   j: "thanks all",
//   k: NaN,
// };

// const truthyObject = (obj) => {
//   for (let i in obj) {
//     if (!obj[i]) {
//       delete obj[i];
//     }
//   }
//   return obj;
// };

// console.log(truthyObject(obj));
