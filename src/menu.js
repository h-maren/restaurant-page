const title=document.createElement('h1');
title.textContent="Cafe Hipsta Menu";

const menu=document.createElement('div');
menu.classList='totalMenu';

const coffeeMenu=document.createElement('div');
coffeeMenu.classList='menuCard';

const coffeeTitle=document.createElement('h4');
coffeeTitle.textContent='Coffee';
coffeeMenu.appendChild(coffeeTitle);
const coffeeItem1=document.createElement('div');
coffeeItem1.textContent='Brewed Coffee, $5';
coffeeMenu.appendChild(coffeeItem1);
const coffeeItem2=document.createElement('div');
coffeeItem2.textContent='Cold Brew, $6';
coffeeMenu.appendChild(coffeeItem2);
const coffeeItem3=document.createElement('div');
coffeeItem3.textContent='Pour Over Coffee, $7';
coffeeMenu.appendChild(coffeeItem3);

menu.appendChild(coffeeMenu);

const espressoMenu=document.createElement('div');
espressoMenu.classList='menuCard';

const espressoTitle=document.createElement('h4');
espressoTitle.textContent='Espresso';
espressoMenu.appendChild(espressoTitle);
const espItem1=document.createElement('div');
espItem1.textContent='Single Espresso Shot, $3';
espressoMenu.appendChild(espItem1);
const espItem2=document.createElement('div');
espItem2.textContent='Hot or Iced Latte, $6';
espressoMenu.appendChild(espItem2);
const espItem3=document.createElement('div');
espItem3.textContent='Cappucino, $6';
espressoMenu.appendChild(espItem3);
const espItem4=document.createElement('div');
espItem4.textContent='Cortado, $5';
espressoMenu.appendChild(espItem4);
const espItem5=document.createElement('div');
espItem5.textContent='Traditional Macchiato, $5';
espressoMenu.appendChild(espItem5);

menu.appendChild(espressoMenu);

const otherDrinkMenu=document.createElement('div');
otherDrinkMenu.classList='menuCard';

const otherDrinkTitle=document.createElement('h4');
otherDrinkTitle.textContent='Other Drinks';
otherDrinkMenu.appendChild(otherDrinkTitle);
const drinkItem1=document.createElement('div');
drinkItem1.textContent='Matche Latte, $6';
otherDrinkMenu.appendChild(drinkItem1);
const drinkItem2=document.createElement('div');
drinkItem2.textContent='Chai Latte, $6';
otherDrinkMenu.appendChild(drinkItem2);
const drinkItem3=document.createElement('div');
drinkItem3.textContent='Hot Tea, $5';
otherDrinkMenu.appendChild(drinkItem3);
const drinkItem4=document.createElement('div');
drinkItem4.textContent='Ice Tea, $5';
otherDrinkMenu.appendChild(drinkItem4);

menu.appendChild(otherDrinkMenu);

const flavorMenu=document.createElement('div');
flavorMenu.classList='menuCard';

const flavorTitle=document.createElement('h4');
flavorTitle.textContent='Flavors, +$0.50';
flavorMenu.appendChild(flavorTitle);
const flavorItem1=document.createElement('div');
flavorItem1.textContent='Vanilla';
flavorMenu.appendChild(flavorItem1);
const flavorItem2=document.createElement('div');
flavorItem2.textContent='Caramel';
flavorMenu.appendChild(flavorItem2);
const flavorItem3=document.createElement('div');
flavorItem3.textContent='Hazelnut';
flavorMenu.appendChild(flavorItem3);
const flavorItem4=document.createElement('div');
flavorItem4.textContent='White Chocolate';
flavorMenu.appendChild(flavorItem4);
const flavorItem5=document.createElement('div');
flavorItem5.textContent='Lavender';
flavorMenu.appendChild(flavorItem5);

menu.appendChild(flavorMenu);

const milkOptionMenu=document.createElement('div');
milkOptionMenu.classList='menuCard';

const milkTitle=document.createElement('h4');
milkTitle.textContent='Milk Options';
milkOptionMenu.appendChild(milkTitle);
const milkItem1=document.createElement('div');
milkItem1.textContent='Whole';
milkOptionMenu.appendChild(milkItem1);
const milkItem2=document.createElement('div');
milkItem2.textContent='Skim';
milkOptionMenu.appendChild(milkItem2);
const milkItem3=document.createElement('div');
milkItem3.textContent='Almond, +$0.75';
milkOptionMenu.appendChild(milkItem3);
const milkItem4=document.createElement('div');
milkItem4.textContent='Oat, +$0.75';
milkOptionMenu.appendChild(milkItem4);

menu.appendChild(milkOptionMenu);

const bakeryMenu=document.createElement('div');
bakeryMenu.classList='menuCard';

const bakeryTitle=document.createElement('h4');
bakeryTitle.textContent='Baked Goods';
bakeryMenu.appendChild(bakeryTitle);
const bakeryItem1=document.createElement('div');
bakeryItem1.textContent="Chocolate or Almond Croissant, $6";
bakeryMenu.appendChild(bakeryItem1);
const bakeryItem2=document.createElement('div');
bakeryItem2.textContent="Regular Croissant, $4";
bakeryMenu.appendChild(bakeryItem2);
const bakeryItem3=document.createElement('div');
bakeryItem3.textContent="Banana Nut or Blueberry Muffin, $5";
bakeryMenu.appendChild(bakeryItem3);
const bakeryItem4=document.createElement('div');
bakeryItem4.textContent="Apple, Maple Pecan, or Rasberry Danish, $5";
bakeryMenu.appendChild(bakeryItem4);

menu.appendChild(bakeryMenu);


export {title, menu};





