class Item{
    constructor(id, name,desc, price, color, date){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.color = color;
        this.date = date;
        this.markForDelete = false;
    }
    toggle(){
        this.markForDelete = !this.markForDelete;
    }
}