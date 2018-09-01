class Product{
    
    constructor(id, name,price, desc, photo="", qt=0){
        this.id = id; // Member Var = Local Var
        this.name = name;
        
        this.price = price || 0;
        this.photo = photo;
        this.qt = qt;
        desc = desc || ""; 
        this.desc = desc;
    }
    
}


