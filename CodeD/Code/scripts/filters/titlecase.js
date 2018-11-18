
app2.filter("titlecase",()=>{
    return (str)=>{
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }
})