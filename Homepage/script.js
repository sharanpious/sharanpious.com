document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    const isMenuScreen = window.matchMedia("(max-width: 991px)").matches;

    let offset = 124;

    if (isSmallScreen) {
      offset = 74
    }

    // if (isSmallScreen) {
    //   offset = 100;
    // } else if (isMediumScreen) {
    //   offset = 100;
    // }

    // Scrolls to the respective section with an offset
    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });

    // Close the hamburger menu on click (for small and medium screens)
    if (isMenuScreen) {
      document.querySelector(".navbar").classList.remove("active");
      document.querySelector(".hamburger").classList.remove("active");
    }
  });
});

// Added event listener to logo
document.getElementById("logo-link").addEventListener("click", function (e) {
  e.preventDefault();

  const isMenuScreen = window.matchMedia("(max-width: 991px)").matches;

  // Scroll to the top of the page, considering body padding
  window.scrollTo({
    top: 0, // Adjust this value if you have additional padding/margin on the body
    behavior: "smooth",
  });

  // Close the hamburger menu on click (for small and medium screens)
  if (isMenuScreen) {
    document.querySelector(".navbar").classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
  }
});

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
}

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
