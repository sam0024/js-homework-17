//show text 

function showText(){
	document.getElementById('click').
	innerHTML = "Hello JavaScript!";
}

//switch on-off 

function blue(){
	document.getElementById('img').src="images/blue.png";
}
function pink(){
	document.getElementById('img').src="images/pink.png";
}

//change the font size 

function fontS(){
	document.getElementById('font').style.fontSize='25px';
}

//display none 

function displayNone(){
	document.getElementById('dnone').style.display='none';
}

//show text below

function belowText(){
	document.getElementById('down').style.display='block';
}

//show date

function showDate(){
	document.getElementById('date').
	innerHTML=Date();
}

//show and hide text

function sText(){
	document.getElementById('text').style.display='block';
}
function hText(){
	document.getElementById('text').style.display='none';
}

//alert
window.alert('Hello world~');

//print 

function printPage(){
	window.print();
}

//var 

var number1 = 5
var number2 = 2
var result4 = number1 + number2;

function showData(){
	document.getElementById('sdata').
	innerHTML= result4;
}

var a, b,
a = 8 
b = 2
a *= b

function showNum(){
	document.getElementById('snum').
	innerHTML= a;
}

function showAns(){
	document.getElementById('sque').
	innerHTML= (5 + 6) * 10;
}

var x
x = 5

function showAnswer(){
	document.getElementById('sques').
	innerHTML= x * 2400;
}

//numbers without decimals

function showIt(){
	document.getElementById('demo').
	innerHTML= 10.50;
}

//true or false

var text1 = "C";
var text2 = "A";
var result1 = text1 < text2;

function showTorf(){
	document.getElementById('ans').
	innerHTML= result1;
}

var text1 = 4;
var text2 = 20;
var result2 = text1 < text2;

function showTf(){
	document.getElementById('sans').
	innerHTML= result2;
}

var text1 = "4";
var text2 = "20";
var result3 = text1 < text2;

function showTfalse(){
	document.getElementById('showans').
	innerHTML= result3;
}

//strings

var carName1 = 'Volvo XC60';
var carName2 = 'Volvo XC60';

function watchString(){
	document.getElementById('string').
	innerHTML= carName1 + " " + carName2;
}

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

function watchStrings(){
	document.getElementById('string2').
	innerHTML= answer1 + "<br>" + answer2 + "<br>" + answer3;
}

var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function lengthS(){
	document.getElementById('length').innerHTML= text.length;
}

var text = 'It\'s alright';

function slashS(){
	document.getElementById('slash').innerHTML= text;
}

var text = "The character \\ is called backslash.";

function slashShow(){
	document.getElementById('slash2').innerHTML= text;
}

//numbers 

var x = 123e5;
var y = 123e-5;

function numbShow(){
	document.getElementById('num').innerHTML= x + "<br>" + y;
}

var x = 0.2 + 0.1;

function pointShow(){
	document.getElementById('point').innerHTML= "0.2 + 0.1 = " + x;
}

var x1 = 1 / 0;

function infShow(){
	document.getElementById('inf').innerHTML= x1;
}

var x2 = Number.NEGATIVE_INFINITY;

function negShow(){
	document.getElementById('neg').innerHTML= x2;
}

//integers

var x = 999999999999999;
var y = 9999999999999999;

function intShow(){
	document.getElementById('int').innerHTML= x + "<br>" + y;
}

//arrays

var cars = ["Saab", "Volvo", "BMW"];

function showArray(){
	document.getElementById('array').innerHTML= cars;
}

var cars2 = ["Saab", "Volvo", "BMW"];
cars2[0] = "Opel";

function showArrays(){
	document.getElementById('array2').innerHTML= cars2;
}

//new date

var d = new Date();

function showDt(){
	document.getElementById('dt').innerHTML= d;
}

//show math constants 

function showM(){
	document.getElementById('math').innerHTML = 
	"<p><b>Math.E:</b> " + Math.E + "</p>" +
    "<p><b>Math.PI:</b> " + Math.PI + "</p>" +
    "<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
    "<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
    "<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
    "<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
    "<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
    "<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
}

//booleans 

function showV(){
	document.getElementById('value').innerHTML= Boolean(10 > 9);
}

//comparison

function myFunction(){
	let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young":"Old enough";
	document.getElementById('func').innerHTML= voteable + " to vote.";
}

//if else 

var time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

function showGreeting(){
	document.getElementById('gg').innerHTML= greeting;
}

//loop

var text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

function showLoop(){
	document.getElementById('loop').innerHTML= text;
}

//iterables

var name = "Hi There!";

var text = ""
for (var x of name) {
  text += x + "<br>";
}

function showIterab(){
	document.getElementById('it').innerHTML= text;
}

//sets

var letters = new Set(["a","b","c"]);

function showSets(){
	document.getElementById('set').innerHTML= "The set has " + letters.size + " values.";
}




















//delete text

function deleteItem(){
	document.write('Deleted');
}