// 要先寫入bat，然後再來呼叫？
// http://blog.pulipuli.info/2017/03/windowssystem-protocol-open-windows.html?m=1

// 要先確認一下輸入的網址
if (typeof(process.argv[2]) !== "string") {
  throw "URL is need."
  process.exit()
}

var url = process.argv[2]
if (url.startsWith("//")) {
  url = "https:" + url
}
else if (url.startsWith("https://") === false 
          && url.startsWith("http://") === false) {
  url = "https://" + url
}

const fs = require('fs');

// 先確認一下chrome可能位置
var chromeLocationCandidateList = [
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
]
var chromeLocation

for (var i = 0; i < chromeLocationCandidateList.length; i++) {
  var path = chromeLocationCandidateList[i]
  //console.log(path)
  //console.log(fs.existsSync(path))
  if (fs.existsSync(path)) {
    chromeLocation = path
    break
  }
}

if (chromeLocation === undefined) {
  throw "Google Chrome is not found."
  process.exit()
}

// 然後來確認呼叫指令
var command = '"' + chromeLocation + '" --app=' + url

fs.writeFile("commend.bat", command, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 