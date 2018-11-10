const fs = require("fs");
var path = require("path");
const basepath = "/Users/amit/Documents/songs";
//path = path.parse("/Users/amit/Documents/songs");
//console.log("Path is ",path);
var sourcePath;
var targetPath;
process.argv.forEach((params)=>{
 sourcePath = path.join(basepath,process.argv[2]);
 targetPath = path.join(basepath , process.argv[3]);
});
console.log("Source Path ",sourcePath);
console.log("Target Path ",targetPath);
const readStream = fs.createReadStream(sourcePath);
const writeStream = fs.createWriteStream(targetPath);
//readStream.pipe(writeStream);
readStream.on("data",(chunk)=>{
    writeStream.write(chunk);
})
readStream.on("error",(err)=>{
    console.log("Error is ",err);
})
readStream.on("end",()=>{
    console.log("Stream end");
})
console.log("Done");
/*fs.readFile(sourcePath,(err,content)=>{
    if(err){
        console.log("Invalid Path ",sourcePath);
    }
    else{
        fs.writeFile(targetPath,content,(err2)=>{
            if(err2){
                console.log("Error During Write ",err2);
            }
            else{
                console.log("Data Store...")
            }
        });
    }
})*/
//})
// node - 0 cp.js - 1 A.mp3-2  AA.mp3 -3
