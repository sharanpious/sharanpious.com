document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // To make it scroll to the top most when the user presses the home
    if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // else scrolls to the respective section with as offset
    else {
      window.scrollTo({
        top: targetElement.offsetTop - 95,
        behavior: "smooth",
      });
    }
  });
});


// document.querySelectorAll(".navbar a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document
//       .querySelectorAll(".navbar a")
//       .forEach((link) => link.classList.remove("active"));
//     this.classList.add("active");

//     const targetId = this.getAttribute("href").substring(1);
//     const targetElement = document.getElementById(targetId);

//     if (targetId === "home") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     } else {
//       window.scrollTo({
//         top: targetElement.offsetTop - 100,
//         behavior: "smooth",
//       });
//     }
//   });
// });

// document.addEventListener("scroll", function () {
//     const sections = document.querySelectorAll(
//       ".section, .content, .myself, .content2, .content3, .content4, .content5"
//     );
//     const navbarLinks = document.querySelectorAll(".navbar a");
  
//     let currentSectionId = "";
  
//     if (scrollY === 0) {
//       currentSectionId = "home";
//     } else {
//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100;
//         if (scrollY >= sectionTop) {
//           currentSectionId = section.getAttribute("id");
//         }
//       });
//     }
  
//     navbarLinks.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href").substring(1) === currentSectionId) {
//         link.classList.add("active");
//       }
//     });
//   });
  