import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person } from './js/person.js';

// UI Logic
const createPerson = () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const lifeExp = document.getElementById("life-exp").value;
  window.personObj = new Person(name, age, lifeExp);
};

const clearResponse = () => {
  document.getElementById("response").innerText = null;
};

const handleSubmission = (planet, left) => {
  clearResponse();
  createPerson();
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  if (!left) {
    h3.append("Age on " + planet + ": ");
    switch (planet) {
    case "Mercury":
      p.append(window.personObj.onMercury());
      break;
    case "Venus":
      p.append(window.personObj.onVenus());
      break;
    case "Mars":
      p.append(window.personObj.onMars());
      break;
    case "Jupiter":
      p.append(window.personObj.onJupiter());
      break;
    }
  } else {
    h3.append("Years left on " + planet + ": ");
    switch (planet) {
    case "Mercury":
      p.append(window.personObj.onMercuryLeft());
      break;
    case "Venus":
      p.append(window.personObj.onVenusLeft());
      break;
    case "Mars":
      p.append(window.personObj.onMarsLeft());
      break;
    case "Jupiter":
      p.append(window.personObj.onJupiterLeft());
      break;
    }
  }
  document.getElementById("response").append(h3);
  document.getElementById("response").append(p);
};


window.addEventListener("load", function () {
  this.document.getElementById("btn-merc").addEventListener("click", function () {
    handleSubmission("Mercury", false);
  });
  this.document.getElementById("btn-ven").addEventListener("click", function () {
    handleSubmission("Venus", false);
  });
  this.document.getElementById("btn-mars").addEventListener("click", function () {
    handleSubmission("Mars", false);
  });
  this.document.getElementById("btn-jup").addEventListener("click", function () {
    handleSubmission("Jupiter", false);
  });
  this.document.getElementById("btn-merc-left").addEventListener("click", function () {
    handleSubmission("Mercury", true);
  });
  this.document.getElementById("btn-ven-left").addEventListener("click", function () {
    handleSubmission("Venus", true);
  });
  this.document.getElementById("btn-mars-left").addEventListener("click", function () {
    handleSubmission("Mars", true);
  });
  this.document.getElementById("btn-jup-left").addEventListener("click", function () {
    handleSubmission("Jupiter", true);
  });
});