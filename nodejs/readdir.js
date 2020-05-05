//파일의 목록을 배열로 가져온다
var testFolder = "./data";
var fs = require("fs");
// function 자릿수, 위치 중요
fs.readdir(testFolder, function (err, filelist) {
    console.log(filelist);
});
