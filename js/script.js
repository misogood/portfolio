const myNav = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  myNav.classList.toggle('show');
});

document.onscroll = () => {
  myNav.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

gsap.to('.hero-text', { y: 20, duration: 2, opacity: 1 })
gsap.to('.dev', { y: 40, duration: 2, opacity: 1, delay: 1.2 })
gsap.to('a', { y: 20, opacity: 1, delay: 2.5, stagger: 0.3 })

gsap.registerPlugin(ScrollTrigger);
const headings = gsap.utils.toArray('.heading');
headings.forEach(heading => {
  gsap.to (heading, { 
    x:-20,
    opacity: 1,
    duration:1.5,
    scrollTrigger: {
      trigger: heading,
      toggleActions: "play restart none reset"
    }
  })
});
	
