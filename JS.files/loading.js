const overLay = document.querySelector(".overLay");
const h = document.querySelector("#h1");
const hand = document.querySelector("#handle");
const navbar = document.querySelector("#navC");
const h2 = document.querySelector("#h2");
const mainheader = document.querySelector(".maindHeader");
const firstHeader = document.querySelector("#firstHeader");
let run = JSON.parse(sessionStorage.getItem("run"));
hand.addEventListener("click", load);
if (run === null) {
  run = true;
}

function load() {
  if (run === true) {
    setTimeout(() => {
      hand.style.transform = "rotate(90deg)";
      hand.style.opacity = "0";
      hand.style.boxShadow = "5px 5px 2px 2px";
    }, 1200);
    setTimeout(() => {
      overLay.style.width = "0%";
      overLay.style.height = "0%";
      overLay.style.opacity = "0";
    }, 1700);
    setTimeout(() => {
      navbar.style.opacity = "1";
    }, 2700);
    setTimeout(() => {
      h.style.opacity = "0";
    }, 1200);
    setTimeout(() => {
      h3.style.display = "initial";
      firstHeader.style.display = "grid";
      mainheader.style.display = "inline";
      let tl = gsap.timeline();

      tl.to("#firstHeader", {
        delay: 0.5,
        opacity: 1,
        y: -20,
        duration: 0.5,
      })
        .to("#hello", {
          delay: 0.9,
          y: -20,
          opacity: 1,
          duration: 0.75,
        })
        .to("#pInfo", {
          delay: 0.7,
          y: -20,
          opacity: 1,
          duration: 0.7,
        })
        .to("#infoOverlay", {
          delay: 0.5,
          y: -5,
          opacity: 1,
          duration: 0.4,
        })
        .to("#infOverlay2", {
          delay: 0.2,
          y: -5,
          opacity: 1,
          duration: 0.4,
        })
        .to("#infoOverlay3", {
          delay: 0.2,
          y: -5,
          opacity: 1,
          duration: 0.4,
        })
        .to("#footer", {
          delay: 0.5,
          y: -10,
          display: "block",
          duration: 0.75,
        })
        .to("#verticalLine3", {
          delay: 0.5,
          y: "0%",
          duration: 2,
          backgroundColor: "#2622E6",
        })
        .to("#verticalLine2", {
          delay: 0.1,
          y: "0%",
          duration: 2,
          backgroundColor: "#E8EA3B",
        })
        .to("#verticalLine", {
          delay: 0.1,
          y: "0%",
          duration: 2,
          backgroundColor: "#b9f2ff",
        });
    }, 3100);
    run = false;
    JSON.stringify(sessionStorage.setItem("run", JSON.stringify(run)));
  }
}

if (run === false) {
  hand.style.display = "none";
  h.style.display = "none";
  overLay.style.display = "none";
  navbar.style.opacity = "1";
  h3.style.display = "initial";
  firstHeader.style.display = "grid";
  mainheader.style.display = "inline";
  let tl = gsap.timeline();

  tl.to("#firstHeader", {
    delay: 0.5,
    opacity: 1,
    y: -20,
    duration: 0.5,
  })
    .to("#hello", {
      delay: 0.9,
      y: -20,
      opacity: 1,
      duration: 0.75,
    })
    .to("#pInfo", {
      delay: 0.7,
      y: -20,
      opacity: 1,
      duration: 0.7,
    })
    .to("#infoOverlay", {
      delay: 0.5,
      y: -5,
      opacity: 1,
      duration: 0.4,
    })
    .to("#infOverlay2", {
      delay: 0.2,
      y: -5,
      opacity: 1,
      duration: 0.4,
    })
    .to("#infoOverlay3", {
      delay: 0.2,
      y: -5,
      opacity: 1,
      duration: 0.4,
    })
    .to("#footer", {
      delay: 0.5,
      y: -10,
      display: "block",
      duration: 0.75,
    })
    .to("#verticalLine3", {
      delay: 0.5,
      y: "0%",
      duration: 1.2,
      backgroundColor: "#2622E6",
    })
    .to("#verticalLine2", {
      delay: 0.1,
      y: "0%",
      duration: 1.2,
      backgroundColor: "#E8EA3B",
    })
    .to("#verticalLine", {
      delay: 0.1,
      y: "0%",
      duration: 1.2,
      backgroundColor: "#b9f2ff",
    });
}
