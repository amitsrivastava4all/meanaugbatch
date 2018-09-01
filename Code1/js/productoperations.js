window.addEventListener("load",init);

const productOperations = {
     products : [],
     prepareProducts(){
        var onion = new Product(10,"Onion",20,"Onion","https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg");
    var apple = new Product(11,"Apple",120,"Apple","https://www.bigbasket.com/media/uploads/p/s/1203781_1-fresho-apple-washington-regualr.jpg");
    var mango = new Product(12,"Mango",220,"Mango","https://www.bigbasket.com/media/uploads/p/s/40001001_11-maaza-juice-mango.jpg");
    
    
    this.products.push(onion);
    this.products.push(apple);
    this.products.push(mango);
    console.log("Products are ",this.products);
    
    },
     printProducts(){
        for(let product of this.products){
            var myDiv = document.createElement("div");
            var img = document.createElement("img");
            img.src = product.photo;
            myDiv.appendChild(img);
            var p = document.createElement("p");
            p.innerText= "Price "+product.price;
            myDiv.appendChild(p);
            document.body.appendChild(myDiv);
        }
    }
}
productOperations.prepareProducts();
function init(){

productOperations.printProducts();
}

