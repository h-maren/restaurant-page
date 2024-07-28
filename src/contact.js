const title=document.createElement('h1');
title.textContent="Cafe Hipsta Contact";

const contactContainer=document.createElement('div');
contactContainer.className='contact-info';

const hoursInfo=document.createElement('div');
hoursInfo.classList='contactCard';

const hoursTitle=document.createElement('h4');
hoursTitle.textContent='Hours';
hoursInfo.appendChild(hoursTitle);
const hoursInfo1=document.createElement('div');
hoursInfo1.textContent='Monday through Thursday, 6am-3pm';
hoursInfo.appendChild(hoursInfo1);
const hoursInfo2=document.createElement('div');
hoursInfo2.textContent='Friday & Saturday, 6am-5pm';
hoursInfo.appendChild(hoursInfo2);
const hoursInfo3=document.createElement('div');
hoursInfo3.textContent='Sunday, 7am-2pm';
hoursInfo.appendChild(hoursInfo3);

contactContainer.appendChild(hoursInfo);


const contactInfo=document.createElement('div');
contactInfo.classList='contactCard';

const contactTitle=document.createElement('h4');
contactTitle.textContent='Contact Us';
contactInfo.appendChild(contactTitle);
const contactInfo1=document.createElement('div');
contactInfo1.textContent='Email: cafehipsta@notreal.com';
contactInfo.appendChild(contactInfo1);
const contactInfo2=document.createElement('div');
contactInfo2.textContent='Phone: 520-867-5309';
contactInfo.appendChild(contactInfo2);
const contactInfo3=document.createElement('div');
contactInfo3.textContent='500 E. 19th Ave';
contactInfo.appendChild(contactInfo3);
const contactInfo4=document.createElement('div');
contactInfo4.textContent='Super Trendy City,TX';
contactInfo.appendChild(contactInfo4);

contactContainer.appendChild(contactInfo);

export {title, contactContainer};