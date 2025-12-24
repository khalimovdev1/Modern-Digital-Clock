function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  document.getElementById("hour").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minute").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("second").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(showTime, 1000);