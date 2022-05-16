//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function onlyEvensFinder(arr) {
  let onlyEvens = [];
  arr.forEach((num) => {
    if (e % 2 === 0) {
      onlyEvens.push(e);
    }
  });
  return onlyEvens;
}
console.log(onlyEvensFinder([1, 2, 3, 4, 5, 6]));
