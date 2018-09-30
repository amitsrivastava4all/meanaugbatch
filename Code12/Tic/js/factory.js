app.factory("myfactory",()=>{
    const object = {
        buttons:[],
        state:false,
        fillArray(){
            for(let i =1; i<=9; i++){
                this.buttons.push(new Button(i));
            } 
            return this.buttons;   
        },
        updateButton(position){
            this.state = this.buttons[position-1].toggle(this.state);
            if(this.gameOver()){
                return "Game Over";
            }
        },
        gameOver(){
            if(this.isNotBlank(0) && this.isNotBlank(1) && this.isNotBlank(2)){
                if(this.compareRow(0,1,2)){
                    return true;
                }
            }
            else
            if(this.isNotBlank(0) && this.isNotBlank(3) && this.isNotBlank(6)){
                if(this.compareRow(0,3,6)){
                    return true;
                }
            }
            return false;
        },
        isNotBlank(index){
            return this.buttons[index].value==''?false:true;
        },
        compareRow(first, second,third){
            console.log(" first ",this.buttons[first]);
            console.log(" second ",this.buttons[second]);
            console.log(" third ",this.buttons[third]);
            if(this.buttons[first].value==this.buttons[second].value && this.buttons[first].value == this.buttons[third].value){
                return true;
            }
            return false;
        }

    };
    return object;
})