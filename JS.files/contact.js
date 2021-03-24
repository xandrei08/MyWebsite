let tl = gsap.timeline();

tl.to(".interview", {
  opacity: 1,
  duration: 0.75,
})
  .to("#card1", {
    opacity: 1,
    duration: 0.75,
  })
  .to("#card2", {
    opacity: 1,
    duration: 0.75,
  })
  .to("#platforms", {
    delay: 0.5,
    opacity: 1,
    duration: 0.75,
    y: -20,
  });
