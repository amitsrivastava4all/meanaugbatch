
class Button{
    constructor(position){
        this.position = position;
        
        this.value = '';
    }
    toggle(state){
        if(!this.value){
        this.value = state?"X":"0";
        //console.log("")
        state = !state;
        }
        return state;

    }
}