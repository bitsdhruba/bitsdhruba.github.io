const header = document.querySelector("header");
const navSection = document.querySelector(".wave");

const sectionOption = {
  rootMargin: "-50px 0px 0px 0px",
};

const sectionObserver = new IntersectionObserver(function (
  entries,
  navSection
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.remove("nav__scroll");
    } else {
      header.classList.add("nav__scroll");
    }
  });
},
sectionOption);

sectionObserver.observe(navSection);

const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween.start();

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
