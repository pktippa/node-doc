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
   