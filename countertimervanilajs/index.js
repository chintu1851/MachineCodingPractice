(function () {
    var hour = document.querySelector('.hours')
    var minute = document.querySelector('.minutes')
    var second = document.querySelector('.seconds')

    var startbtn = document.querySelector('.start')
    var stopbtn = document.querySelector('.stop')
    var reset = document.querySelector('.reset')

    var countdowntimer = null

    startbtn.addEventListener("click", function () {
        if (hour.value === 0 && minute.value === 0 && second.value === 0) return;
        function startInterval() {
            startbtn.style.display = "none"
            stopbtn.style.display = "initial"
        }
        countdowntimer = setInterval(() => {
            timer()
        }, 1000)
        startInterval();
    })
    function timer() {
        if (second.value > 60) {
            minute.value++;
            second.value = parseInt(second.value) - 59
        }
        if (minute.value > 60) {
            hour.value++
            minute.value = parseInt(minute.value) - 60
        }
        if (hour.value == 0 && minute.value == 0 && second.value == 0) {
            hour.value = "";
            minute.value = ""
            second.value = ""
            stopInterval()
        }
        else if (second.value != 0) {
            second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`
        }
        else if (minute.value != 0 && second.value == 0) {
            second.value = 59
            minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`
        }
        else if (hour.value != 0 && second.value == 0 && minute.value == 0) {
            minute.value = 60
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`
        }
    }
    function stopInterval(state) {
        startbtn.innerHTML = state === "pause" ? "continue" : "start"
        startbtn.style.display = "initial"
        stopbtn.style.display = "none"
        clearInterval(countdowntimer)

    }
    stopbtn.addEventListener('click', function () {
        stopInterval('pause')
    })
    reset.addEventListener('click',function(){
        hour.value=""
        minute.value=""
        second.value=""
        stopInterval()
    })
    console.log("working")
})();