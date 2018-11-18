app.factory("usergroupservice",($firebaseArray)=>{
    var userGroupReference = firebase.database().ref("/group");
    var questionsReference = firebase.database().ref("/questions");
const object ={
getGroups(){
    
    
    return $firebaseArray(userGroupReference);
},
getTest(){
    return $firebaseArray(questionsReference)
}
}
return object;
});

