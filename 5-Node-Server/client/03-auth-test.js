function fetchAllFromAuthRoute(){
    const fetch_url = `http://localhost:3000/authtest/getall`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(`http://localhost:3000/authtest/getall`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            
            console.log(data)
        })
}
/*********************************************
 * FETCH/POST to Auth/Create
 *********************************************/
function postToAuthRouteCreate(){
    const fetch_url = `http://localhost:3000/authtest/create`
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value;

    let authInputData = { authtestdata: { item: authTestDataInput}};

    const response = fetch(fetch_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {    
            console.log(data)
        })
}
/*********************************************
 * GET ITEM BY USER
 *********************************************/
function getOneByUser(){
    let postIdNumber = document.getElementById("getNumber").value;

    const fetch_url = `http://localhost:3000/authtest/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(`http://localhost:3000/authtest/${postIdNumber}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {    
            console.log(response);
            var myItem = document.getElementById('getItemValue');
            myItem.innerHTML = response.authtestdata;
        })
}

/*********************************************
 * PUT to authtest/update/:id
 *********************************************/
function updateItem(){
    let postIdNumber = document.getElementById("updateNumber").value;
    let authTestDataInput = document.getElementById("updateValue").value;

    const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')


    let authInputData = { authtestdata: { item: authTestDataInput} };
    const response = fetch(`http://localhost:3000/authtest/update/${postIdNumber}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {    
            console.log(data);
            var myItem = document.getElementById('newItemValue');
            myItem.innerHTML = data.authtestdata;
            fetchAllFromAuthRoute();
        })
}
/****************************
 * Getting Fancy/showCurrentData()
************************************ */
function showCurrentData(e){
    const fetch_url = `http://localhost:3000/authtest/${e.value}`
    const accessToken = localStorage.getItem('SessionToken')

    fetch(`http://localhost:3000/authtest/${e.value}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {    
            console.log(response);
            var myItem = document.getElementById('updateValue');
            if(!response) return;
            else myItem.value = response.authtestdata;
        })
}
/*********************************************
 * Deleting an Item
 *********************************************/
function deleteItem(){
    let postIdNumber = document.getElementById("deleteNumber").value;

    const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(`http://localhost:3000/authtest/delete/${postIdNumber}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            console.log(response);
            fetchAllFromAuthRoute()
        })
}
/*********************************************
 * Display All Items for a User
 *********************************************/
function fetchFromOneDisplayData(){
    const fetch_url = 'http://localhost:3000/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken')

    fetch('http://localhost:3000/authtest/getall', {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        })
    }) .then(
            function (response) {
                return response.json()
        })
        .catch(
            function(error) {
                console.error('Error:', error)
        })
        .then(
            function (response){
                let text = '';
                var myList = document.querySelector('ul#fourteen');
                while (myList.firstChild){
                    myList.removeChild(myList.firstChild)
                }

            console.log(response);
            for(r of response){
                var listItem = document.createElement('li');
                var textData = r.id + '' + r.authtestdata;
                listItem.innerHTML= textData;
                listItem.setAttribute('id', r.id);
                myList.appendChild(listItem);
                myList.addEventListner('click', removeItem);
            }
        })

function removeItem(e) {
    console.log(e);
    var target = e.target;
    if (target.tagName !== 'LI')return;
    else target.parentNode.removeChild(target);

    let x = target.getAttribute("id")
    deleteItemById(x);
    console.log("The is number for this item is " + x);

}