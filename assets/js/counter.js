var countDownDate = new Date("March 1, 2022 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance)/( 1000 * 60 * 60 ));
    var minutes = Math.floor((distance%( 1000 * 60 * 60 ))/( 1000 * 60 ));
    var seconds = Math.floor((distance%( 1000 * 60 ))/( 1000 ));

    document.getElementById("countdown1").innerHTML = hours  ;
    document.getElementById("countdown2").innerHTML =  minutes ;
    document.getElementById("countdown3").innerHTML = seconds ;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "TIME OUT";
    }

},1000);