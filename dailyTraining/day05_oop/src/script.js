// ######### Array #########
// forEach
const arr = [1, 2, 3, 4, 5, "a"];
console.log("forEach output:");
arr.forEach((element) => console.log(element));

// filter
const number = arr.filter((element) => typeof element === "number");
console.log("filter output for numbers:", number);

// map
const mapNum = arr.map((num) => num * 2);
console.log("map output:", mapNum);

// find
const findNum = arr.find((num) => num > 3);
console.log("find output:", findNum);

// includes
console.log("includes output (5):", arr.includes(5)); //true
console.log("includes output (b):", arr.includes("b")); //false

// join
const joinArr = arr.join(" | ");
console.log(joinArr);

// pop
let arr1 = [1, 2, 3, 4, 5, "a"];
console.log("item poped:", arr1.pop());
console.log("arr1 after pop", arr1);

// push
let arr2 = [1, 2, 3, "a"];
console.log("item pushed:", arr2.push("b"));
console.log("arr2 after push", arr2);

// reduce
let arr3 = [1, 2, 3];
const sum = arr3.reduce((acc, curr) => acc + curr, 0);
console.log("reduce output:", sum);

// sort
arr1 = [5, 3, 1, 2, 4];
console.log("sort output:", arr1.sort());

// slice
const sliced = arr.slice(3);
console.log("slice output:", sliced);

// reverse
const reverse = arr2.reverse();
console.log("reverse output:", reverse);

// some
const has3 = arr.some((num) => num === 3);
console.log("array has 3:", has3);

// every
arr2 = [1, 2, 3];
const every1 = arr.every((element) => typeof element == "number");
const every2 = arr2.every((element) => typeof element == "number");
console.log("every element in arr is number:", every1); //false
console.log("every element in arr2 is number:", every2); //true

// findIndex
const index = arr.findIndex((element) => element == 5);
console.log("find index:", index);

// #########static#########
// isInteger
console.log("number isInteger output (0):", Number.isInteger(0));
console.log("number isInteger output (0.5):", Number.isInteger(0.5));

//isNaN
console.log("number isNaN output (NaN):", Number.isNaN(NaN));
console.log("number isNaN output (4):", Number.isNaN(1));

// parseInt
console.log("parseInt output ('123'):", parseInt("123"));

// parseFloat
console.log("parseFloat output ('1.5'):", parseFloat("1.5"));

// ######### Strings #########
// split
const str = "Hello World";
const splitStr = str.split(" ");
console.log("split output:", splitStr);

// toUpperCase
const upperStr = str.toUpperCase();
console.log("toUpperCase output:", upperStr);

// toLowerCase
const lowerStr = str.toLowerCase();
console.log("toLowerCase output:", lowerStr);

// includes
console.log("includes output ('Hello'):", str.includes("Hello"));
console.log("includes output ('hello'):", str.includes("hello"));

// charAt
const char = str.charAt(4);
console.log("charAt output:", char);

// slice
const slicedStr = str.slice(2, 8);
console.log("slice output:", slicedStr);

// replace
const replaceStr = str.replace("World", "Everybody");
console.log("replace output:", replaceStr);

// substring
const substr = str.substring(2, 8);
console.log("substring output:", substr);

// trim
const str2 = "   hello world   ";
const trimStr2 = str2.trim();
console.log("trim output:", trimStr2);

// ######### Object #########
// static
const student = {
  name: "john",
  age: 20,
  address: {
    street: "123 main st",
    city: "San Francisco",
    state: "CA",
    zip: 12345,
  },
  phone: 1234567890,
};
//adding property
student.email = "email@college.edu";
console.log(student);

//update the exitst property
student.age = 25;
student.address.zip = 56789;

//remove property
delete student.phone;

// entries
const entries = console.log(Object.entries(student));
console.log("object entries output:", entries);

// keys
const keys = console.log(Object.keys(student));
console.log("object keys output:", keys);

// values
const values = Object.values(student);
console.log("object values output:", values);
