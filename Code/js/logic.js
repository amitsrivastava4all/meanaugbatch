function compute(opr){
    var result = 0;
    var firstNumber= document.querySelector("#first").value;
     var secondNumber= document.querySelector("#second").value;
     // calcObject.add()
     result = calcObject[opr](firstNumber,secondNumber);
    // if(opr=='+'){
    //    result =  add(firstNumber,secondNumber);
    // }
    // else
    // if(opr=='-'){
    //     result =  sub(firstNumber,secondNumber);
    //  }
    //  else
    //  if(opr=='*'){
    //     result =  mul(firstNumber,secondNumber);
    //  }
    //  else
    //  if(opr=='/'){
    //     result =  div(firstNumber,secondNumber);
    //  }
     document.querySelector("#result").innerHTML = result;
}
// function add(){
// // Read the text box value and put in firstNumber variable
// var firstNumber= document.querySelector("#first").value;
// var secondNumber= document.querySelector("#second").value;
// console.log("Loaded..." +firstNumber+" "+secondNumber );
// var sum = parseInt(firstNumber) + parseInt(secondNumber);
// document.querySelector("#result").innerText= "<b>"+sum+"</b>";
// }
// function sub(){
//     // Read the text box value and put in firstNumber variable
//     var firstNumber= document.querySelector("#first").value;
//     var secondNumber= document.querySelector("#second").value;
//     console.log("Loaded..." +firstNumber+" "+secondNumber );
//     var sum = firstNumber - secondNumber;
//     document.querySelector("#result").innerHTML= "<b>"+sum+"</b>";
//     }
//     function mul(){
//         // Read the text box value and put in firstNumber variable
//         var firstNumber= document.querySelector("#first").value;
//         var secondNumber= document.querySelector("#second").value;
//         console.log("Loaded..." +firstNumber+" "+secondNumber );
//         var sum = firstNumber * secondNumber;
//         document.querySelector("#result").innerHTML= sum;
//         }
//         function div(){
//             // Read the text box value and put in firstNumber variable
//             var firstNumber= document.querySelector("#first").value;
//             var secondNumber= document.querySelector("#second").value;
//             console.log("Loaded..." +firstNumber+" "+secondNumber );
//             var sum = firstNumber / secondNumber;
//             document.querySelector("#result").innerHTML= sum;
//             }