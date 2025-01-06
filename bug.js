```javascript
function myFunction(a, b) {
  if (a === undefined || b === undefined) {
    return 0; // Handle undefined inputs
  }
  return a + b;
}

console.log(myFunction(undefined, 5)); // Output: 0
console.log(myFunction(10, undefined)); // Output: 0
console.log(myFunction(5, 10)); // Output: 15
```