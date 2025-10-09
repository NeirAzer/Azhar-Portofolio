// ==== Tabs ====
const tabLinks = document.querySelectorAll(".tab-link");
const tabs = document.querySelectorAll(".tab");

tabLinks.forEach(button => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    // remove active class from all
    tabLinks.forEach(btn => btn.classList.remove("active"));
    tabs.forEach(tab => {
      tab.classList.remove("active");
      tab.style.display = "none";
    });

    // add active class to clicked
    button.classList.add("active");
    const target = document.getElementById(targetTab);

    // show target tab and trigger transition
    target.style.display = "block";
    setTimeout(() => target.classList.add("active"), 10);
  });
});


// ==== Smooth Scroll ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    if (targetId) {
      e.preventDefault();
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ==== Scroll Reveal ====
const revealElements = document.querySelectorAll(
  "section, .skillBox, .webContainer a, .infoContainer"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ==== Back to Top Button ====
const backToTop = document.createElement("button");
backToTop.innerHTML = "^";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.zIndex = "9999";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.fontSize = "20px";
backToTop.style.display = "none";
backToTop.style.cursor = "pointer";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "red";
backToTop.style.color = "white";
backToTop.style.boxShadow = "0 3px 5px rgba(0,0,0,0.3)";
backToTop.style.transition = "0.3s";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
