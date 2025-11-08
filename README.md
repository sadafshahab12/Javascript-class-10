🧠 Class Summary
🎯 1. DOM Selection Methods

document.querySelector(".apple") → selects first element with class .apple.

document.querySelectorAll(".apple") → selects all elements with that class, returns a NodeList.

document.getElementsByClassName("apple") → returns an HTMLCollection (looks like array, but isn’t).

💡 NodeList and HTMLCollection both look like arrays but don’t have array methods like .map() or .forEach() (HTMLCollection doesn’t even support .forEach()).

⚙️ 2. Converting NodeList / HTMLCollection into Array

Use Array.from() to convert them into a real array:

let makingArr = Array.from(getApple);


Now you can safely use:

makingArr.forEach((apple, index) => {
  console.log(`${index + 1} - the ${apple.textContent} is red`);
});

🍎 3. Looping with forEach

.forEach() runs a function for every item in an array — used when you just want to perform an action.

Example:

guestList.forEach((guest) => {
  console.log(`${guest} is invited`);
});

🧩 4. Using .map()

.map() creates a new array after transforming each element.

let titledName = guestList.map((name) => `Ms. ${name}`);

🍊 5. Selecting List Items

You can grab all <li> items like:

let fruitList = document.querySelectorAll(".fruit-list li");
let fruitArray = Array.from(fruitList);
fruitArray.forEach((fruit) => {
  console.log(`This fruit ${fruit.textContent} is very sweet.`);
});

🧵 6. Working with Strings

charAt(0) → gives you the first character of a string.

slice(1) → takes the rest of the string after the first letter.

Combine with .toUpperCase() and .toLowerCase() for title case:

let myStudent = "sumaira abiden";
let titleCase = myStudent.charAt(0).toUpperCase() + myStudent.slice(1).toLowerCase();
console.log(titleCase); // Sumaira abiden

💡 7. Array.from() on Strings

You can also turn a string into an array of characters:

let newArr = Array.from("science department");
console.log(newArr);

🏁 Key Takeaways

querySelector → selects one.

querySelectorAll → returns NodeList (forEach OK).

getElementsByClassName → returns HTMLCollection (convert with Array.from()).

.forEach() → perform actions.

.map() → make new arrays.

Array.from() → converts iterable (NodeList, string) into array.

charAt(), slice(), toUpperCase(), toLowerCase() → perfect for string formatting.