// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var url = `https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/1570-Evaluation-of-the-excise-duties-applied-on-manufactured-tobacco_en.`;


var split = url.split(/\r|\n|\s/);

console.log(split)

if(url.split(/\r|\n|\s/).length>0){
  console.log(true);
}