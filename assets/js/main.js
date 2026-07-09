/*==========================================================
    PARA SEMPRE NÓS ❤️
    MAIN.JS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initLoader();

    initEnterButton();

    initTyping();

    initModal();

    initScroll();

    initNavbar();

});

/*==========================================================
    LOADER
==========================================================*/

function initLoader(){

    const loader = document.getElementById("loader");

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.style.opacity="0";

            loader.style.visibility="hidden";

        },1800);

    });

}

/*==========================================================
    ENTRAR NO SITE
==========================================================*/

function initEnterButton(){

    const button=document.getElementById("enterSite");

    const intro=document.getElementById("intro");

    const music=document.getElementById("bgMusic");

    if(!button) return;

    button.addEventListener("click",()=>{

        intro.style.opacity="0";

        intro.style.pointerEvents="none";

        setTimeout(()=>{

            intro.style.display="none";

        },900);

        music.play().catch(()=>{

            console.log("Autoplay bloqueado pelo navegador.");

        });

        createHeartExplosion();

    });

}

/*==========================================================
    CARTA
==========================================================*/

function initTyping(){

    const element=document.getElementById("typingText");

    if(!element) return;

    const text=`

Meu amor,

Hoje eu queria fazer algo diferente.

Não apenas escrever uma mensagem.

Mas criar um lugar onde cada detalhe lembrasse o quanto você é importante para mim.

Obrigado por todos os momentos.

Obrigado por cada sorriso.

Obrigado por existir.

Você mudou completamente minha vida.

E se eu pudesse escolher novamente...

Eu escolheria você mil vezes.

Feliz aniversário de namoro.

Eu te amo infinitamente.

❤️

`;

    let index=0;

    function type(){

        if(index<text.length){

            element.innerHTML+=text.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                type();

                observer.disconnect();

            }

        });

    });

    observer.observe(element);

}

/*==========================================================
    MODAL
==========================================================*/

function initModal(){

    const modal=document.getElementById("finalModal");

    const open=document.getElementById("openFinal");

    const close=document.getElementById("closeModal");

    if(!modal) return;

    open.addEventListener("click",()=>{

        modal.style.display="flex";

    });

    close.addEventListener("click",()=>{

        modal.style.display="none";

    });

    window.addEventListener("click",(e)=>{

        if(e.target===modal){

            modal.style.display="none";

        }

    });

}

/*==========================================================
    NAVBAR
==========================================================*/

function initNavbar(){

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.background="rgba(0,0,0,.75)";

            header.style.padding="15px 7%";

        }

        else{

            header.style.background="rgba(0,0,0,.25)";

            header.style.padding="20px 7%";

        }

    });

}

/*==========================================================
    SCROLL
==========================================================*/

function initScroll(){

    const items=document.querySelectorAll(

        ".timeline-item,.photo-card,.page,.counter-box,.reason-card"

    );

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    items.forEach(item=>{

        item.style.opacity="0";

        item.style.transform="translateY(60px)";

        item.style.transition=".8s";

        observer.observe(item);

    });

}
/*==========================================================
    EXPLOSÃO DE CORAÇÕES
==========================================================*/

function createHeartExplosion(){

    const container=document.getElementById("hearts");

    if(!container) return;

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="floating-heart";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="55vh";

        heart.style.fontSize=(18+Math.random()*30)+"px";

        heart.style.animationDuration=(3+Math.random()*3)+"s";

        heart.style.opacity=Math.random();

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    }

}

/*==========================================================
    CHUVA DE CORAÇÕES
==========================================================*/

function startHeartRain(){

    const container=document.getElementById("hearts");

    if(!container) return;

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="floating-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-40px";

        heart.style.fontSize=(14+Math.random()*18)+"px";

        heart.style.animationDuration=(6+Math.random()*5)+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },12000);

    },350);

}

startHeartRain();

/*==========================================================
    BOTÃO VOLTAR AO TOPO
==========================================================*/

const topButton=document.createElement("button");

topButton.id="backTop";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>700){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

/*==========================================================
    EFEITO PARALLAX
==========================================================*/

const hero=document.querySelector("#hero img");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    hero.style.transform=

    `translateY(${window.scrollY*0.25}px) scale(1.08)`;

});

/*==========================================================
    FRASES ALEATÓRIAS
==========================================================*/

const frases=[

"Você é meu lugar favorito ❤️",

"Meu mundo ficou melhor desde que você chegou.",

"Cada dia ao seu lado vale a pena.",

"Você é minha melhor escolha.",

"Nosso amor é meu maior presente.",

"Obrigado por existir.",

"Você é meu sorriso favorito.",

"Eu escolheria você novamente.",

"Para Sempre Nós ❤️"

];

function randomPhrase(){

    const el=document.getElementById("reasonText");

    if(!el) return;

    const random=Math.floor(Math.random()*frases.length);

    el.style.opacity="0";

    setTimeout(()=>{

        el.innerHTML=frases[random];

        el.style.opacity="1";

    },300);

}

const next=document.getElementById("nextReason");

if(next){

    next.addEventListener("click",randomPhrase);

}

/*==========================================================
    CURSOR BRILHANTE
==========================================================*/

const cursor=document.createElement("div");

cursor.id="cursorGlow";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

/*==========================================================
    REVELAÇÃO SUAVE
==========================================================*/

const revealItems=document.querySelectorAll(

"section"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.2

});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*==========================================================
    FIM MAIN.JS PARTE 2
==========================================================*/