const other = document.querySelector(".other");
const extraNavbar = document.querySelector(".extra-navbar");
const links = document.querySelectorAll(".clicked");

other.addEventListener("click", () => {
  other.classList.toggle("active");
  if (other.classList.contains("active")) {
    show();
  } else {
    hide();
  }
});
window.addEventListener("keyup", (e) => {
  if (e.code.toUpperCase() === "Escape".toUpperCase()) {
    other.classList.remove("active");
  }
});
links.forEach((ele) => {
  ele.addEventListener("click", () => {
    hide();
  });
});
function show() {
  extraNavbar.style.cssText = "height: fit-content; padding: 22px 12px";
}
function hide() {
  other.classList.remove("active");
  extraNavbar.style.cssText = "height: 0; padding: 0px 12px";
}

// #############################################
const readButton = document.querySelectorAll(".more button");
const buttonArrow = document.querySelectorAll(".more a i");
readButton.forEach((ele) => {
  ele.addEventListener("mouseover", () => {
    ele.parentElement.children[1].children[0].style.right = "0";
  });
  ele.addEventListener("mouseout", (ele2) => {
    ele.parentElement.children[1].children[0].style.right = "100%";
  });
});

// #############################################
const MySkillsSection = document.querySelector("#my-skills");
const skillsNumber = document.querySelectorAll(
  ".my-skills .container .skills-progress .progress-parent p"
);
const progress = document.querySelectorAll(".progress-line");
console.log(progress);
let started = false;

// #############################################
const myStatsSection = document.querySelector("#my-stats");
const statsNumber = document.querySelectorAll(
  ".my-stats .container .card span"
);
let statStarted = false;
let statDownStarted = false;

window.addEventListener("scroll", () => {
  skillsDynamic(MySkillsSection);
  statsDynamic(myStatsSection);
});
function skillsDynamic(section) {
  if (window.scrollY >= section.offsetTop - 500) {
    progress.forEach((ele) => {
      ele.style.width = ele.dataset.progress;
    });
    skillsNumber.forEach((ele) => {
      countUp(ele);
    });
  } else {
    progress.forEach((ele) => {
      ele.style.width = 0;
    });
    skillsNumber.forEach((ele) => {
      ele.textContent = "0%";
      started = false;
    });
  }
}
function countUp(ele) {
  let i = 0;
  if (started == false) {
    const count = setInterval(() => {
      ele.textContent = `${++i}%`;
      if (ele.textContent == `${ele.dataset.progress}%`) {
        clearInterval(count);
        started = true;
      }
    }, 1000 / ele.dataset.progress);
  }
}

function statsDynamic(section) {
  if (window.scrollY >= section.offsetTop - 400) {
    if (!statStarted) {
      statsNumber.forEach((ele) => {
        let i = 0;
        const statCount = setInterval(() => {
          ele.textContent = i++;
          if (ele.textContent == ele.dataset.progress) {
            clearInterval(statCount);
          }
        }, 1850 / ele.dataset.progress);
      });
      statStarted = true;
    }
  }
}
