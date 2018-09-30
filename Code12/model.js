app.factory("salarydetails",($http, $q)=>{
    console.log("Factory Loaded...",payrollObject);
    payrollObject.callServer = ()=>{
        var url = "https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
        var defer = $q.defer();
        $http.get(url).then(data=>{
           defer.resolve(data);
        },(err)=>{
            defer.reject(err);
        })
        return defer.promise;
    }
return payrollObject;
});