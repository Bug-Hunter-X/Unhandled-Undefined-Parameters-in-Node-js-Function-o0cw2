```javascript
function myFunction(a, b) {
  // Check if parameters are numbers or can be coerced into numbers
  a = typeof a === 'number' ? a : parseFloat(a);
  b = typeof b === 'number' ? b : parseFloat(b);

  // Handle NaN values (invalid numbers)
  if (isNaN(a) || isNaN(b)) {
    return 0; // Or handle as appropriate for your application
  }

  if (typeof a === 'undefined' || typeof b === 'undefined'){
      return 0;
  } else{
      return a + b;
  }
  
}

console.log(myFunction(undefined, 5)); // Output: 0
console.log(myFunction(10, undefined)); // Output: 0
console.log(myFunction(5, 10)); // Output: 15
console.log(myFunction('5', '10')); // Output: 15
console.log(myFunction('abc', 10)); // Output: 0
```