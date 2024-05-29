"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);


const menuToggle = document.querySelector('.nav__button');

menuToggle.addEventListener('click', menuOpen);

function menuOpen(){

    document.body.classList.toggle("menu--open")

}

document.addEventListener('pointermove', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    const posX = x / window.innerWidth;
    const posY = y / window.innerHeight;

    const layers = document.querySelectorAll('.layer');

    layers.forEach(function(layer, index) {
        const transformX = -posX * (index + 1) * -20 + 'px';
        const transformY = -posY * (index + 1) * -20 + 'px';

        // Utilisation de GSAP pour animer les transformations avec une durée plus longue et une accélération
        gsap.to(layer, {
            x: transformX,
            y: transformY,
            ease: "power1.out",
        });
    });
});

/* if page home */


let timeMain = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        pin: true,
        start:"bottom bottom",
        end:'+=2500',
        scrub: 1
    }
});

timeMain.to('.bubble', {
    width: "150%",
    height: "150%",
});

let timeAbout = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start:"top bottom",
        end:'bottom top',
        scrub: 1
    }
});
timeAbout.to('.about-container', {
    y: '0',
    x: '0',
    rotate: ' 2deg'
});

let timeWork = gsap.timeline({
    scrollTrigger: {
        trigger: ".projet",
        end:'+=2500',
        pin: true,
        scrub: 1
    }
});

timeWork.to('.projet-1', {
    yPercent: '-150',
    opacity: 1,
});

timeWork.to('.work__imgs--1', {
    width:'140%',
    rotate:'-7deg',
    scale: "0.8",
});

timeWork.to('.projet-2', {
    yPercent: '-150',
    opacity: 1,
});
timeWork.to('.work__imgs--2', {
    width:'140%',
    rotate:'7deg',
    scale: "0.8",
});

timeWork.to('.projet-1', {
    scale: 0.95,
});

timeWork.to('.projet-3', {
    yPercent: '-150',
    opacity: 1,
});
timeWork.to('.work__imgs--3', {
    width:'140%',
    rotate:'3deg',
    scale: "0.8",
});

timeWork.to('.projet-2', {
    scale: 0.95,
});

/*
let timeWork = gsap.timeline({
    scrollTrigger: {
        trigger: ".work",
        pin: true,
        start: "top-=-40px top",
        end: "+=2500",
        scrub: 1
    }
});

timeWork.to('.images-1', {
    y: '0px',
});

timeWork.addLabel('projet1');
timeWork.to('.projet-1', {
    yPercent: 0,
    opacity: 1
});



timeWork.from('.projet-2', {
    yPercent: 75,
    opacity: 0
});

timeWork.to('.images-2', {
    y: '0px',
});

timeWork.addLabel("projet2");

timeWork.to(".projet-1", {
    scale: 0.95,
    yPercent: -0.5,
}, "-=0.3");

timeWork.to('.projet-2', {
    yPercent: 0,
    opacity: 1
});

timeWork.from('.projet-3', {
    yPercent: 75,
    opacity: 0
});

timeWork.to('.images-3', {
    y: '0px',
});

timeWork.addLabel('projet3');

timeWork.to(".projet-2", {
    scale: 0.98,
    yPercent: -0.4,
}, "-=0.3");

timeWork.to(".projet-3", {
    yPercent: 0,
    opacity: 1
});

timeWork.to('.projet-3', {});
*/

let timeSkills = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills__item",
        start:'top bottom',
        end:'bottom top' ,
        scrub: 1
    }
});

timeSkills.to('.skills__item', {
    x: '0px',
});


/* if page work 


const btn = document.querySelector(".switch");

btn.addEventListener("click", switchToggle);

function switchToggle() {
    btn.classList.toggle("switch--active");
}
*/