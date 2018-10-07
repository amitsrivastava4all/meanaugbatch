app2.factory("myfactory",()=>{
    const itemOperations = {
        items:[],
        add(itemObject){
            var item = new Item(itemObject.id, itemObject.name, itemObject.desc, itemObject.price, itemObject.color, itemObject.date);
            this.items.push(item);
          // this.items.push(itemObject); 
           return this.items;
        },
        mark(id){
            var itemObject = this.items.find(itemObject=>itemObject.id == id);
            itemObject.toggle();
        },
        countMark(){
        var counter = this.items.filter(itemObject=>itemObject.markForDelete).length;
            console.log("Counter is ",counter);
            return counter;
    }

    };
    return itemOperations;
})