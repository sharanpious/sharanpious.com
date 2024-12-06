document.addEventListener("DOMContentLoaded", function () {
  // Just update the prices for the ones mentioned here and it will be updated
  const prices = {
    "Day1" : 250,
    "Day2" : 300,
    "Day3" : 500,
    "Day4" : 150,
    "Day5" : 750,
    "Lifetime" : 500,
    "Bonus1" : 150,
    "Bonus2" : 250,
    "Bonus3" : 150
  }

  const boxes = document.querySelectorAll(".join-now1 .box");
  const shadows = document.querySelectorAll(".join-now1 .shadow");
  const faqItems = document.querySelectorAll(".faq-item");
  const scrollButton = document.getElementById("scroll-button");

  // Update the prices
  Object.entries(prices).forEach(([position, value]) => {
    const positions = document.querySelectorAll(`.${position}`);

    positions.forEach((pos) => {
      pos.textContent = `($${value}${position === "Day5" ? "+": ""} Value)`;
    });
  });

  // Update the Total price
  const totals = document.querySelectorAll(".total");

  totals.forEach((total) => {
    total.textContent = `$${Object.values(prices).reduce((a, b) => a + b)}`;
  });

  // Scroll to top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });

  // FAQ Toggle functionality
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      // Toggle the clicked FAQ item
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");

      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = "1";
        answer.style.padding = "10px 55px 0 6px";
        answer.style.margin = "0px 15px 15px 15px";
        question.style.borderBottom = "0.5px solid rgba(255, 255, 255, 0.2)";
        question.style.background = "rgba(112, 112, 112, 0.2)"
        
      } else {
        answer.style.maxHeight = "0";
        answer.style.opacity = "0";
        answer.style.padding = "0px 55px 0 6px";
        answer.style.margin = "0px 15px 0px 15px";
        question.style.background = "black"
      }
    });
  });

  // Hover effect for boxes
  boxes.forEach((box, index) => {
    box.addEventListener("mouseenter", function () {
      if (shadows[index]) {
        shadows[index].style.transform = "scale(1.02)";
      }
    });

    box.addEventListener("mouseleave", function () {
      if (shadows[index]) {
        shadows[index].style.transform = "scale(0.97)";
      }
    });
  });

  const buttons = document.querySelectorAll(".ccc-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      window.location.href = "./join/";
    });
  });
  
});
