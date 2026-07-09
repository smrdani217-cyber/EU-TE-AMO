/*==========================================================
    PARA SEMPRE NÓS ❤️
    PARTICLES.JS
==========================================================*/

const particleContainer = document.getElementById("particles");

const starContainer = document.getElementById("stars");


/*==========================================================
    PARTÍCULAS
==========================================================*/

function createParticles(){

    if(!particleContainer) return;


    for(let i=0;i<80;i++){

        const particle=document.createElement("span");

        particle.className="particle";


        particle.style.left=

        Math.random()*100+"vw";


        particle.style.top=

        Math.random()*100+"vh";


        const size=

        Math.random()*5+2;


        particle.style.width=size+"px";

        particle.style.height=size+"px";


        particle.style.animationDuration=

        (5+Math.random()*10)+"s";


        particle.style.animationDelay=

        Math.random()*5+"s";


        particleContainer.appendChild(particle);

    }

}


/*==========================================================
    ESTRELAS
==========================================================*/

function createStars(){

    if(!starContainer) return;


    for(let i=0;i<120;i++){

        const star=document.createElement("span");

        star.className="star";


        star.style.left=

        Math.random()*100+"vw";


        star.style.top=

        Math.random()*100+"vh";


        const size=

        Math.random()*3+1;


        star.style.width=size+"px";

        star.style.height=size+"px";


        star.style.animationDuration=

        (2+Math.random()*4)+"s";


        star.style.animationDelay=

        Math.random()*5+"s";


        starContainer.appendChild(star);

    }

}


/*==========================================================
    MOVIMENTO SUAVE DO FUNDO
==========================================================*/

window.addEventListener("mousemove",(event)=>{

    const x=

    event.clientX / window.innerWidth;


    const y=

    event.clientY / window.innerHeight;


    if(starContainer){

        starContainer.style.transform=

        `translate(${x*20}px,${y*20}px)`;

    }


    if(particleContainer){

        particleContainer.style.transform=

        `translate(${x*15}px,${y*15}px)`;

    }

});


/*==========================================================
    INICIAR
==========================================================*/

createParticles();

createStars();


/*==========================================================
    FIM
==========================================================*/