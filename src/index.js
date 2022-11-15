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

const handleSubmission = (planet) => {
  clearResponse();
  createPerson();
  const h3 = document.createElement("h3");
  h3.append("Age on " + planet + ": ");
  const p = document.createElement("p");
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

  document.getElementById("response").append(h3);
  document.getElementById("response").append(p);
};

window.addEventListener("load", function () {
  this.document.getElementById("btn-merc").addEventListener("click", function (){
    handleSubmission("Mercury");
  });
});