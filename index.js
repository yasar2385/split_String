// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var url = `https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/1570-Evaluation-of-the-excise-duties-applied-on-manufactured-tobacco_en.`;

var split = url.split(/\r|\n|\s/);

console.log(split);

if (url.split(/\r|\n|\s/).length > 1) {
  console.log(true);
} else console.log(false);

let key_year = '1990a';
console.log(/(\d{4}?=.)|(\d{4})/.exec(key_year));
key_year = key_year.replace(/.*\D(?=\d)|\D+$/g, '');
console.log([key_year, key_year.length < 4, key_year.length > 5]);
if (key_year.length < 4 || key_year.length > 5) key_year = 'XXXX';
console.log(key_year);
