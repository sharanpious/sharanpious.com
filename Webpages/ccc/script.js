document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".join-now1 .box");
  const shadows = document.querySelectorAll(".join-now1 .shadow");
  const faqItems = document.querySelectorAll(".faq-item");
  const scrollButton = document.getElementById("scroll-button");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });

  // FAQ Toggle functionality
  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", function () {
      // Toggle the clicked FAQ item
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
      } else {
        answer.style.maxHeight = "0";
        answer.style.opacity = "0";
      }
    });
  });

  // Hover effect for boxes
  boxes.forEach((box, index) => {
    box.addEventListener("mouseenter", function () {
      if (shadows[index]) {
        shadows[index].style.transform = "scale(1)";
      }
    });

    box.addEventListener("mouseleave", function () {
      if (shadows[index]) {
        shadows[index].style.transform = "scale(0.9)";
      }
    });
  });
});
