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

const handleMerc = () => {
  clearResponse();
  createPerson();
  const h3 = document.createElement("h3");
  h3.append("Age on Mercury: ");
  const p = document.createElement("p");
  p.append(window.personObj.onMercury());
  document.getElementById("response").append(h3);
  document.getElementById("response").append(p);
};

const handleVen = () => {
  clearResponse();
  createPerson();
  const h3 = document.createElement("h3");
  h3.append("Age on Venus: ");
  const p = document.createElement("p");
  p.append(window.personObj.onVenus());
  document.getElementById("response").append(h3);
  document.getElementById("response").append(p);
};

const handleMars = () => {
  clearResponse();
  createPerson();
  const h3 = document.createElement("h3");
  h3.append("Age on Mars: ");
  const p = document.createElement("p");
  p.append(window.personObj.onMars());
  document.getElementById("response").append(h3);
  document.getElementById("response").append(p);
};

const handleJup = () => {
  clearResponse();
  createPerson();
  const h3 = document.createElement("h3");
  h3.append("Age on Jupiter: ");
  const p = document.createElement("p");
  p.append(window.personObj.onJupiter());
  document.getElementById("response").append(h3);
  document.getElementById("response").append(p);
};

window.addEventListener("load", function () {
  this.document.getElementById("btn-merc").addEventListener("click", handleMerc);
  this.document.getElementById("btn-ven").addEventListener("click", handleVen);
  this.document.getElementById("btn-mars").addEventListener("click", handleMars);
  this.document.getElementById("btn-jup").addEventListener("click", handleJup);

});