document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
    // const isLargeScreen = window.matchMedia("(min-width:991px) and (max-width: 1300px)").matches;
    const isMenuScreen = window.matchMedia("(max-width: 991px)").matches;

    let offset = 124;

    if (isSmallScreen) {
      offset = 74
    }
    // else if (isLargeScreen) {
    //   offset = 76
    // }

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

// Function to check if an element is in the middle of the screen
function isInMiddleOfScreen(element) {
  const rect = element.getBoundingClientRect();
  const middleOfScreen = window.innerHeight / 2;
  return rect.top <= middleOfScreen && rect.bottom >= middleOfScreen;
}

// Function to add hover effect when the element is in the middle of the screen
function applyHoverEffect() {
  document.querySelectorAll('.content6 p').forEach((element) => {
    if (isInMiddleOfScreen(element)) {
      element.classList.add('hover');
    } else {
      element.classList.remove('hover');
    }
  });
}

// Listen for scroll and resize events
window.addEventListener('scroll', applyHoverEffect);
window.addEventListener('resize', applyHoverEffect);

// Initial call to applyHoverEffect to check the elements on page load
applyHoverEffect();
