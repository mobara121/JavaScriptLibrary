/**************************
 * POST - /createuser(signup)
 ************************/
function userSignUp(){
    let userName = document.getElementById('userSignUp').value;
    let userPass = document.getElementById('passSignUp').value;
    console.log(userName, userPass);

    let newUserData = {user : { username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/createuser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}

/**************************
 * POST - /signin
 ************************/
function userSignIn(){
    let userName = document.getElementById('userSignin').value;
    let userPass = document.getElementById('passSignin').value;
    console.log(userName, userPass);

    let UserData = {user : { username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/signin', {  //signin route used!!
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UserData)
    })
    .then(response => response.json())
    .then(function (response) {
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
    });
}
/**************************
 * HELPER FUNVTION FOR TOKEN
 ************************/
function getSessionToken(){
    var data =localStorage.getItem('SessionToken');
    console.log(data);
    return data;
}