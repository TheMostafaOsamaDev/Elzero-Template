//Mega Menu Click
let liMegaMenuClick = document.querySelector(".mega-menu-click");
let theMegaMenu = document.querySelector(".mega-menu");
let megaMenuArrow = document.querySelector(".mega-menu-arrow");

liMegaMenuClick.onclick = function (event) {
    if (theMegaMenu.classList.contains("show-mega-menu")) {
        theMegaMenu.classList.remove("show-mega-menu");
        megaMenuArrow.style = "transform: rotate(0deg);";
    } else {
        theMegaMenu.classList.add("show-mega-menu");
        megaMenuArrow.style = "transform: rotate(180deg);";
        event.stopPropagation();
    }
};

document.body.onclick = function () {
    theMegaMenu.classList.remove("show-mega-menu");
};

//Scroll To Top & Animation Width
let spans = document.querySelectorAll(".progress > span");
let goUpSpan = document.querySelector(".go-up-arrow");

window.onscroll = function () {
    if (this.scrollY >= 200) {
        goUpSpan.classList.add("show-up-theArrow");
    } else {
        goUpSpan.classList.remove("show-up-theArrow");
    }
    if (this.scrollY >= 7560) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

goUpSpan.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

//Events countdown
let targetEvent = new Date("Dec 31, 2022 23:59:59").getTime();
let spanDays = document.getElementById("days-counter");
let spanHours = document.getElementById("hours-counter");
let spanMin = document.getElementById("minutes-counter");
let spanSec = document.getElementById("seconds-counter");

let eventCounter = setInterval(() => {
    let dateNow = new Date().getTime();

    //Get Differnce
    let timeDiff = targetEvent - dateNow;

    //Get Days
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    spanDays.innerHTML = days;
    spanHours.innerHTML = hours;
    spanMin.innerHTML = minutes;
    spanSec.innerHTML = seconds;
}, 1000);

//Statictis Numbers Uncreasing
let allStatsNums = document.querySelectorAll(
    ".statistics .container .box .number"
);
let started = false; //function off

function statsIncreasing(stat) {
    let goal = stat.dataset.count;
    let startCount = setInterval(() => {
      stat.textContent++;
      if (stat.textContent === goal) {
        clearInterval(startCount);
      }
    }, 2000 / goal);
}

window.onscroll = function () {
    if (scrollY >= 12036) {
      if (!started) {
        allStatsNums.forEach((stat) => statsIncreasing(stat));
      } 
      started = true;
    }
    if (this.scrollY >= 200) {
        goUpSpan.classList.add("show-up-theArrow");
    } else {
        goUpSpan.classList.remove("show-up-theArrow");
    }
    if (this.scrollY >= 7560) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};
