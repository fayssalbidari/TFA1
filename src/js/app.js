"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);


const menuToggle = document.querySelector('.nav__button');

menuToggle.addEventListener('click', menuOpen);

function menuOpen(){

    document.body.classList.toggle("menu--open")

}

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
    width: "100%",
    height: "100%",
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


/* if page work */


const btn = document.querySelector(".switch");

btn.addEventListener("click", switchToggle);

function switchToggle() {
    btn.classList.toggle("switch--active");
}