function doAjax() {
    var userid = document.querySelector("#userid").value;
    var pwd = document.querySelector("#pwd").value;
    console.log("Do Ajax ", userid, pwd);
    var userObject = {
        userid: userid,
        pwd: pwd
    };
    var fetchParams = {

        method: 'POST',
        body: JSON.stringify(userObject)
    };
    fetch('login', fetchParams).then(response => {
        console.log("Response is ", response);
        response.text().then(data=>{
            console.log("Data is ",data);
            document.querySelector("#msg").innerText = data;
        }).catch(e=>document.querySelector("#msg").innerText=e)
    }).catch(err => {
        document.querySelector("#msg").innerText=err;
        console.log("Error is ", err);
    })
}
