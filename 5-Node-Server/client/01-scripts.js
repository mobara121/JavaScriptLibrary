function fetchHelloDataFromAPI(){
    fetch('http://localhost:3000/test/helloclient', {
        method: "GET",
        headers: new Headers({
            'Content-Type': "application/json"
        })
    })
        .then(function(response){
            console.log("Fetch response:", response)
            return response.text();
        })
        .then(function (text){
            console.log(text);
        });
}

/************************************
 * 2 POST Long hand /one
 ***********************************/
function postToOne(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.text()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function(response){
            console.log('Sucess:', response);
        })
}

/************************************
 * 3 POST /one : Arrow Function *2を簡単に！！
 ***********************************/
function postToOneArrow(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Sucess:', response));
}//ここでいうresponseはデータベースから出されたデータのこと

//ここからはデータベースにデータを送ります。さらにそのデータをレスポンスで特定のHTMLの中に返します。
function postData() {
    let content = { testdata: { item: 'This was saved!'} };//create object

    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST',//LOOK!! not 'GET'!!
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(function (text){
        console.log(text);

        testDataAfterFetch.innerHTML = text.testdata.testdata;//innerHTML
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;//innerHTML
    });
}
/************************
 * 4 GET FROM/ONE -Display Data
 ************************************/
function fetchFromOneDisplayData(){

    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');

    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(
        function(response){
            return response.json()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function (results){
            let myList = document.querySelector('#getjson');

            for(r of results){
                console.log('Response:', r.testdata);
                var listItem = document.createElement('li');
                listItem.innerHTML = r.testdata;
                myList.appendChild(listItem);
            }
        
    })
}