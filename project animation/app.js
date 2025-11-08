//querySelector  --> css selector , id, class , tag
// js ka powerful method h jo html ele ko css selector k through find krny k lea use hota h
//p , .head1, #main , div > p
//
let oldhead1 = document.getElementsByClassName("head1")[0];
oldhead1.style.color = "blue";
let oldHead = document.querySelector(".head1"); //get first  matching element
console.log(oldHead);
let allheading = document.querySelectorAll(".head1"); // getting all the matching elements // use for multiple element
// querySelectorAll jb use kia to Node List
// let allheading2= document.getElementsByClassName("head1") // getting all the matching element // use for multiple element
console.log(allheading);
// .foreach --> querySelectorAll --> run loop through multiple selected elements in the DOM.

allheading.forEach((head) => {
  // use for performing actions //does not return anything. It return value undefine
  head.style.color = "red";
});
let imageEle = document.querySelectorAll(".image");
let imgArr = Array.from(imageEle);
console.log(imgArr);
console.log(imageEle);
imageEle.forEach((img) => {
  img.src =
    "https://i.pinimg.com/736x/9f/f8/75/9ff875b242d406cf4aec9d274e11fade.jpg";
});
imgArr.map((img, index) => {
  img.src =
    "https://i.pinimg.com/736x/2c/8d/27/2c8d279757d005851ef670d0d703fd89.jpg";
});

const nums = [1, 2, 3, 4, 5];
// const result = nums.forEach((n) => { // array method // undefined
//   return n * 2;
// }); // lambda function
// console.log(result); // undefined

const result = nums.map((n, index) => {
  // array method // apply function on each element of original array and return a new array // it doesnot change original array // jb bhi hmn data ko change krna ho transform krna ho tb hm map
  return n * 2;
});
console.log(result); // return new array
console.log(nums);

const checkEvenOdd = nums.map(
  (n) => (n % 2 === 0 ? n : "Odd number")

  //   if (n % 2 === 0) {
  //     console.log(n);
  //   } else {
  //     console.log("Odd  Number");
  //   }
);
console.log(checkEvenOdd);
