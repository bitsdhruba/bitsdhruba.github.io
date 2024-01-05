const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
})

const hiddenSections = document.querySelectorAll('.hidden');
hiddenSections.forEach((el)=> observer.observe(el));



const header = document.querySelector('header');
const navSection = document.querySelector('.wave');

const sectionOption = {
  rootMargin : "-50px 0px 0px 0px"
};

const sectionObserver = new IntersectionObserver(
  function(entries, navSection){
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        header.classList.remove("nav__scroll");
      }else{
        header.classList.add("nav__scroll");
      }
    });
  }, sectionOption
);

sectionObserver.observe(navSection);



const tween = KUTE.fromTo(
  '#blob1',
  {path : '#blob1'},
  {path : '#blob2'},
  {repeat : 999, duration : 3000, yoyo : true}
  
)

tween.start();