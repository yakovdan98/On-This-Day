import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ApodService from './js/apod-service.js';
import WikiService from './js/wiki-service';

// proooororoer asdgsi92m sdw pmdasd grimd liasdop lenfdi lxncwqincls

function getAPIData(date) {
  ApodService.getApod(date)
    .then(response => {
      if (response instanceof Error) {
        const errorMsg = `There was a problem accessing the data from Apod API: ${response.message}`;
        throw new Error(errorMsg);
      }
      printPicture(response);
      const dateAr = date.split('-');
      return WikiService.getWiki(dateAr[2], dateAr[1]);
    })
    .then(response => {
      if (response instanceof Error) {
        const errorMsg = `There was a problem accessing the data from Wiki API: ${response.message}`;
        throw new Error(errorMsg);
      }
      printWiki(response);
    })
    .catch(error => printError(error));
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

function handleSubmission(e) {
  e.preventDefault();
  //handle error
  document.getElementById('response').innerHTML = null;
  let date = document.getElementById('date').value;
  if (currentDate(date) === true) {
    getAPIData(date);
  
  } else {
    printNotValidDate(date);
  }
}

function printNotValidDate(userDate) {
  document.getElementById('response').innerText = `${userDate} is not a valid date`;
}

function printPicture(data) {
  if (data.media_type === 'video') {
    let iframe = document.createElement('iframe');
    iframe.src = data.url;
    iframe.allow= 'autoplay; fullscreen';
    iframe.alt = `${data.media_type} of ${data.title}`;
    document.getElementById('response').append(iframe);
  } else {
    let img = document.createElement('img');
    img.src = data.url;
    img.alt = `${data.media_type} of ${data.title}`;
    document.getElementById('response').append(img);
  }
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


window.addEventListener("load", function () {
  document.getElementById("date-form").addEventListener('submit', handleSubmission);
});