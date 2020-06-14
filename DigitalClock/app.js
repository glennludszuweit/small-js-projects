function tiktok() {
  const fullTime = new Date();
  let hours = fullTime.getHours();
  let mins = fullTime.getMinutes();
  let secs = fullTime.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  document.getElementById("hour").innerHTML = hours + " :";
  document.getElementById("min").innerHTML = mins + " :";
  document.getElementById("sec").innerHTML = secs;
}

setInterval(tiktok, 100);
