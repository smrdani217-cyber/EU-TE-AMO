/*==========================================================
    PARA SEMPRE NÓS ❤️
    GALLERY.JS
==========================================================*/

let currentImage = 0;

const galleryImages = document.querySelectorAll(".photo-card img");

/*==========================================================
    CRIAR LIGHTBOX
==========================================================*/

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<div class="lightbox-overlay">

    <button id="closeLightbox">&times;</button>

    <button id="prevImage">&#10094;</button>

    <img id="lightboxImage">

    <button id="nextImage">&#10095;</button>

</div>

`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("closeLightbox");
const prevButton = document.getElementById("prevImage");
const nextButton = document.getElementById("nextImage");

/*==========================================================
    ABRIR
==========================================================*/

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentImage=index;

        openLightbox();

    });

});

function openLightbox(){

    lightbox.style.display="flex";

    lightboxImage.src=galleryImages[currentImage].src;

    lightboxImage.alt=galleryImages[currentImage].alt;

    document.body.style.overflow="hidden";

}

/*==========================================================
    FECHAR
==========================================================*/

function closeLightbox(){

    lightbox.style.display="none";

    document.body.style.overflow="auto";

}

closeButton.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

/*==========================================================
    PRÓXIMA FOTO
==========================================================*/

function nextImage(){

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    lightboxImage.src=galleryImages[currentImage].src;

}

/*==========================================================
    FOTO ANTERIOR
==========================================================*/

function previousImage(){

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    lightboxImage.src=galleryImages[currentImage].src;

}

nextButton.addEventListener("click",nextImage);

prevButton.addEventListener("click",previousImage);

/*==========================================================
    TECLADO
==========================================================*/

window.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        previousImage();

    }

    if(e.key==="Escape"){

        closeLightbox();

    }

});

/*==========================================================
    ANIMAÇÃO DAS FOTOS
==========================================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.2
});

galleryImages.forEach(img=>{

    img.style.opacity="0";

    img.style.transform="translateY(60px)";

    img.style.transition=".8s";

    observer.observe(img);

});

/*==========================================================
    EFEITO DE ZOOM
==========================================================*/

galleryImages.forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        const rect=img.getBoundingClientRect();

        const x=((e.clientX-rect.left)/rect.width)*100;

        const y=((e.clientY-rect.top)/rect.height)*100;

        img.style.transformOrigin=`${x}% ${y}%`;

    });

});

/*==========================================================
    FIM
==========================================================*/