/*function add(x=0, y=0){
return x + y;
}
function subtract(x=0,y=0){
    return x - y;
}
const MAX = 100;
module.exports.add = add;
module.exports.sub = subtract;
module.exports.m = MAX;*/
const object = {
    MAX:100,
    add(x=0,y=0){
        return x + y;
    },
    subtract(x=0,y=0){
        return x - y;
    }
}
module.exports = object;
//var result = add(10,20);
//console.log("Result is ",result);


