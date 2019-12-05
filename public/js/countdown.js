//set the date of STT Live and make it count down every second
let countDownDate = new Date("Jan 1, 2020 12:00:00").getTime();

let x = setInterval(function() {

  //get today's date and find the distance between now and STT live date
  let now = new Date().getTime();
  let distance = countDownDate - now;

  //quick maths
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //display the result and when the countdown finishes write text
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The STT stream is <strong>L I V E<strong>";
  }
}, 1000);