const fs = require('fs')

var dirname = "D:/xampp/htdocs/nodejs-projects/Link-to-Chrome-APP/bin/"

fs.writeFile(dirname + 'argvs.txt', JSON.stringify(process.argv, null, "\t"), function(err) {
    if(err) {
        return console.log(err);
    }
}); 

// 要先確認一下輸入的網址
if (typeof(process.argv[2]) !== "string") {
  throw "URL is need."
  process.exit()
}

var url = process.argv[2]
if (url.startsWith("chrome-app://")) {
  url = url.slice( ("chrome-app://").length, url.length )
}

if (url.startsWith("//")) {
  url = "https:" + url
}
else if (url.startsWith("https://") === false 
          && url.startsWith("http://") === false) {
  url = "https://" + url
}


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

const { exec } = require('child_process');
//exec(command)

fs.writeFile(dirname + 'commend.bat', command, function(err) {
    if(err) {
        return console.log(err);
    }
}); 