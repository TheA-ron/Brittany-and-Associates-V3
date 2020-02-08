var temp=[];var i;var jew;var calcs=1;
//etf declarations
var VFH; //finance
var XLK; //tech
const url = new URL(
    "https://api.worldtradingdata.com/api/v1/stock"
);
function price(symbol) {
jew="";
let params = {
    "symbol": (symbol),
    "api_token": "CtE9BRvfbrygbjgMZorx5A8fhs0t1rBKOINinkWoG3aSNqLAp40jdELocr29",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

fetch(url, {
    method: "GET",
})
    .then(response => response.json())
    .then(json => jew = ((Object.values(json))[2]))
}
function getPrice(symbols) {
price(symbols);
setTimeout(function(){
for (i = 0; i < (symbols.split(",").length); i++) {
temp[i] = ((Object.values(jew[i]))[0])+"*"+((Object.values(jew[i]))[10]);
}
}, 1000);
}
function findinarray(array, string) {
for (i = 0; i < array.length; i++) {
if ((array[i]).includes(string)) {
return(i);
}
}
}
function extract(symbol) {
return(Number(temp[String(findinarray(temp, symbol))].substring(temp[(findinarray(temp, symbol))].indexOf("*")+1, 10)));
}
var difference = .5;
function test(symbol1, symbol2) {
	if (symbol1-(extract(symbol2))>difference) {
		createListing(symbol2 + " = " + (extract(symbol2)) + "%", "p");
	}
}