import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Person } from './js/person.js';

// UI Logic

const handleSubmission = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const lifeExp = document.getElementById("life-exp").value;
  window.person = new Person(name, age, lifeExp);

  document.getElementById("response").innerText = "Age: \n" +
  "on Mercury: " + window.person.onMercury() + "\n"+
  "on Venus: " + window.person.onVenus() + "\n" +
  "on Mars: " + window.person.onMars() + "\n" +
  "on Jupiter: " + window.person.onJupiter() + "\n";
};

window.addEventListener("load", function () {
  this.document.getElementById("person").addEventListener("submit", handleSubmission);
});