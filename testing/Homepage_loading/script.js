document.addEventListener("DOMContentLoaded", function() {
    const loadingBar = document.getElementById("loading-bar");
    const loadingPercentage = document.getElementById("loading-percentage");
    let progress = 0;
  
    function updateLoadingBar() {
      const totalElements = document.querySelectorAll("*").length;
      const loadedElements = [...document.querySelectorAll("*")].filter(el => el.complete || el.readyState === "complete").length;
      progress = Math.round((loadedElements / totalElements) * 100);
  
      loadingBar.style.width = progress + "%";
      loadingPercentage.textContent = progress + "%";
  
      if (progress < 100) {
        requestAnimationFrame(updateLoadingBar);
      } else {
        document.getElementById("loading-container").style.display = "none";
      }
    }
  
    updateLoadingBar();
  
    window.addEventListener("load", function() {
      progress = 100;
      loadingBar.style.width = progress + "%";
      loadingPercentage.textContent = progress + "%";
      setTimeout(() => {
        document.getElementById("loading-container").style.display = "none";
      }, 500);
    });
  });
  