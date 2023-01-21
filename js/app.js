'use strict';

var hours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random) * (max - min + 1) + min;
}

function cities(name, minCust, maxCust, averageCookieSale, openTime, closeTime){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averageCookieSale = averageCookieSale;
    this.openTime = openTime;
    this.closeTime = closeTime;
    this.hourlyTotal = [];
    this.dailyTotal = 0;
}

// function for cookie per hour

cities.prototype.calcCookiePerHour = function () {
    for (var i = 0; i < 14; i++) {
        this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
        this.dailyTotal += this.hourlyTotal[i];
        console.log(this.hourlyTotal[i]);
    }
};

var seattle = new cities('Seattle', 23, 65, 6.3, 6, 20);
var tokyo = new cities('Tokyo', 3, 24, 1.2, 6, 20);
var dubai = new cities('Dubai', 11, 38, 3.7, 6, 20);
var paris = new cities('Paris', 20, 38, 2.3, 6, 20);
var lima = new cities('Lima', 2, 16, 4.6, 6, 20);

var city = [seattle, tokyo, dubai, paris, lima];

for (var i = 0; i < city.length; i++){
    city[i].calcCookiePerHour();
}