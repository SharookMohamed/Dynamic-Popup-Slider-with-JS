// popup and pop up carousel js -------------

document.querySelectorAll(".review--imges-div").forEach(function (link) {
  link.addEventListener("click", function () {
    var popupIdReview = this.getAttribute("data-popup-id");
    var popup1Review = document.getElementById(popupIdReview);

    if (popup1Review) {
      document.querySelector(".review--popup-container").style.visibility =
        "visible";
      document.querySelector(".review--popup-container").style.opacity = "1";
      document.querySelector(".review--popup-container").style.transform =
        "scale(1)";

      document
        .querySelectorAll(".review--open")
        .forEach(function (popupContentReview) {
          popupContentReview.classList.remove("active");
        });

      popup1Review.classList.add("active");
      updatePopupNavigation_Review();
    }
  });
});

document
  .querySelector(".reviewpop--close")
  .addEventListener("click", function () {
    document.querySelector(".review--popup-container").style.visibility =
      "hidden";
    document.querySelector(".review--popup-container").style.opacity = "0";
    document.querySelector(".review--popup-container").style.transform =
      "scale(1.3)";
  });

document
  .querySelector(".rytbttn-review--popjs")
  .addEventListener("click", function () {
    navigatePopup("next");
  });

document
  .querySelector(".lftbttn-review--popjs")
  .addEventListener("click", function () {
    navigatePopup("prev");
  });

function navigatePopup(directionReview) {
  var activePopupReview = document.querySelector(".review--open.active");
  if (!activePopupReview) return;

  var allPopupsReview = document.querySelectorAll(".review--open");
  var activeIndexReview =
    Array.from(allPopupsReview).indexOf(activePopupReview);
  var newIndexReview =
    directionReview === "next" ? activeIndexReview + 1 : activeIndexReview - 1;

  if (newIndexReview >= allPopupsReview.length) newIndexReview = 0;
  if (newIndexReview < 0) newIndexReview = allPopupsReview.length - 1;

  activePopupReview.classList.remove("active");
  allPopupsReview[newIndexReview].classList.add("active");
  updatePopupNavigation_Review();
}

function updatePopupNavigation_Review() {
  var activePopupReview = document.querySelector(".review--open.active");
  if (!activePopupReview) return;

  var allPopupsReview = document.querySelectorAll(".review--open");
  var activeIndexReview =
    Array.from(allPopupsReview).indexOf(activePopupReview);

  document.querySelector(".lftbttn-review--popjs").style.display =
    activeIndexReview > 0 ? "block" : "none";
  document.querySelector(".rytbttn-review--popjs").style.display =
    activeIndexReview < allPopupsReview.length - 1 ? "block" : "none";
}

window.addEventListener("hashchange", function () {
  var popupContainer = document.querySelector(".review--popup-container");
  if (location.hash) {
    var popupIdReview = location.hash.substring(1);
    var popup1Review = document.getElementById(popupIdReview);
    if (popup1Review) {
      popupContainer.style.visibility = "visible";
      popupContainer.style.opacity = "1";
      popupContainer.style.transform = "scale(1)";

      document
        .querySelectorAll(".review--open")
        .forEach(function (popupContentReview) {
          popupContentReview.classList.remove("active");
        });

      popup1Review.classList.add("active");
      updatePopupNavigation_Review();
    }
  } else {
    popupContainer.style.visibility = "hidden";
    popupContainer.style.opacity = "0";
    popupContainer.style.transform = "scale(1.3)";
  }
});

// Ensure popup visibility on page load based on the current hash
window.addEventListener("DOMContentLoaded", function () {
  if (location.hash) {
    var popupIdReview = location.hash.substring(1);
    var popup1Review = document.getElementById(popupIdReview);
    if (popup1Review) {
      document.querySelector(".review--popup-container").style.visibility =
        "visible";
      document.querySelector(".review--popup-container").style.opacity = "1";
      document.querySelector(".review--popup-container").style.transform =
        "scale(1)";

      document
        .querySelectorAll(".review--open")
        .forEach(function (popupContentReview) {
          popupContentReview.classList.remove("active");
        });

      popup1Review.classList.add("active");
      updatePopupNavigation_Review();
    }
  }
});

// img carousel js----------

var container_Review = document.querySelector(".review--images-maindiv");
var leftButton_Review = document.querySelector(".lftbttn-review--js");
var rightButton_Review = document.querySelector(".rytbttn-review--js");

checkScroll_Review();

container_Review.addEventListener("scroll", checkScroll_Review);

function checkScroll_Review() {
  if (container_Review.scrollLeft > 0) {
    leftButton_Review.style.display = "block";
  } else {
    leftButton_Review.style.display = "none";
  }

  var ContainerWidth =
    container_Review.scrollWidth - container_Review.clientWidth;
  if (container_Review.scrollLeft < ContainerWidth) {
    rightButton_Review.style.display = "block";
  } else {
    rightButton_Review.style.display = "none";
  }
}

rightButton_Review.onclick = function () {
  sideScroll_Review(container_Review, "right", 0, 300, 20);
};

leftButton_Review.onclick = function () {
  sideScroll_Review(container_Review, "left", 0, 300, 20);
};

function sideScroll_Review(element, directionReview, speed, distance, step) {
  scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (directionReview == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
