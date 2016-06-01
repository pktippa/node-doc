1. Check file exists or not

var fs = require('fs');

try {
    fs.accessSync(path, fs.F_OK);
    // Do something
} catch (e) {
    // It isn't accessible
}

// Or

fs.access(path, fs.F_OK, function(err) {
    if (!err) {
        // Do something
    } else {
        // It isn't accessible
    }
});