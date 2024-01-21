setInterval(() => {
    let time = new Date()

    var formatedHour = time.getHours()
    var formatedMinute = time.getMinutes()

    document.getElementById("hour").innerHTML = formatedHour
    document.getElementById("min").innerHTML = formatedMinute

}, 1000);


function setAlarm(){

    alert("alarm set")

    setInterval(() => {
        let time = new Date()
    
        var formatedHour = time.getHours()
        var formatedMinute = time.getMinutes()
        var formatedSecond = time.getSeconds()

        let alarmHour = document.getElementById("HourID")
        let alarmMinute = document.getElementById("MinuteID")

        let alHour = alarmHour.value
        let alMinute = alarmMinute.value

        function play(){
            var audio = new Audio('Ship-High-Horn.mp3');
            audio.play()
        }

        function toStopAlarm(){
            var result = window.confirm("Close Alarm ?");
                
            if (result) {
                audio.pause()
                alert("Alarm Closed");
            }
            else{
                audio.play()
            }
        }

        if(formatedHour == parseInt(alHour) && formatedMinute == parseInt(alMinute) && formatedSecond == parseInt('00')){
            
            play()
            setTimeout(toStopAlarm, 2000)
        }
    
    }, 1000);
}