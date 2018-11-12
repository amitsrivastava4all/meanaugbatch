const fs = require("fs");
console.log("FS is ...."+fs);
var path = require("path");
var newpath = path.join(__dirname,"dir.js");
console.log("New Path is ",newpath);
var object = path.parse(newpath);
console.log("Object is ",object);
const cron = require("node-cron");
console.log("Watch Start...");
fs.watchFile(__filename,(current, old)=>{
console.log("File Change Happens ",current.mtime, " ",old.mtime);
})
/*cron.schedule('* * * * * *', () => {
    //console.log('running every minute to 1 from 5');
    const path = "/Users/amit/Dropbox/JSBooksShared";
fs.readdir(path,(err,files)=>{
    console.log("Files ",files);
    console.log("****************************")
})
  });*/
