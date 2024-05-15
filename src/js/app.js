"use strict";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);


const menuToggle = document.querySelector('.nav__button');

menuToggle.addEventListener('click', menuOpen);

function menuOpen(){

    document.body.classList.toggle("menu--open")

}

let timeAbout = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start:"top bottom",
        end:'bottom top',
        scrub: 1
    }
});
timeAbout.to('.about-container__img', {
    y: '0',
    x: '0',
    rotate: ' 2deg'
});


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

/*
let timeProjet1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projet-1",
        pin: "true",
        end: "+=1000",
        pinSpacing: 'true',
        scrub: 1
    }
});
timeProjet1.to('.images-1', {
    y: '0px',
});

let timeProjet2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projet-2",
        pin: "true",
        end: "+=1000",
        pinSpacing: 'true',
        scrub: 1
    }
});
timeProjet2.to('.images-2', {
    y: '0px',
});

let timeProjet1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projet-1",
        pin: "true",
        end: "+=2000",
        pinSpacing: 'true',
        scrub: 1
    }
});
timeProjet1.to('.images-1', {
    y: '0px',
});

let timeProjet2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projet-2",
        pin: "true",
        start:'bottom bottom',
        end: "+=500",
        pinSpacing: 'true',
        scrub: 1
    }
});
timeProjet2.to('.images-2', {
    y: '0px',
});

let timeProjet3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".projet__el",
        pin: "true",
        start: 'bottom top',
        end: "+=1000",
        pinSpacing: 'true',
        scrub: 1
    }
});
timeProjet3.to('.images-3', {
    y: '0px',
});
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

/*
let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=2000",
        scrub: 1
    }
});

timeln.addLabel('card1');
timeln.to('.card-1', {
    xPercent: 0,
    opacity: 1
});

timeln.from('.card-2', {
    xPercent: 75,
    opacity: 0
});
timeln.addLabel("card2");

timeln.to(".card-1", {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5
}, "-=0.3");

timeln.to('.card-2', {
    xPercent: 0,
    opacity: 1
});

timeln.from('.card-3', {
    xPercent: 75,
    opacity: 0
});
timeln.addLabel('card3');

timeln.to(".card-2", {
    scale: 0.98,
    xPercent: -0.4,
    opacity: 0.6
}, "-=0.3");

timeln.to(".card-3", {
    xPercent: 0,
    opacity: 1
});

*/