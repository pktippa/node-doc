1. Run multiple commands from child_process.exec in windows

   var exec = require('child_process').exec;
   var str = 'echo "hello" & echo "world"'; // Use & to add multiple commands
   exec(str, function(err, stdout, stderr){
      // Gets stdout as 
      // "hello"
      // "world"
   }
   
2. child_process.exec with listening to stdout data event.
   
   var exec = require('child_process').exec;
   var execString = "node --version&npm --version";
   var child = exec(execString);
   child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
   });
   
   child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
   });
   
   child.on('close', function(code) {
    console.log('closing code: ' + code);
   });