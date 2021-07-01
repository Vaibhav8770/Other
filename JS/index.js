
// check values of two object whether it same or not
// let obj1 = { a:"1", b:'2', c:'4'};
// let obj2 = { a:"1", b:'2', c:'3'};

// let arr1 = Object.values(obj1);
// let arr2 = Object.values(obj2);
// console.log(arr1);
// console.log(arr2);

// for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i]===arr2[i])
//     {
//         console.log(`${i}th value of arr is same`);
//     }
//     else{
//         console.log(`${i}th value of arr is not same`);
//     }
// }

// seperate string with commas
// let str1 = 'a,b,c,d'
// console.log(str1.split(','));


//  taking integer and return array of digits
// let num = 9403513219;
// const check = (i)=>{
//     // [...`${i}`].map((digit)=> console.log(digit));
//     // console.log([...`${i}`]);
// }
// check(num);

//  Fibbonacci sequence 0 1 1 2 3 5 8 13 21 34 55 89
// let n = 0;
// let prev = 0;
// let current = 1;

// for (let i = 0; i < 10; i++) {
//     n = prev+current;
//     console.log(n);
//     prev=current;
//     current=n;
// }


// finding max and min from number array
// let arr = [9,8,7,6,1,2,3,4,4,5,6];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));


// extract numbers from the string 
// let str = "hey i got 55 Rs. from which i will take 30 and you take 25"

// let arr1 = str.split(" ");
// console.log(arr1);
// let arr2 = arr1.filter((val)=>{
//     console.log(val);
//     return !isNaN(val);
// });
// console.log(arr2);

// let arr = arr2.map((val)=>{
//     return parseFloat(val);
// })
// console.log(arr);


// splice and slice function
// let arr = [9,8,7,6,1,2,3,4,4,5,6];
// console.log(arr.slice(3,6));
// console.log(arr.splice(3,6));


// remove smallest element from array
// let arr = [9, 8, 7, 6, 1, 2, 3, 4, 4, 5, 6];
// for (let j = 0; j < 2; j++) {
//     let n = Math.min(...arr);
//     arr = arr.filter((elem) => {
//         return elem !== n
//     })
// }
// console.log(arr);

