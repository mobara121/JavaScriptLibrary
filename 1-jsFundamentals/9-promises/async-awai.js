async function myFn() {
    const response = await fetch('http://random.dog/woof/json');
    const json = await response.json();
    return json;
}

myFn()
    .then(console.log)
    .catch(console.log)


//fetch('http://random.dog/woof/json')
//    .then(response => response.json())
//    .then(json => console.log(json))
//    .catch(error => console.log(error))