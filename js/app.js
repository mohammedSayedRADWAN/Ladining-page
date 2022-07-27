

// build the nav
const sections=document.querySelectorAll('section')
// fragment is instance from DocumentFragment
const fragment = document.createDocumentFragment(); 
let counter=0;
sections.forEach(section => {
// use counter to now numper of section
  counter++;
    const li=document.createElement('li');
const link=document.createElement('a');
li.appendChild(link);
link.classList.add('menu__link');
// to linking  section with own link in nav-bar
link.setAttribute('href',`#${section.id}`);
link.textContent='Section '+counter;
// use fregment to decrease time of "Repaint"  and "Reflow"
fragment.appendChild(li);
});
const nav_list=document.getElementById('navbar__list')
nav_list.appendChild(fragment);



sections.forEach(section => {
  
  window.addEventListener('scroll',()=>{
    // -200 to 400 is range of view port
    if(section.getBoundingClientRect().top<=400&&section.getBoundingClientRect().top>-200)
    {
      // add unique class to section observed
      section.classList.add('your-active-class')
      const activLink=document.querySelector(`a[href="#${section.id}"]`);
      //add unique class to id of section observed
      activLink.classList.add('active-link');
      
    }
    else
    {
      // remove unique class of section
      section.classList.remove('your-active-class');
      const activLink=document.querySelector(`a[href="#${section.id}"]`);
      // remove unique class of id of section
      activLink.classList.remove('active-link');
    }
    
  })

});

// a is nodeList contain all actors which has class='menue-link'
const a=document.querySelectorAll('a[href^="#"]');

a.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // e is object target
    // stop default action and excute my function(scroll smooth)
      e.preventDefault();
console.log(this.getAttribute('href'));
// this refer to 'e'
//this.getAttribute('href') mean value of href==> id: #section1(id of <a> clicked)
      const b=document.querySelector(this.getAttribute('href'));
      // hold section
      b.scrollIntoView({
          behavior: 'smooth',
          block : 'center'
      });
  });
});

