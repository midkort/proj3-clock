function moveHands() {
  with (new Date()) {
    h = 30 * ((getHours() %12) + getMinutes()/60); // (number of hours modulo 12 + number of minutes/60) * 30 degrees for rotating the hour hand
    m = 6 * getMinutes(); //6 degrees * number of minutes
    s = 6 * getSeconds(); // 6 degrees * number of seconds

    // use JS to create a CSS rule that will rotate the second hand
    document.getElementById("second").style.cssText =
      "transform:rotate(" + s + "deg);";
    
    // use JS to create a CSS rule that will rotate the minute hand
    document.getElementById("minute").style.cssText =
      "transform:rotate(" + m + "deg);";

    // use JS to create a CSS rule that will rotate the hour hand
    document.getElementById("hour").style.cssText =
      "transform:rotate(" + h + "deg);";

    // what's the difference between '-webkit-transform' and plain '-transform' ?

    // Change background with time of day
      if (getHours()<=7 ||getHours()>=20){
        document.body.background = "https://image.freepik.com/free-vector/night-sky-with-stars_1048-7871.jpg";
        document.getElementById("greeting").innerHTML = "Good Evening";
        document.getElementById("greeting").style.cssText = "color: #d19e0f";
      }
      else{
        document.body.background = "https://images.unsplash.com/photo-1517758478390-c89333af4642?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
        document.getElementById("greeting").innerHTML = "Top of the day...";
        document.getElementById("greeting").style.cssText = "color: #120469";
      }

    setTimeout(moveHands, 1000);
  }
}

window.onload = moveHands;

