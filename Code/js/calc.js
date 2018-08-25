var calcObject = {
     add(x,y){
        return this.checkNaN(x) + this.checkNaN(y);
    }
    ,
     checkNaN(num){
        num = parseInt(num);
        return isNaN(num)?0:num;
    },
    
    sub(x,y){
        return this.checkNaN(x) - this.checkNaN(y);
    },
    
    mul(x,y){
        return this.checkNaN(x) * this.checkNaN(y);
    },
    
    div(x,y){
        return this.checkNaN(x) / this.checkNaN(y);
    }
}

