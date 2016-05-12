1. Run multiple commands from child_process.exec in windows

   var exec = require('child_process').exec;
   var str = 'echo "hello" & echo "world"'; // Use & to add multiple commands
   exec(str, function(err, stdout, stderr){
      // Gets stdout as 
      // "hello"
      // "world"
   }