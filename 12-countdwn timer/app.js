const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// if you would like to add current date year and month
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// to constanly add 10 hours to the date so it wont expire we use the following below...  else if you want the it to expire u use the line 39
const futureDate = new Date(tempYear, tempMonth, tempDay + 20, 11, 30, 0);
// if u will like to set a precise date use the below else u can use .....new Date() to give you the date of the day
// new Date(year, month, date, hour, mins, sec )
// let futureDate = new Date(2023, 05, 24, 10, 30, 0);
// console.log(futureDate);

// const item = setInterval(() => {
// the above is used setInterval to make the timer countdown in secs also check below on line 95 for a another method.
const year = futureDate.getFullYear();
const Hour = futureDate.getHours();
const Minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
// let weekday = futureDate.getDay();
// weekday = weekdays[weekday];
// or
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${Hour}:${Minutes}pm`;

// future time in milliseconds

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //  calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  // using the % to get the remainder from the days then divide by an hour

  let hours = Math.floor((t % oneDay) / oneHour);

  let mins = Math.floor((t % oneHour) / oneMinute);

  let secs = Math.floor((t % oneMinute) / 1000);

  //  set  values array

  const values = [days, hours, mins, secs];

  //if the values are less than 10 then we set a function to add zero in front of the values.

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  // when the deadline is reached..
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h6 Class= ""expired> sorry this giveaway has expired!<h6>`;
  }
}

// used setInterval to make the timer countdown in secs
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
// });
