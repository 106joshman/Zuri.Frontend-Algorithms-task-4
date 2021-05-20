// Frontend Algorithm Task 4

//Q1. write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

const convertFahrToCelsius = (fahr) => {
  if (fahr === null || fahr === undefined) {
    console.log(`enter a value for fahrenheit`);
  }
  if (fahr instanceof Array) {
    console.log(
      `${JSON.stringify(fahr)} is not a valid number but a/an array.`
    );
  } else if (fahr instanceof Object) {
    console.log(
      `${JSON.stringify(fahr)} is not a valid number but a/an object.`
    );
  } else if (
    (typeof fahr === "number" || typeof fahr === "string") &&
    /^[0-9]+$/.test(fahr)
  ) {
    let myFahr = fahr * (9 / 5) + 32;
    console.log(myFahr.toFixed(4));
  } else {
    console.log(typeof fahr);
    console.log(`${JSON.stringify(fahr)} is not a valid number but a string.`);
  }
};

convertFahrToCelsius([1,2,3,4]);
convertFahrToCelsius("story");
convertFahrToCelsius(12);


//Q2. write a function named "checkYuGiOh" that takes a nmuber, n, as an arguement, creates an array of numbers from 1 to n and replaces factors of 2,3 and 5 with "yu", "gi", and "oh", logs the resulting array to the console and then returns the resulting array.


const getString = (val) => {
  let replacement = [];
  if (val % 2 === 0) {
    replacement.push("yu");
  }
  if (val % 3 === 0) {
    replacement.push("gi");
  }
  if (val % 5 === 0) {
    replacement.push("oh");
  }
  return replacement.length > 0 ? replacement.join("-") : val;
};

const checkYuGiOh = (n) => {
  const ans = Array(n)
  .fill()
  .map((_, index) => getString(index + 1));
  console.log(ans);
  return ans;
};

checkYuGiOh(2);
checkYuGiOh(7);
checkYuGiOh(22);