app2.factory("myfactory",()=>{
    const itemOperations = {
        items:[],
        add(itemObject){
            var item = new Item(itemObject.id, itemObject.name, itemObject.desc, itemObject.price, itemObject.color, itemObject.date);
            this.items.push(item);
            return this.items;
        }

    };
    return itemOperations;
})