const title=document.createElement('h1');
title.textContent="Cafe Hipsta Menu";

const menu=document.createElement('div');
menu.classList='totalMenu';

const coffeeMenu=document.createElement('div');
coffeeMenu.classList='menuCard';

const coffeeTitle=document.createElement('h4');
coffeeTitle.textContent='Coffee & Espresso';
coffeeMenu.appendChild(coffeeTitle);
const coffeeItem1=document.createElement('div');
coffeeItem1.textContent='Brewed Coffee, $5';
coffeeMenu.appendChild(coffeeItem1);
const coffeeItem2=document.createElement('div');
coffeeItem2.textContent='Cold Brew, $6';
coffeeMenu.appendChild(coffeeItem2);
const coffeeItem3=document.createElement('div');
coffeeItem3.textContent='Pour Over Coffee, $8';
coffeeMenu.appendChild(coffeeItem3);
const coffeeItem4=document.createElement('div');
coffeeItem4.textContent='Hot or Iced Latte, $6';
coffeeMenu.appendChild(coffeeItem4);

menu.appendChild(coffeeMenu);

export {title, menu};





