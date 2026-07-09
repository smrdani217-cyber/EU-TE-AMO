/*==========================================================
    PARA SEMPRE NÓS ❤️
    MUSIC.JS
==========================================================*/

const music=document.getElementById("bgMusic");

const playButton=document.getElementById("playMusic");

let playing=false;

/*==========================================================
    INICIAR
==========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    loadMusic();

});

/*==========================================================
    PLAY / PAUSE
==========================================================*/

if(playButton){

playButton.addEventListener("click",toggleMusic);

}

function toggleMusic(){

    if(!music) return;

    if(playing){

        music.pause();

        playing=false;

        updateButton();

    }

    else{

        music.play();

        playing=true;

        updateButton();

    }

}

/*==========================================================
    BOTÃO
==========================================================*/

function updateButton(){

    if(!playButton) return;

    if(playing){

        playButton.innerHTML=

        '<i class="fa-solid fa-pause"></i>';

        playButton.classList.add("playing");

    }

    else{

        playButton.innerHTML=

        '<i class="fa-solid fa-play"></i>';

        playButton.classList.remove("playing");

    }

}

/*==========================================================
    VOLUME
==========================================================*/

if(music){

music.volume=.45;

}

/*==========================================================
    SALVAR POSIÇÃO
==========================================================*/

if(music){

music.addEventListener("timeupdate",()=>{

localStorage.setItem(

"musicTime",

music.currentTime

);

});

}

/*==========================================================
    RESTAURAR POSIÇÃO
==========================================================*/

function loadMusic(){

if(!music) return;

const saved=

localStorage.getItem("musicTime");

if(saved){

music.currentTime=Number(saved);

}

}

/*==========================================================
    FINAL DA MÚSICA
==========================================================*/

if(music){

music.addEventListener("ended",()=>{

music.currentTime=0;

music.play();

});

}

/*==========================================================
    VISIBILIDADE
==========================================================*/

document.addEventListener(
    "visibilitychange",
    ()=>{

        if(document.hidden){

            if(!music.paused){

                music.volume=.15;

            }

        }
        else{

            music.volume=.45;

        }

    }
);

/*==========================================================
    TECLA ESPAÇO
==========================================================*/

window.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

toggleMusic();

}

});

/*==========================================================
    ANIMAÇÃO
==========================================================*/

if(music){

music.addEventListener("play",()=>{

playing=true;

updateButton();

});

music.addEventListener("pause",()=>{

playing=false;

updateButton();

});

}

/*==========================================================
    FIM
==========================================================*/