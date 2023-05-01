const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("animateShow");
    } else {
      entry.target.classList.remove("animateShow");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animateHide");
hiddenElements.forEach((element) => {
  observer.observe(element);
});
