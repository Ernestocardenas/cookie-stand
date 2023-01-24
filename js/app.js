'use strict';

let hours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];

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
  for (let i = 0; i < 14; i++) {
    this.hourlyTotal[i] = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.averageCookieSale);
    this.dailyTotal += this.hourlyTotal[i];
    console.log(this.hourlyTotal[i]);
  }
};

cities.prototype.render = function () {
  this.calcCookiesPerHour();
  let tableEl = document.getElementById('dataTable');

  let trElement = document.createElement('tr');
  tableEl.appendChild(trElement);

  let thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  for (let j = 0; j < this.hourlyTotal.length; j++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyTotal[j];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
  tableEl.appendChild(trElement);
};

let seattle = new cities('Seattle', 23, 65, 6.3, 6, 20);
let tokyo = new cities('Tokyo', 3, 24, 1.2, 6, 20);
let dubai = new cities('Dubai', 11, 38, 3.7, 6, 20);
let paris = new cities('Paris', 20, 38, 2.3, 6, 20);
let lima = new cities('Lima', 2, 16, 4.6, 6, 20);

let city = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < city.length; i++){
  city[i].calcCookiePerHour();
}

let tableBody = document.getElementById('dataTable');

function renderheader() {
  let headerrow = document.createElement('tr');
  let headerstore = document.createElement('th');
  headerstore.textContent = 'Locations';
  headerrow.appendChild(headerstore);
  tableBody.appendChild(headerrow);

  for (let i = 0; i < hours.length; i++) {
    let headerhour = document.createElement('th');
    headerhour.textContent = hours[i];
    headerstore.appendChild(headerhour);
    headerrow.appendChild(headerhour);
  }
  let headertotal = document.createElement('th');
  headertotal.textContent = 'Store Totals';
  headerrow.appendChild(headertotal);
}

renderheader();
for (let i = 0; i < city.length; i++) {
  city[i].render();
}
renderFooter();

function renderFooter() {
  let headerrow = document.createElement('tr');
  tableBody.appendChild(headerrow);
  let tdElement = document.createElement('td');

  tdElement.textContent = 'Daily Total';
  headerrow.appendChild(tdElement);

  var runningTotal;

  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('td');
    var total = 0;
    for (var j = 0; j < city.length; j++) {
      total += city[i].custPerHourArray[j];
      runningTotal += city[i].custPerHourArray[j];
    }
    tdElement.textContent = total;
    headerrow.appendChild(tdElement);

  }
  var tdElement = document.createElement('td');
  tdElement.textContent = runningTotal;
  headerrow.appendChild(tdElement);
}