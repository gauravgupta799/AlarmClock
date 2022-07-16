console.log("Alarm")

let InputBox = document.getElementById("input-box");
let TimeText = document.getElementById("time-text");
const display = document.getElementById("clock");
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;
let alarmTime =null;
let alarmTimeout = null;


function updateTime (){
    const date = new Date();
    const hour = formateTime(date.getHours());
    const minutes = formateTime(date.getMinutes());
    const seconds = formateTime(date.getSeconds());

    TimeText.innerHTML = `${hour} : ${minutes} : ${seconds}`;
}

function formateTime (time) {
    if(time < 10){
        return '0' + time;
    }else{
        return time;
    }
}

function setAlarmTime (value) { 
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout  = setTimeout(()=> audio.play(), timeout);
            // alert("Alarm set ! ");
            setInterval(updateTime, 1000);   
            InputBox.style.display = 'none';
            // console.log("After")
        }else{
          console.log(" set right time");
          InputBox.style.display = 'block';
        }
    }
}

const stopAlarm = () => {
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        // alert("Alarm paused.");
    }
    InputBox.style.display = 'block';
}
