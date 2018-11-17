const http = require("http");
const path = require("path");
const fs = require("fs");
http.createServer(handleRequestResponse).listen(process.env.PORT || 1234,()=>{
    console.log("Server Start");
});
// http.createServer((request,response)=>{

// }).listen(1234,()=>{
    
// })

function isStaticResource(url){
    var staticArr = [".png",".jpg",".jpeg",".js",".css",".html"];
    var extName = path.extname(url);
    console.log("ExtName is ",extName);
    return staticArr.indexOf(extName)>=0;
}

function handleRequestResponse(request, response){
    var url = request.url;
    console.log("Url is :::: ",url);
    if(url=='/'){
        
        var homePagePath = path.join(__dirname,"public/index.html");
        isStaticResource(homePagePath);
        fs.readFile(homePagePath,(error,content)=>{
            if(content){
            response.end(content);
            }
        })
    }
    else
     if(isStaticResource(url)){
        var homePagePath = path.join(__dirname,"public"+url);
      
        fs.readFile(homePagePath,(error,content)=>{
            if(content){
            response.end(content);
            }
        })
     }
    else
    if(url=='/register'){
        response.end('Register ....')
    }
    else
    if(url=='/login'){
        response.end('Login....');
    }
    else{
response.write('Hello Client '+url);
response.end();
    }
    //console.log("Handle Request Call....");
}