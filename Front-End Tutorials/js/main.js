// Sidebar Section
let sidebar = document.querySelector(".sidebar");
let sidebarSpan = document.getElementById("sidebar-span");
sidebarSpan.onclick = function () {
  if (sidebar.style.left == "0px") {
    sidebar.style.left = "-200px";
    sidebarSpan.style.rotate = "180deg";
    sidebarSpan.style.left = "0px";
  } else {
    sidebar.style.left = "0px";
    sidebarSpan.style.rotate = "0deg";
    sidebarSpan.style.left = "200px";
  }
};
let sidebarLinks = document.querySelectorAll(".sidebar ul a");
sidebarLinks.forEach((li) => {
  li.onclick = () => {
    sidebar.style.left = "-200px";
    sidebarSpan.style.rotate = "180deg";
    sidebarSpan.style.left = "0px";
    // remove class active from all links
    sidebarLinks.forEach((li) => {
      li.classList.remove("active");
    });
    // add active class
    li.classList.add("active");
  };
});
// ************************************************************
// Front-End Tutorilas
// ************************************************************
// Skills Section
let skillsSection = document.querySelector(".skills");
let htmlLevel = document.getElementById("html-level");
let cssLevel = document.getElementById("css-level");
let jsLevel = document.getElementById("js-level");
let reactLevel = document.getElementById("react-level");
// get the span inside to write the value of progress
let htmlLevelSpan = document.querySelector("#html-level span");
let cssLevelSpan = document.querySelector("#css-level span");
let jsLevelSpan = document.querySelector("#js-level span");
let reactLevelSpan = document.querySelector("#react-level span");
// ************************************************************
// loading Options
let loading = document.querySelector(".loading .container > span");
let loadingOptions = document.querySelectorAll(
  ".loading .loading-options span"
);
loadingOptions.forEach((li) => {
  li.onclick = () => {
    // remove active class from all spans
    loadingOptions.forEach((li) => {
      li.classList.remove("active");
    });
    // add active class
    li.classList.add("active");
    loading.style.mixBlendMode = li.innerHTML;
  };
});
// ************************************************************
// Random Password
let randomPasswordSpan = document.querySelector(".random-password .password");
let generatePasswordSpan = document.querySelector(
  ".random-password .generate-password"
);
let characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ0123456789";
let passwordCount = 10;
generatePasswordSpan.onclick = () => {
  let randomPasswrod = "";
  for (let i = 0; i < passwordCount; i++) {
    randomPasswrod += characters[Math.floor(Math.random() * characters.length)];
  }
  randomPasswordSpan.innerHTML = randomPasswrod;
};
// ************************************************************
// Count Time Timer
let timerStart = document.querySelector(".timer-start");
let timerFinish = document.querySelector(".timer-box .finish");
let days = document.querySelector(".timer-box .days");
let hours = document.querySelector(".timer-box .hours");
let minutes = document.querySelector(".timer-box .minutes");
let seconds = document.querySelector(".timer-box .seconds");
let timerDays = document.getElementById("timer-days");
let timerHours = document.getElementById("timer-hours");
let timerMinutes = document.getElementById("timer-minutes");
let timerSeconds = document.getElementById("timer-seconds");
let counter = null;
timerStart.onclick = () => {
  if (counter !== null) {
    clearInterval(counter);
  }
  timerFinish.style.backgroundColor = "#cccfd1";
  if (timerDays.value.length == 0 || timerDays.value < 0) {
    days.innerHTML = 0;
  } else {
    days.innerHTML = timerDays.value;
  }
  if (timerHours.value.length == 0 || timerHours.value < 0) {
    hours.innerHTML = 0;
  } else {
    hours.innerHTML = timerHours.value;
  }
  if (timerMinutes.value.length == 0 || timerMinutes.value < 0) {
    minutes.innerHTML = 0;
  } else {
    minutes.innerHTML = timerMinutes.value;
  }
  if (timerSeconds.value.length == 0 || timerSeconds.value < 0) {
    seconds.innerHTML = 0;
  } else {
    seconds.innerHTML = timerSeconds.value;
  }
  let totalSeconds =
    Number(days.innerHTML) * 24 * 60 * 60 +
    Number(hours.innerHTML) * 60 * 60 +
    Number(minutes.innerHTML) * 60 +
    Number(seconds.innerHTML);
  counter = setInterval(() => {
    if (totalSeconds == 0) {
      clearInterval(counter);
      timerFinish.style.backgroundColor = "green";
    } else {
      totalSeconds--;
      days.innerHTML = Math.floor(totalSeconds / 60 / 60 / 24);
      hours.innerHTML = Math.floor((totalSeconds % 86400) / 60 / 60);
      minutes.innerHTML = Math.floor(((totalSeconds % 86400) % 3600) / 60);
      seconds.innerHTML = Math.floor(((totalSeconds % 86400) % 3600) % 60);
    }
  }, 1000);
};
// ************************************************************
// Random Background Color
let RBGCdiv = document.querySelector(".random-background-color div");
let generateRBGC = document.getElementById("generate-random-BGC");
let colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
generateRBGC.onclick = () => {
  RBGCdiv.innerHTML = "";
  let randomBGC = [];
  for (let i = 0; i < 6; i++) {
    randomBGC.push(colorArray[Math.floor(Math.random() * colorArray.length)]);
  }
  RBGCdiv.append(`#${randomBGC.join("")}`);
  RBGCdiv.style.backgroundColor = `#${randomBGC.join("")}`;
};
// ************************************************************
// Start Letters Counter
let letter = document.querySelector(".letter-counter input");
let letterProg = document.querySelector(".letter-counter .progress");
let letterCounter = document.querySelector(".letter-counter .counter");
let maxLenght = letter.getAttribute("maxlength");
letterCounter.innerHTML = maxLenght;
letter.oninput = () => {
  letterCounter.innerHTML = maxLenght - letter.value.length;
  if (letterCounter.innerHTML == 0) {
    letterCounter.classList.add("zero");
  } else {
    letterCounter.classList.remove("zero");
  }
  letterProg.style.width = `${(letter.value.length / maxLenght) * 100}%`;
};
// End Letters Counter
// ************************************************************
// Start increase-numbers
let numbers = document.querySelectorAll(".increase-numbers .holder div");
let numbersSection = document.querySelector(".increase-numbers");
function StartCount(g) {
  let goal = g.dataset.goal;
  let counter = setInterval(() => {
    if (g.innerHTML == goal) {
      clearInterval(counter);
    } else {
      g.innerHTML++;
    }
  }, 2000 / goal);
}
// End increase numbers
// ************************************************************
// Start our Works
let ourWorksNav = document.querySelectorAll(
  ".our-works-container .our-works-nav div"
);
let ourWorks = document.querySelectorAll(".our-works-container img");
ourWorksNav.forEach((li) => {
  li.onclick = (e) => {
    //  remove class active from all links
    ourWorksNav.forEach((li) => {
      li.classList.remove("active");
    });
    // add class active to the selected link
    e.target.classList.add("active");
    // display none for all works except selected category
    ourWorks.forEach((li) => {
      li.style.display = "block";
      if (!li.classList.contains(e.target.dataset.cat)) {
        li.style.display = "none";
      }
    });
  };
});
// End our Works
// ************************************************************
// Page scroller
// scroll height : the height of the whole page
// client height : the height of the window (= window.innerHeight)
let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
// ************************************************************
// Scroll Top
let scrollUp = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  if (scrollY > 800) {
    scrollUp.style.right = "20px";
  } else {
    scrollUp.style.right = "-70px";
  }
});
scrollUp.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};
// ************************************************************
// window on scroll processes
window.onscroll = () => {
  // first process : increase numbers section
  // The height from the beginning of the page to the beginning of the skills section
  let skillsOffsetTop = skillsSection.offsetTop;
  // Skills height
  let skillsOuterHeight = skillsSection.offsetHeight;
  // window height
  let windowHeight = this.innerHeight;
  // window scroll Top (The scrolled height of the page)
  let windowScrollTop = this.scrollY;

  if (windowScrollTop >= skillsOffsetTop + skillsOuterHeight - windowHeight) {
    htmlLevel.style.width = htmlLevelSpan.innerHTML = "85%";
    cssLevel.style.width = cssLevelSpan.innerHTML = "70%";
    jsLevel.style.width = jsLevelSpan.innerHTML = "50%";
    reactLevel.style.width = reactLevelSpan.innerHTML = "40%";
  }

  // second process : increase numbers section
  if (
    window.scrollY >=
    numbersSection.offsetTop + numbersSection.offsetHeight - window.innerHeight
  ) {
    for (let i = 0; i < numbers.length; i++) {
      StartCount(numbers[i]);
    }
  }
  // third Process : page scroller
  // ScrollTop : The scrolled height of the page (= window.scrollY)
  let scrolledHeight = document.documentElement.scrollTop;
  scroller.style.width = `${(scrolledHeight / height) * 100}%`;
};

// ************************************************************

