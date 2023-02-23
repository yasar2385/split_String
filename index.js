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

let key_year = '1991a demo';
console.log(/(\d{4}?=.)|(\d{4})/.exec(key_year));
console.log(key_year.match(/^\d{4}(?=\D{1,2})[A-z]{1,2}/g));

key_year = key_year.replace(/.*\D(?=\d)|\D+$/g, '');
console.log([key_year, key_year.length < 4, key_year.length > 5]);
if (key_year.length < 4 || key_year.length > 5) key_year = 'XXXX';
console.log(key_year);
var Split_Delimiter = / & | and | et al. | et al., |, | \(/;
var collection = [
  'de Albrecht (2017)',
  'var can Albrecht & Argueso (2017)',
  'Albrecht et al. (2017)',
  '(Albrecht, 2017)',
  '(Albrecht & Argueso, 2017)',
  '(Albrecht et al., 2017)',
  '(Sun et al., 2018;',
  ' Deng et al., 2020)',
  '(Lindner et al., 2012;',
  ' Li & Zhang, 2014)',
  '(Bohm et al., 2014;',
  ' Couto & Zipfel, 2016;',
  ' Tang et al., 2017)',
  ' Tang et al., 2017)',
  '(Bohm et al., 2014;',
  ' Couto & Zipfel, 2014;',
  ' Tang et al., 2017)',
  '(Bohm et al., 2014;',
  ' Couto, 2014;',
  ' Tang et al., 2017)',
];
console.log(Split_Delimiter);
let Obj = {
  name: [],
  year: [],
};
collection.forEach((x, y, z) => {
  //console.log(x.split(Split_Delimiter));
  var split = x.split(Split_Delimiter);
  split.forEach((txt, idx, arr) => {
    //console.log(txt.replace(/\(|\)|;|\./, ''));
    Obj[txt.match(/\d/) ? 'year' : 'name'].push(
      txt.replace(/\(|\)|;|\./, '').trim()
    );
  });
});
console.log(Obj);
let output;
let input = ["Roy","Lee","Haris"]

output = input.reduce((accumulator, currentValue, index, array) => {
  console.log(accumulator, currentValue)
  accumulator.push({"name" : currentValue});
  return accumulator;
},[])
console.log(output)