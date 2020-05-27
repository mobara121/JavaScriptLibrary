const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('table');

searchForm.addEventListener("submit", fetchSpace);

function fetchSpace(e){
    e.preventDefault();
    
    fetch(baseURL)
        .then(data => data.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}

function displayRockets(rockets){
    console.log('Rockets:', rockets);
    let eachRocket = rockets.forEach(r => {
        console.log(r);

        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rpcketCost = document.createElement('td');

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })

}