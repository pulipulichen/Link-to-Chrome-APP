// 要先寫入bat，然後再來呼叫？
// http://blog.pulipuli.info/2017/03/windowssystem-protocol-open-windows.html?m=1

const fs = require('fs');
fs.writeFile("test-AAA.txt", "Hey there!\n" + JSON.stringify(process.argv), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 