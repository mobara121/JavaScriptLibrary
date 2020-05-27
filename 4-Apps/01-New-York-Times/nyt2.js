const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = '0ctIacWcI3crQr1GOMDEs8vC0Jll5HV6';
let url;

//selecting elements on html
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

//to hide the "Previous"/"Next" navigation when the page loads, before we do a search.
nav.style.display = 'none';

//Set the pageNumber to 0 by default
let pageNumber = 0;
let displayNav = false;
// console.log('PageNumber:', pageNumber); 

//use addEventListner method to identify a target and then add an event listener on that target. 
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//submit EventListner
function fetchResults(e) { //(e) to prevent default
  // console.log(e);
  e.preventDefault();//add the preventDefault method to make sure that a request isn't actually sent. 
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //We are creating a versatile query string. The url variable is loaded with other variables and url requirements. ?????"?", "&", and "&q="
  console.log('URL:', url); //log the string


  //add the conditional statements for end date and start date. 
  if (startDate.value !== '') { //If the input fields for dates aren't blank, denoted by the !== '', the date values will be added to the URL string. If they're blank, the expressions inside of the conditionals are ignored.
    console.log(startDate.value);
    url += '&begin_date=' + startDate.value;
  }
  
  if (endDate.value !== '') {
    console.log(endDate.value);
    url += '&end_date=' + endDate.value;
  }
//make a fetch request, create promise - promise returns a response object called result 
  fetch(url)
    .then(function(result) {
      console.log(result);
      //change to json language(the promise returns a function that converts the result into a usable json)
      return result.json();
    })
    //moved the console.log to a displayResults() function 
    .then(function(json) {
      console.log(json);
      displayResults(json);//we fire off a function called displayResults that will work to manage that data.
    });
}
////While loop .firstChild will check for any children nodes in the HTML section, .removeChild will remove these children before running the rest of the function
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  //drill down into the layers of data with the dot operator.
  //store that specific data in a variable(articles), docs(json)
  let articles = json.response.docs;

  if (articles.length === 0) {
    console.log('No results'); //if there are no results, console statement shows no result
  } else {
    for (let i = 0; i < articles.length; i++) { // for loop to iterate for the length of the articles array.
    //createElement method creates a variable for HTML that can be appended later
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');

    
      let current = articles[i];//create a current variable that holds the data of the current article as we iterate.
      console.log('Current:', current); //log the current data so that we can see it in the console.

      link.href = current.web_url;//.web_url grabs the hyperlink for the current article out of the json result
      console.log(link);//log the current data so that we can see it in the console.
      //.textContent sets the name of the Clickable link
      //.headline.main digs into the json file, into the headline, into the main, grabbing the text string
      //link.href places an href in the "a" tag
      link.textContent = current.headline.main;
      
      //.textContent adds the string "Keywords: " before the createElement (span) from the for function
      para.textContent = 'Keywords: ';
      // Group 3
      for (let j = 0; j < current.keywords.length; j++) {
        //each time the for loop iterates it creates the <span> tag
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        //each time the for loop iterates, adds the created <span> tag to the <p> tag
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');

      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }

  if (articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    return;
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}