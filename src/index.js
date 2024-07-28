import './style.css';
import {title,cafeInfo} from './loadmain.js';
import {title as menuTitle, menu} from './menu.js';
import {title as contactTitle, contactContainer} from './contact.js';

const mainElement=document.querySelector('#content');

renderHomePage();

function renderHomePage(){
    mainElement.appendChild(title);
    mainElement.appendChild(cafeInfo);
};

const homeBtn=document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
    clearPage();
    renderHomePage();    
});

const menuBtn=document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
    //clear all elements
    clearPage();
    //add new elements
    mainElement.appendChild(menuTitle);
    mainElement.appendChild(menu);
});

const contactBtn=document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
    clearPage();
    mainElement.appendChild(contactTitle);
    mainElement.appendChild(contactContainer);
});

function clearPage(){
    while (mainElement.lastElementChild) {
        mainElement.removeChild(mainElement.lastElementChild);
    }
};
