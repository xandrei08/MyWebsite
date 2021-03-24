let counterHead = document.querySelector(".counterHeader");
let counter = 0;
let h2 = document.querySelector("#h2");

let tl = gsap.timeline();

tl.to(".counterHeader", {
  opacity: 1,
  duration: 0.75,
  onComplete: () => {
    startCounter();
  },
})
  .to(".counterHeader", {
    delay: 3.5, // added to prevent disappearing early
    y: 20,
    opacity: 0,
    duration: 0.75,
  })
  .to("#h2", {
    opacity: 1,
    y: "0%",
    duration: 0.75,
  })
  .to("#pFirst", {
    delay: 0.5,
    opacity: 1,
    y: -10,
    duration: 0.75,
  })
  .to("#pSecond", {
    delay: 6,
    opacity: 1,
    y: -20,
    duration: 0.75,
  })
  .to(".rightWrapper", {
    delay: 8,
    y: "0%",
    duration: 0.75,
  })
  .to(".subtitle", {
    delay: 0.5,
    opacity: 1,
    x: -30,
    duration: 0.75,
  })
  .to(".skill", {
    delay: 0.5,
    opacity: 1,
    duration: 0.75,
  })
  .to(".desc", {
    delay: 0.85,
    opacity: 1,
    y: -20,
    duration: 0.75,
  })
  .to(".skillsCC", {
    delay: 4.2,
    opacity: 1,
    duration: 0.75,
  })
  .to(".box1", {
    delay: 0.6,
    opacity: 1,
    duration: 0.4,
  })
  .to(".box2", {
    delay: 0.6,
    opacity: 1,
    duration: 0.4,
  })
  .to(".box3", {
    delay: 0.6,
    opacity: 1,
    duration: 0.4,
  })
  .to(".box4", {
    delay: 0.6,
    opacity: 1,
    duration: 0.4,
  })
  .to(".box5", {
    delay: 0.6,
    opacity: 1,
    duration: 0.4,
  });

function startCounter() {
  setTimeout(() => {
    setInterval(() => {
      if (counter < 100) {
        counter++;
        counterHead.innerHTML = `${counter}%`;
      }
    }, 20);
  }, 500);
}
