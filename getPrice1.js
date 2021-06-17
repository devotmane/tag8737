// tx : https://bscscan.com/tx/0xf96d44c5694ffc2d326672cf1436acad2ed3a871596b557bf9efd94d2bc258b0
var priceText = $("#wrapperContent li:first-child .media-body > span").last().text() // "1.040430518836259474 ($375.30) "
var qteText = $("#wrapperContent li:last-child .media-body > span").last().text(); // "16,514,656,392.750323379 "

// get price between brackes
var price = (priceText.match(/\(([^)]+)\)/)[1]); // "$375.30"
// replace $
price = parseFloat(price.replace("$","")); // 375.3 

// split with (
var qte = qteText.split('(')[0]; // "22,532,770,041.132384258 "
// remove comma
qte = parseFloat(qte.replace(/,/g,"")); // "22532770041.132384258 "

var priceBuyNotation = (price/qte); // 2.388521247132706e-9

var priceBuy = (new Number(priceBuyNotation)).toFixed(18); // "0.000000002398728603"

console.log({priceBuy});

alert(priceBuy)
