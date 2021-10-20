var today = new Date()
//console.log(today);
var todays_day = today.getDay()
//console.log(todays_day);
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = weekdays[todays_day];
//console.log(day);
document.write(`Today is : ${day}.`); 
document.write("</br>")

let crntHrs = today.getHours()
let crntMints = today.getMinutes()
let crntSecs = today.getSeconds()

//let AM_PM = (crntHrs >= 12)? "AM": "PM"
function AM_PM(_date){
var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  return ampm
}

document.write("</br>")
document.write(`Current Time is : ${crntHrs} ${AM_PM(new Date())} : ${crntMints} : ${crntSecs}`);

