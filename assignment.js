// print hello world to the conole
//console.log("hello world");

//==========================================

// function reverse(str) {
//   let rvd = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     rvd += str[i];
//   }
//   return rvd;
// }


// // Example usage:
// const originalString = "Ali hamed from Sohag";
// const reversedString = reverse(originalString);
// console.log(reversedString);

//======================================================

// function evenOdd(num){
    
//     if (num %2 == 0)
//     console.log("even")
//     else 
//     console.log("odd")
    
// }
// evenOdd(5)
    
//========================================================

// function MinMax() {
//     let Arr = [33,44,113,50,21,56, 60, 202,31, 10, 40,12];
 
//     let minValue = Math.min(...Arr);
//     let maxValue = Math.max(...Arr);
     
//     console.log("Minimum : " + minValue);
//     console.log("Maximum : " + maxValue);
// }
 
// MinMax()
//==================================================

// Function to perform addition
// function add(a, b) {
//     return a + b;
//   }
  
//   // Function to perform subtraction
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   // Function to perform multiplication
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   // Function to perform division
//   function divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   }
  
//   // Get user input
//   const num1 = parseFloat(prompt("Enter the first number:"));
//   const num2 = parseFloat(prompt("Enter the second number:"));
  
//   // Perform calculations
//   const additionResult = add(num1, num2);
//   const subtractionResult = subtract(num1, num2);
//   const multiplicationResult = multiply(num1, num2);
//   const divisionResult = divide(num1, num2);
  
//   // Display results
//   console.log(`Addition: ${additionResult}`);
//   console.log(`Subtraction: ${subtractionResult}`);
//   console.log(`Multiplication: ${multiplicationResult}`);
//   console.log(`Division: ${divisionResult}`);
  
  //==========================================================

  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // Return primitive values and functions as is
    }
  
    if (Array.isArray(obj)) {
      const newArray = [];
      for (let i = 0; i < obj.length; i++) {
        newArray[i] = deepClone(obj[i]);
      }
      return newArray;
    }
  
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepClone(obj[key]);
      }
    }
  
    return newObj;
  }
  
  // Example usage:
  const originalObject = {
    name: "John",
    age: 30,
    hobbies: ["reading", "swimming"],
    address: {
      street: "123 Main St",
      city: "Exampleville",
    },
  };
  
  const clonedObject = deepClone(originalObject);
  
  console.log(originalObject);
  console.log(clonedObject);
  
  // Modify the cloned object to demonstrate deep cloning
  clonedObject.name = "Alice";
  clonedObject.hobbies.push("painting");
  clonedObject.address.city = "New Exampleville";
  
  console.log(originalObject); // The original object remains unchanged
  console.log(clonedObject);   // The cloned object has its modifications

  //===============================================

  //=====================================

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: if the array has 0 or 1 elements, it's already sorted.
    }
  
    // Split the array into two halves.
    const middleIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middleIndex);
    const rightHalf = arr.slice(middleIndex);
  
    // Recursively sort both halves.
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);
  
    // Merge the two sorted halves back together.
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from the left and right arrays and merge them into a single sorted array.
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // If there are remaining elements in the left or right array, append them to the result.
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  