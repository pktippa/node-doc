1. How to calculate execution time of code

   // Using date
   
   var start = new Date();

   setTimeout(function (argument) {
      // execution time simulated with setTimeout function
      var end = new Date() - start;
      console.info("Execution time: %dms", end);
   }, 1000);
  
   // Output: Execution time: 1002ms
  
   // Using process
   var hrstart = process.hrtime();

   setTimeout(function (argument) {
      // execution time simulated with setTimeout function
      var hrend = process.hrtime(hrstart);
      console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
   }, 1);

  // Output: Execution time (hr): 0s 1.025075ms
  
  // Using console
  console.time("execution");
  
  setTimeout(function (argument) {
      // execution time simulated with setTimeout function
      console.timeEnd("execution");
   }, 1000);
   
   // Output: execution: 1001ms