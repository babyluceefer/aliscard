/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 800);

    }, 1800);

});

/* ========================================
   ANIMATED STARS CANVAS
======================================== */

const canvas =
document.getElementById("stars");

const ctx =
canvas.getContext("2d");

let stars = [];

function resizeCanvas(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

function createStars(){

    stars = [];

    const amount = 300;

    for(let i=0;i<amount;i++){

        stars.push({

            x:
            Math.random() *
            canvas.width,

            y:
            Math.random() *
            canvas.height,

            radius:
            Math.random()*2,

            speed:
            Math.random()*0.5 + 0.1,

            opacity:
            Math.random()

        });

    }

}

createStars();

function animateStars(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    stars.forEach(star => {

        star.y += star.speed;

        if(
            star.y >
            canvas.height
        ){

            star.y = 0;

            star.x =
            Math.random() *
            canvas.width;

        }

        ctx.beginPath();

        ctx.arc(

            star.x,
            star.y,

            star.radius,

            0,
            Math.PI * 2

        );

        ctx.fillStyle =
        `rgba(255,255,255,${star.opacity})`;

        ctx.fill();

    });

    requestAnimationFrame(
        animateStars
    );

}

animateStars();

/* ========================================
   PARALLAX DESKTOP
======================================== */

const body =
document.body;

document.addEventListener(
"mousemove",
(e)=>{

    const x =

    (
        e.clientX /
        window.innerWidth
        - 0.5
    ) * 15;

    const y =

    (
        e.clientY /
        window.innerHeight
        - 0.5
    ) * 15;

    body.style.backgroundPosition =
    `${50+x}% ${50+y}%`;

});

/* ========================================
   PARALLAX MOBILE
======================================== */

window.addEventListener (
"deviceorientation",

(event)=>{

    if(
        event.gamma === null ||
        event.beta === null
    ) return;

    const x =
    event.gamma * 0.3;

    const y =
    event.beta * 0.15;

    body.style.backgroundPosition =
    `${50+x}% ${50+y}%`;

});

/* ========================================
   OPTIONAL:
   SHOOTING STAR RANDOMIZER
======================================== */

const meteors =
document.querySelectorAll(
".shooting-star"
);

meteors.forEach((meteor)=>{

    setInterval(()=>{

        meteor.style.top =
        "-200px";

        meteor.style.left =
        Math.random()*100+"vw";

    },

    Math.random()*5000+4000);

});