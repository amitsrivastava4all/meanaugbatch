console.log(__dirname);
console.log(__filename);
//const buffer = new Buffer("this is a sample text to buffer",'utf-8');
//const buffer = new Buffer(100);
const buffer = Buffer.from("this is a sample text ",'utf-8');
console.log(buffer);
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });