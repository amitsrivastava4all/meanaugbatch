//window.addEventListener("DOMContentLoaded",beforeinit);
// window.addEventListener("DOMContentLoaded",function(){
//     productOperations.prepareProducts();
// };
window.addEventListener("DOMContentLoaded",()=>productOperations.prepareProducts());
window.addEventListener("load",init);
// function beforeinit(){
//     productOperations.prepareProducts();
// }
function init(){
   
    printProducts();
    }

    // function prepareImage(photo){
    //     var img = document.createElement("img");
    //         img.src = photo;
    //         return img;
    // }
   // const a = 10;

  
    const prepareImage=(photo)=> {
        var img = document.createElement("img");
        img.src=photo;
        return img;
}
    const prepareP=(price)=>{
        var  p = document.createElement("p");
       p.innerText = price;
       return p;
    }
    const addToCart =(id)=>{
       var button =  document.createElement("button");
       button.innerText = "Add to Cart";
       button.setAttribute("data-id",id); 
       button.addEventListener("click",addInCart);  // button.addInCart
       return button;
    } 
    function addInCart(){
        var id = this.getAttribute("data-id");
        console.log("Add in cart call ",id);
       this.innerText =  productOperations.toggle(id);
    }
    function printProducts(){
       // var products = productOperations.getProducts();
       //for(let product of products){
       for(let product of productOperations.getProducts()){ 
       
            let myDiv = document.createElement("div");
            
            myDiv.appendChild(prepareImage(product.photo));
            myDiv.appendChild(prepareP(product.price));
            myDiv.appendChild(addToCart(product.id));
            document.body.appendChild(myDiv);
           // let img = prepareImage(product.photo);
            //myDiv.appendChild(img);
            // let p = document.createElement("p");
            // p.innerText= "Price "+product.price;
           // myDiv.appendChild(p);
            
        }
    }