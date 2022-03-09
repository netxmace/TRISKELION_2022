// var countDownDate = new Date("March 1, 2022 00:00:00").getTime();

// var x = setInterval(function() {

//     var now = new Date().getTime();

//     var distance = countDownDate - now;

//     var hours = Math.floor((distance)/( 1000 * 60 * 60 ));
//     var minutes = Math.floor((distance%( 1000 * 60 * 60 ))/( 1000 * 60 ));
//     var seconds = Math.floor((distance%( 1000 * 60 ))/( 1000 ));

//     document.getElementById("countdown1").innerHTML = hours  ;
//     document.getElementById("countdown2").innerHTML =  minutes ;
//     document.getElementById("countdown3").innerHTML = seconds ;

//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdown").innerHTML = "TIME OUT";
//     }

// },1000);


function updateTimer() {
    future = Date.parse("april 10, 2022 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer_d")
        .innerHTML =
        '<div>' + d + '<span>days</span></div>' +
        '<div>' + h + '<span>hours</span></div>' +
        '<div>' + m + '<span>minutes</span></div>' +
        '<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);