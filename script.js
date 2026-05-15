let ms=0, sec=0, min=0;
let timer;

function update(){
    ms++;

    if(ms===100){
        ms=0;
        sec++;
    }

    if(sec===60){
        sec=0;
        min++;
    }

    document.getElementById("display").innerText =
    `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}:${String(ms).padStart(2,'0')}`;
}

function start(){
    if(!timer){
        timer=setInterval(update,10);
    }
}

function stop(){
    clearInterval(timer);
    timer=null;
}

function reset(){
    stop();
    ms=0; sec=0; min=0;
    document.getElementById("display").innerText="00:00:00";
    document.getElementById("laps").innerHTML="";
}

let lapCount = 0;

function lap(){
    lapCount++;

    const lapTime = document.getElementById("display").innerText;

    const div = document.createElement("div");
    div.className = "lap";

    div.innerHTML = `
        <span>Lap ${lapCount}</span>
        <span>${lapTime}</span>
    `;

    document.getElementById("laps").appendChild(div);
}