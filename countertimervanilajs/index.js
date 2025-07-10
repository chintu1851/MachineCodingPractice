(function(){
    var hour=document.querySelector('.hours')
    var minute=document.querySelector('.minute')
    var second=document.querySelector('.seconds')

    var start=document.querySelector('.start')
    var stop=document.querySelector('.stop')
    var reset=document.querySelector('.reset')

    var countdowntimer=null

    start.addEventListener('click',function(){
        if(hour.value==0 && minute.value==0 && second.value==0){
            return 
        }
        function startinterval(){
            start.style.display="None"
            stop.style.display="initial"

        }
        startinterval()
    })

})();