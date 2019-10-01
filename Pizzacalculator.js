//Bartek Stawiarski
//Applicatie-en Mediaontwikkelaar MBO nieveau 4

alert("Welkom bij daVinci's pizza, plaats uw bestelling hier"); //Toont pop-up met bijbehorende tekst.
alert("Prijskaartje: klein: 3.75, medium: 5.50 en groot: 7.95!"); //Toont pop-up met prijzen.


var amountSmall = parseInt(prompt("Hoeveel kleine pizza's wilt u?")); //Vraagt naar hoeveelheid kleine pizza's.

if (isNaN(amountSmall)){
   alert("Voer een cijfer in!");
   var amountSmall = parseInt(prompt("Hoeveel kleine pizza's wilt u?"));
}

var amountMedium = parseInt(prompt("Hoeveel medium pizza's wilt u?")); //Vraagt naar hoeveelheid medium pizza's.

if (isNaN(amountMedium)){
   alert("Voer een cijfer in!");
   var amountMedium = parseInt(prompt("Hoeveel medium pizza's wilt u?"));
}

var amountLarge = parseInt(prompt("Hoeveel grote pizza's wilt u?")); //Vraagt naar hoeveelheid grote pizza's.

if (isNaN(amountLarge)){
   alert("Voer een cijfer in!");
   var amountLarge = parseInt(prompt("Hoeveel grote pizza's wilt u?"));
}

const priceSmall = 3.75; //Prijs van een kleine pizza.
const priceMedium = 5.50; //Prijs van een medium pizza.
const priceLarge = 7.95; //Prijs van een grote pizza.

var priceS= (amountSmall*priceSmall); //Aantal kleine pizza's * prijs.
var priceM= (amountMedium*priceMedium); //Aantal medium pizza's * prijs.
var priceL= (amountLarge*priceLarge); //Aantal grote Pizza's * prijs.

document.write("<br>"+"<br>");
document.write("totaal klein:"+" "+"€"+" ");
document.write(amountSmall*priceSmall+"<br>");
document.write("totaal medium:"+" "+"€"+" ");
document.write(amountMedium*priceMedium+"<br>");
document.write("totaal groot:"+" "+"€"+" ");
document.write(amountLarge*priceLarge+"<br>");

document.write("Het door u te betalen bedrag:"+" "+"€"+" ");
document.write(priceS+priceM+priceL+" "); //berekent het totaal bedrag.
document.write("euro.")
