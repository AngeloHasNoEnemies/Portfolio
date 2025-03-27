document.addEventListener("DOMContentLoaded", function () {
    function animateSkillBars() {
      let skillBars = document.querySelectorAll(".skillbar");
      skillBars.forEach((bar) => {
        let percent = bar.getAttribute("data-percent");
        let skillBarInner = bar.querySelector(".skillbar-bar");
        
        if (isElementInViewport(bar)) {

          if (skillBarInner.style.width !== percent) {

            skillBarInner.style.transition = "width 1s ease-in-out";
            skillBarInner.style.width = percent;
          }
        } else {

          skillBarInner.style.width = "0%";
        }
      });
    }
  

    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
      );
    }
  

    window.addEventListener("scroll", animateSkillBars);
    animateSkillBars();
  

    let contentSlide = document.querySelector(".content-slide");
    if (contentSlide) {
      contentSlide.addEventListener("wheel", function (e) {
        e.preventDefault();
        contentSlide.scrollLeft += e.deltaY;
      });
    }
  
    document.querySelectorAll(".content-slide img").forEach((img) => {
      img.setAttribute("src", img.getAttribute("data-src"));
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});