// shuffle an sorted array
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const shuffle = (arr)=>{
//     for(i=arr.length-1;i>0;i--){
//         const j=Math.floor(Math.random()*(i+1));
//         const temp = arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//     console.log(arr);
//     return arr
// }
// shuffle(list);

// function shuffle(arr){
//     for(let i= 0; i<arr.length -1;i++){
//         let j = Math.floor(Math.random()*(i+1));
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     console.log(arr);
//     return arr;
// }
// shuffle(list);

// generate random String
// function GenerateString(num) {
//     let mainString = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
//     let len = mainString.length;
//     let result = [];

//     for (let i = 0; i < num; i++) {
//         result.push(mainString.charAt(Math.floor(Math.random() * len)))
//     }
//     result = result.join('')
//     console.log(result);
// }
// GenerateString(8);

// function generateNumbers(min,max){
//     console.log(Math.floor(Math.random()*(max-min))+min);
// }
// generateNumbers(11, 20)
// const rndInt = Math.floor(Math.random() * 6) + 1
//     console.log(rndInt)

// reverse the string
// let str = "shubham sanjay patil"
// let str1 = [...str].reverse().join('');
// console.log(str1);


// sort by value
// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
//   ];

//   items.sort(function (a, b) {
//     if(a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()){
//       return 1
//     }
//     else if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()){
//       return -1
//     }
//     return 0
//     // return a.value - b.value;
// });


// string reverse without reverse()
// let str = 'shubham';
// let str1='';
// for(let i=str.length-1; i>=0; i--){
//   str1=str1+str.charAt(i);
// }
// console.log(str1);


// finding max and min from object array
// let arr = [{"name":"vp"},{"name":"sp"},{"name":"tp"},{"name":"bp"}]
// let arr1 = [];
// for (let index = 0; index < arr.length; index++) {
//     arr1[index] = Object.values(arr[index]);
//     console.log(arr1);
// }
// console.log(Math.min(...arr1));


// longest string in array
// First

// const arr = ["shubham","hydra8770","patil","hhh","eddie","hello","ab"]
// let arr = ['a','ab','abc','abcd','abcde','abcdef','abcdefg','abcdefgh']
// const arr1 = [];
// for(let i=0; i<arr.length; i++){
//   arr1[i]=arr[i].length
// }
// let max = Math.max(...arr1)
// console.log(arr1);
// cole.log(max);
// console.log(`the largest string in the arr is ${arr[arr1.indexOf(max)]}`);

// Second
// const arr = ["shubham", "hydra8770", "patil", "hhh", "eddie", "hello", "ab"]
// let longest = '';
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > longest.length) {
//     longest = arr[i];
//   }
// }
// console.log(longest);


// Return most commonly used Character in string
// var getMax = function (str) {
//   var max = 0,
//     maxChar = '';
//   str.split('').map((char) => {

//     if (str.split(char).length > max) {
//       console.log(str.split(char));
//       max = str.split(char).length;
//       maxChar = char;
//     }
//   });
//   return maxChar;
// };
// getMax('nayan');


// return if both strings are anagram or not
// let str = "abcd";
// let str1 = "dcba"

// const anagram = (string1,string2)=>{
//   let str2 = string1.split('').sort().join();
//   let str3 = string2.split('').sort().join();

//   if(str2 === str3){
//     console.log("anagram");
//   }
//   else{
//     console.log("not anagram");
//   }

// }

// anagram(str,str1);


// palindrome
// let str2 = 'vaibhav';
// let str1 = 'nayan';

// const palindrome = (str)=>{
//   let str3 = str.split('').reverse().join('');

//   if(str === str3){
//     console.log("palindrome");
//   }else
//   {
//     console.log("not palindrome");
//   }
// }
// palindrome(str1);


// armstrong number
// const armstrong = (num) => {
//   let cube = 0;
//   let arr = [...`${num}`].map((num) => {
//     return parseFloat(num)
//   })
//   // console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     cube = cube + Math.pow(arr[i],3);
//   }
//   console.log(cube);
//   if(num === cube){
//     console.log(`${num} is a armstrong number`);
//   }else
//   {
//     console.log(`${num} is not a armstrong number`);
//   }

// }

// let obj =  {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a);
//         console.log(this);
//         return this
//     },
//     getB(){
//         console.log(this.b);
//     }
// }
// obj.getA().getB();


// let obj1 = { a: { b: { c: '4' } } };
// let obj2 = {
//     ...obj1
// }
// Object.freeze(obj1);
// console.log(obj1);
// obj2.a.b.c="hi";
// console.log(obj2);

// let arr = [1,2,5,7];
// const additionAll = (arr)=>{
//     let sum = 0;
//     for (let i=0; i<arr.length;i++){
//         sum = sum+arr[i];
//     }
//     console.log(sum);
//     return sum;
// }
// additionAll(arr)

// let value = 0;
// do {
//     value++;
//     ++value;
// } while (value++ < 25);

// console.log(value);

// let a = 2.25;
// console.log(`a = ${a}`);


// let ceil = Math.ceil(a);
// console.log(`ceil = ${ceil}`);

// let floor = Math.floor(a);
// console.log(`floor = ${floor}`);

// let round = Math.round(a);
// console.log(`round = ${round}`);

// let trunc = Math.trunc(a);
// console.log(`trunc = ${trunc}`);

// let sqrt = Math.sqrt(a);
// console.log(`squrt = ${sqrt}`);

// let cbrt = Math.cbrt(a);
// console.log(`cbrt = ${cbrt}`);

// let abs = Math.abs(a);
// console.log(`abs = ${abs}`);

// let pi = Math.PI
// console.log(`pi = ${pi}`);

// const fun1 = (min, max) => {
//     let rndm = [];
//     for (let i = min, k = 0; i <= max; i++, k++) {
//         rndm[k] = Math.floor(Math.random() *(max-min)+min);
//     }
//     console.log(rndm);
// }

// fun1(2,7);


// function findLength(num){
//     let length = 0;

//     while(num != 0){
//         num = Math.floor(num/10);
//         length++;
//     }
//     console.log(length);
//     return length;
// }

// findLength(098765434567890);

// let x = [1, 2, 2, 4, 2, 4];
// function getOccurance(array,num){
//     let len = array.filter((currElem)=> currElem === num).length
//     console.log(len);
//     return len;
// }

// getOccurance(x,2);

// let MaxNum = Math.max(...x);
// let c = 0;
// for(let i = 0; i<x.length; i++){
//     if (MaxNum == x[i]){
//         c = c+1;
//     }
// }
// alert(c);


// Conversion from decimal to hex

// function hexCode(num){

//     num = num.toString(16);
//     console.log(num);
//     return num
// }

// hexCode(12)



// GCD

// function GCD(num1, num2) {
//     let max = Math.max(num1,num2);
//     let min = Math.min(num1,num2);
//     if (max % min === 0) {
//         console.log(min);
//         return min;
//     }
//     else {
//         let mid = Math.floor(max/2);
//         for (let i = mid; i > 0; i--) {
//             if ((max % i == 0) && (min % i == 0)){
//                 console.log(i);
//                 return i;
//             }
//         }
//     }
// }

// GCD(16,12);


// function countChild(child, toys){
//     if(toys>child){
//         let final = toys%child;
//         console.log(final);
//         return final;
//     }
//     else{
//         console.log(toys);
//         return toys;
//     }
// }
// countChild(5,30);


// reverse the Number
// function ReverseNumber(num){
//     let rem=0;
//     let finalNum=0
//     while(num>0){
//         rem = num % 10;
//         num = Math.floor(num / 10);
//         finalNum = finalNum*10+rem;
//     }
//     console.log(finalNum);
//     return finalNum;
// }
// ReverseNumber(1234567);


// let i = 1;
// ++i;
// do{
// i++;
// }while(++i > 5)
// console.log(i);