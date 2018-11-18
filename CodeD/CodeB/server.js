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
    console.log("Url is ",url ," Method is  ",method);
    var url = request.url;
    var method = request.method;
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
        var readStream =fs.createReadStream(homePagePath)
        readStream.pipe(response);
        /*fs.readFile(homePagePath,(error,content)=>{
            if(content){
            response.end(content);
            }
        })*/
     }
    else
    if(url=='/register'){
        response.end('Register ....')
    }
    else
    if(url.includes('/login') && method=='GET'){
        const urlObj = require("url");
        var uObject = urlObj.parse(url,true);
        console.log("UObject is ",uObject, " ",uObject.query.userid);
        if(uObject.query.userid==uObject.query.pwd){
            const ejs = require("ejs");
            var ejsFilePath = path.join(__dirname,'/views/welcome.ejs');
        fs.readFile(ejsFilePath, 'utf-8', function(error, source){
            var template = ejs.compile(source);  // Jade Source Code Compile
            
            var html = template({user:{username:uObject.query.userid,dt:new Date()}}); // Mix Template with JavaScript Object
            response.end(html);
        });

            //response.end('welcome');
        }
        else{
            response.end('invalid userid or password');
        }
        //response.end('Login....');
    }
    else
    if(url=='/login' && method=='POST'){
       var data='';
        request.on('data',chunk=>{
            data+=chunk;
       })
       request.on('end',()=>{
           console.log('data is ',data);
           data = JSON.parse(data);
           //const queryString = require("querystring");
           //var uObject = queryString.parse(data);
           //console.log("object is",uObject);
         console.log("Details ",data.userid, " ", data.pwd)
           if(data.userid==data.pwd){
          // if(uObject.userid==uObject.pwd){
            //response.end({data:'Welcome'});
          response.end('welcome');
        }
        else{
            response.end('invalid userid or password');
        }
       })
       //response.end('POST');
       
        //response.end('Login....');
    }
    else{
response.write('Hello Client '+url);
response.end();
    }
    //console.log("Handle Request Call....");
}