document.addEventListener("DOMContentLoaded", function () {
  const processings = document.querySelectorAll('.processing-bar');

  // function buat ngecek udah scroll jendela blom
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  //bikin fungsi skillbar
  function animateSkillBars() {
    processings.forEach((processing) => {
      if (isElementInViewport(processing)) {
        const dataBar = processing.getAttribute('data-bar');
        setTimeout(() => {
          processing.style.width = dataBar + '%';
          processing.style.opacity = 1;
        }, 500);
      }
    });
  }

  // panggil fungsi skill bar
  animateSkillBars();

  // panggil fungsi lagi pas user lagi scroll
  window.addEventListener('scroll', animateSkillBars);

  // script buat button scroll
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href").substring(1);
    const target = document.getElementById(href);
    target.scrollIntoView({
      behavior: "smooth",
    });
  }
});
