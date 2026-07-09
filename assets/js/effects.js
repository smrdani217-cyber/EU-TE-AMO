/*==========================================================
    PARA SEMPRE NÓS ❤️
    EFFECTS.JS
==========================================================*/


/*==========================================================
    CLIQUE COM CORAÇÃO
==========================================================*/

document.addEventListener("click",(event)=>{


    const heart=document.createElement("span");


    heart.className="click-heart";


    heart.innerHTML="❤️";


    heart.style.left=

    event.clientX+"px";


    heart.style.top=

    event.clientY+"px";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },1200);


});



/*==========================================================
    EFEITO DE BRILHO NOS CARDS
==========================================================*/

const glowElements=document.querySelectorAll(

".photo-card, .timeline-content, .page, .counter-box"

);



glowElements.forEach(element=>{


    element.addEventListener("mousemove",(e)=>{


        const rect=

        element.getBoundingClientRect();



        const x=

        e.clientX-rect.left;



        const y=

        e.clientY-rect.top;



        element.style.setProperty(

            "--x",

            x+"px"

        );



        element.style.setProperty(

            "--y",

            y+"px"

        );


    });



    element.addEventListener("mouseleave",()=>{


        element.style.removeProperty("--x");

        element.style.removeProperty("--y");


    });



});



/*==========================================================
    ANIMAÇÃO SUAVE DOS TÍTULOS
==========================================================*/

const titles=document.querySelectorAll(

".title h2"

);



const titleObserver=new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(

                "title-show"

            );


        }


    });



},{


    threshold:.4


});



titles.forEach(title=>{


    titleObserver.observe(title);


});



/*==========================================================
    EFEITO DIGITAÇÃO DO NOME
==========================================================*/


const logo=document.querySelector(".logo");


if(logo){


    const original=logo.textContent;


    logo.textContent="";



    let i=0;



    function writeLogo(){


        if(i<original.length){


            logo.textContent+=original.charAt(i);


            i++;


            setTimeout(writeLogo,120);


        }


    }



    setTimeout(writeLogo,1000);


}



/*==========================================================
    PAUSAR EFEITOS QUANDO ABAIXA PERFORMANCE
==========================================================*/


let lowPerformance=false;


if(navigator.hardwareConcurrency &&

navigator.hardwareConcurrency<=2){


    lowPerformance=true;


}



if(lowPerformance){


    document.body.classList.add(

        "low-performance"

    );


}



/*==========================================================
    FIM EFFECTS.JS
==========================================================*/