// Consume Module
const chalk = require("chalk");

function showData(){
    var y = require("./x");
    console.log(chalk.green(y()));
console.log(chalk.red("Invalid User"));
}
module.exports = showData;