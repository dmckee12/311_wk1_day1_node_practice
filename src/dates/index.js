// import moment here; use this package in each function
const moment = require("moment");


const today = () => {
  // write code for dates.today
  return moment().format("dddd");

}

const calendar = () => {
  return moment().format("MMM DD, YYYY");
  // write code for dates.calendar

}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format("hh:mm:ss A");
}

module.exports = {
  today,
  calendar,
  currentTime
};