const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key ='0ctIacWcI3crQr1GOMDEs8vC0Jll5HV6'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

        //1                     //2   
searchForm.addEventListener('submit', fetchResults); 
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage); //3
                    //1
function fetchResults(e){
    //console.log(e); //2
    // Assemble the full URL
    e.preventDefault(); //1
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    //1
    //INSERT HERE  
if(startDate.value !== '') {
    console.log(startDate.value)
  url += '&begin_date=' + startDate.value;
};

if(endDate.value !== '') {
  url += '&end_date=' + endDate.value;
};
//END HERE
    fetch(url)
    .then(function(result) {
 
    return result.json(); //2
  }).then(function(json) {
    displayResults(json); //1 & //3
    });
}

//2
function displayResults(json) {
console.log("DisplayResults", json); 
};

function nextPage(){
  console.log("Next button clicked");
} //5

function previousPage(){
  console.log("Next button clicked");
} //5

function displayResults(json) {
    let articles = json.response.docs;
  
    if(articles.length === 0) {
      console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            console.log(i);
        }
    }
};

function displayResults(json) {
    let articles = json.response.docs;
  
    if(articles.length === 0) {
      console.log("No results");
    } else {
      for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article'); //1
        let heading = document.createElement('h2'); //2
  
        article.appendChild(heading); //3
        section.appendChild(article); //4
      }
    }
};

function displayResults(json) {
  let articles = json.response.docs;

  if(articles.length === 0) {
    console.log("No results");
  } else {
    for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        let heading = document.createElement('h2');
        let link = document.createElement('a');
        let img = document.createElement('img');  //1
        let para = document.createElement('p');  
        let clearfix = document.createElement('div');
  
  
        for(let j = 0; j < current.keywords.length; j++) {
          let span = document.createElement('span');   
          span.textContent += current.keywords[j].value + ' ';   
          para.appendChild(span);
        }
  
          //2
        if(current.multimedia.length > 0) {
          //3
          img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
          //4
          img.alt = current.headline.main;
        }
  
        clearfix.setAttribute('class','clearfix');
  
        article.appendChild(heading);
        heading.appendChild(link);
        article.appendChild(img); //5
        article.appendChild(para);
        article.appendChild(clearfix);
        section.appendChild(article);
      }
    }
  };