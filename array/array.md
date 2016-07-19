1. Add element to array at the end
   
   arr.push("element");
   
2. Remove element from array at the end

   arr.pop();
   
3. Add element to array at the start

   arr.unshift("element");
   
4. Remove element from array at the start

  arr.shift();
  
5. Filter elements from array

   var array = [1, 2, 4, 3, 8, 10];
   var filterResults =  function(element){
      if(element > 5)
        return element;
   }
   var filteredArray = array.filter(filterResults);   
   
6. Convert array of integers in string format to number format

   var str = "13456778";
   var arr =  str.split(''); // [ '1', '3', '4', '5', '6', '7', '7', '8' ]
   arr.map(Number); // [ 1, 3, 4, 5, 6, 7, 7, 8 ]    
   
   
7. Get max/min of array
   var arr = [ 1, 3, 4, 5, 6, 7, 7, 8 ];
   
   // Method 1 - this will fail For big arrays (~10^7 elements) gives RangeError: Maximum call stack size exceeded
    
   var maxVal = Math.max.apply(Math,arr);
   var minVal = Math.min.apply(Math,arr);
   
   // Method 2 - another implementation
   
   function arrayMin(arr) {
     return arr.reduce(function (p, v) {
       return ( p < v ? p : v );
     });
   }
   function arrayMax(arr) {
     return arr.reduce(function (p, v) {
       return ( p > v ? p : v );
     });
   }
   
   // Method 3 - more performant
   
   function arrayMin(arr) {
     var len = arr.length, min = Infinity;
     while (len--) {
       if (arr[len] < min) {
         min = arr[len];
       }
     }
     return min;
   };

   function arrayMax(arr) {
     var len = arr.length, max = -Infinity;
     while (len--) {
       if (arr[len] > max) {
         max = arr[len];
       }
     }
     return max;
   };
   
8. Sort
   
   // Strings
   var fruits = ["Banana", "Orange", "Apple", "Mango"];
   fruits.sort(); // fruits will be assigned to  - Apple,Banana,Mango,Orange
   
   // Numbers
   var nums = [0,1,7,10,9,14];
   nums.sort(); // nums will be assigned to [ 0, 1, 10, 14, 7, 9 ] - sorted based on chars
   
   // Ascending order
   nums.sort(function(a,b){return a-b;}); // nums will be assigned to [ 0, 1, 7, 9, 10, 14 ]
 - sorted based on values in ascending
 
   // Descending order
   nums.sort(function(a,b){return b-a;}); // nums will be assigned to [ 14, 10, 9, 7, 1, 0 ]
 - sorted based on values in descending
 
9. Element existence

   var element = 'one';
   var arr = ['zero', 'one', 'two', 'three'];
   
   arr.indexOf(element); // Returns index of element if exists or returns -1
   
   
10. Stack and Queue

   // Stack
   var stack = [];
   stack.push(2);       // stack is now [2]
   stack.push(5);       // stack is now [2, 5]
   var i = stack.pop(); // stack is now [2]
   
   // Queue
   var queue = [];
   queue.push(2);       // queue is now [2]
   queue.push(5);       // queue is now [2, 5]
   var i = queue.shift(); // queue is now [5]

11. Check object is array or not

  var x = {"a":1, "b":1};
  console.log(Array.isArray(x));
  x = ["a", "b"];
  console.log(Array.isArray(x));