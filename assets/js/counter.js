/*==========================================================
    PARA SEMPRE NÓS ❤️
    COUNTER.JS
==========================================================*/

// ==========================================================

const relationshipDate = new Date(

    2026,
    0,
    16,
    20,
    0,
    0

);
// ==========================================================

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function format(value){

    return value.toString().padStart(2,"0");

}

function updateCounter(){

    const now = new Date();

    let difference = now - relationshipDate;

    if(difference < 0){

        difference = 0;

    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(

        (totalSeconds % 86400) / 3600

    );

    const minutes = Math.floor(

        (totalSeconds % 3600) / 60

    );

    const seconds = totalSeconds % 60;

    if(daysElement){

        daysElement.textContent = days.toLocaleString("pt-BR");

    }

    if(hoursElement){

        hoursElement.textContent = format(hours);

    }

    if(minutesElement){

        minutesElement.textContent = format(minutes);

    }

    if(secondsElement){

        secondsElement.textContent = format(seconds);

    }

}

// Primeira atualização
updateCounter();

// Atualiza a cada segundo
setInterval(updateCounter,1000);

/*==========================================================
    FIM
==========================================================*/