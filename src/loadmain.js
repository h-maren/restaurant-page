const title=document.createElement('h1');
title.textContent="Cafe Hipsta";


const cafeInfo=document.createElement('div');
cafeInfo.className='cafe-description';
    
    
const p1=document.createElement('p');
const p2=document.createElement('p');
const p3=document.createElement('p');
const p4=document.createElement('p');
const p5=document.createElement('p');
p1.textContent=`Do you want overpriced coffee that is extremely acidic? You don't like acidic coffee, you poser?`;
p2.textContent=`When you ask for a macchiato do you want the barista to say to you "Do you know what that REALLY is? Starbucks doesn't make real macchiatos"?`;
p3.textContent=`How about do you want the barista to stare at you instead of asking you what can I get you?`;
p4.textContent=`Then you've found your place!`;
p5.textContent=`Come to Cafe Hipsta, located at your recently gentrified neighborhood of your trendy growing city!`;


cafeInfo.appendChild(p1);
cafeInfo.appendChild(p2);
cafeInfo.appendChild(p3);
cafeInfo.appendChild(p4);
cafeInfo.appendChild(p5);


export {title,cafeInfo};
