// 要先寫入bat，然後再來呼叫？
// http://blog.pulipuli.info/2017/03/windowssystem-protocol-open-windows.html?m=1

const fs = require('fs');

var dirname = process.execPath
dirname = dirname.slice(0, dirname.lastIndexOf("\\") + 1)
var exePath = dirname + "\\open-chrome-app.exe"
exePath = exePath.replace("\\", "\\\\")

var reg = `Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\chrome-app]
@="URL:Chrome APP mode"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\chrome-app\DefaultIcon]
@="` + exePath + `"

[HKEY_CLASSES_ROOT\chrome-app\shell]
@=""

[HKEY_CLASSES_ROOT\chrome-app\shell\open]
@=""

[HKEY_CLASSES_ROOT\chrome-app\shell\open\command]
@="` + exePath + ` \"%1\""`

var regFilePath = "register-system-protocol.reg"
fs.writeFile("register-system-protocol.reg", reg, function(err) {
    if(err) {
        return console.log(err);
    }
    //console.log("The file was saved!");
    const { exec } = require('child_process');
    exec(regFilePath)
}); 