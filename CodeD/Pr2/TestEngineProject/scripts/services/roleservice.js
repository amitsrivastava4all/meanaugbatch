
app2.factory("roleservice",()=>{
    const roles = {
        'T':[{name:'Add Question',link:'/addquestion'},{name:'Add Group',link:'/addgroup'},{name:'Assign Test',link:'/assigntest'}],
        'S':[{name:'Take Test',link:'/taketest'},{name:'Show Test',link:'/showtest'}]
    }
    return roles;
})