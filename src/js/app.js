"use strict";

// Importation des modules GSAP
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuToggle = document.querySelector('.nav__button');
menuToggle.addEventListener('click', menuOpen);

function menuOpen(){
    document.body.classList.toggle("menu--open");
}




document.addEventListener("DOMContentLoaded", function() {
    const url = window.location.pathname;

    if (url.includes("index.html")) {
        console.log("Code pour index.html");

        
        // Timeline pour la section principale
        let timeMain = gsap.timeline({
            scrollTrigger: {
                trigger: ".main",
                pin: true,
                start: "bottom bottom",
                end: '+=2500',
                scrub: 1
            }
        });
        
        timeMain.to('.bubble', {
            width: "150%",
            height: "150%",
        });

        // Timeline pour la section "About"
        let timeAbout = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top bottom",
                end: 'bottom top',
                scrub: 1
            }
        });
        timeAbout.to('.about-container', {
            y: '0',
            x: '0',
            rotate: '2deg'
        });

        // Timeline pour la section "Projet"
        let timeWork = gsap.timeline({
            scrollTrigger: {
                trigger: ".projet",
                end: '+=2500',
                pin: true,
                scrub: 1
            }
        });
        
        timeWork.to('.projet-1', {
            yPercent: '-150',
            opacity: 1,
        })
        .to('.work__imgs--1', {
            width: '140%',
            rotate: '-7deg',
            scale: "0.8",
        })
        .to('.projet-2', {
            yPercent: '-150',
            opacity: 1,
        })
        .to('.work__imgs--2', {
            width: '140%',
            rotate: '7deg',
            scale: "0.8",
        })
        .to('.projet-1', {
            scale: 0.95,
        })
        .to('.projet-3', {
            yPercent: '-150',
            opacity: 1,
        })
        .to('.work__imgs--3', {
            width: '140%',
            rotate: '3deg',
            scale: "0.8",
        })
        .to('.projet-2', {
            scale: 0.95,
        });

        // Timeline pour la section "Skills"
        let timeSkills = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills__item",
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
        
        timeSkills.to('.skills__item', {
            x: '0px',
        });
    }

    if (url.includes("work.html")) {
        console.log("Code pour work.html");
        // Ajoutez votre code spécifique à work.html ici
    }
});
