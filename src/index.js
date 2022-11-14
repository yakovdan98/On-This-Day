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
};

window.addEventListener("load", function () {
  this.document.getElementById("person").addEventListener("submit", handleSubmission);
});