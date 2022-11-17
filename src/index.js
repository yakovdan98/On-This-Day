import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ApodService from './js/apod-service.js';
import WikiService from './js/wiki-service';

// proooororoer asdgsi92m sdw pmdasd grimd liasdop lenfdi lxncwqincls
function getApodImg(date) {
  let promise = ApodService.getApod(date);
  promise.then(function(apodServiceData) {
    printPicture(apodServiceData);
  }, function(apodErrorArray) {
    printError(apodErrorArray);
  });
}

function getWikiEntry(date) {
  setTimeout(() => {
    const dateArr = date.split("-");
    let promise = WikiService.getWiki(dateArr[2], dateArr[1]);
    promise.then(function(wikiData) {
      printWiki(wikiData);
    }, function(wikiError) {
      printWikiError(wikiError);
    });
  }, 1000);

}

function currentDate(userDate) {
  const [ userYear, userMonth, userDay] = userDate.split('-');
  let date = new Date();
  let dateArray = date.toLocaleDateString().split('/');//month / day / year
  const [ month, day, year ] = dateArray;

  if (year === userYear && month === userMonth && day < userDay) {
    return false;
  } else if (year === userYear && month < userMonth) {
    return false;
  } else if (year < userYear) {
    return false;
  }
  return true;
}

// let a, b, rest;
// [a, b] = [10, 20];

function handleSubmission(e) {
  e.preventDefault();
  //handle error
  document.getElementById('response').innerHTML = null;
  let date = document.getElementById('date').value;
  if (currentDate(date) === true) {
    getApodImg(date);
    getWikiEntry(date);
    
  } else {
    printNotValidDate(date);
  }
}
// UI Logic
function printNotValidDate(userDate) {
  document.getElementById('response').innerText = `${userDate} is not a valid date`;
}

function printPicture(data) {
  let img = document.createElement('img');
  img.setAttribute('src', data.url);
  document.getElementById('response').append(img);
  
}

function printError(error) {
  document.getElementById('response').innerText = (`There was an error! ${error[0].status}: ${error[1].msg}`);
}

function printWiki(data) {
  const p = document.createElement("p");
  const size = data.selected.length;
  const randEvent = Math.floor(Math.random() * size);
  p.innerText = data.selected[randEvent].text;
  document.getElementById("response").append(p);
  let img = document.createElement('img');
  img.setAttribute('src', data.selected[randEvent].pages[0].originalimage.source);
  img.setAttribute('width', '400px');
  img.setAttribute('height', 'auto');
  document.getElementById('response').append(img);
}

function printWikiError(error){
  
}

window.addEventListener("load", function () {
  document.getElementById("date-form").addEventListener('submit', handleSubmission);
});