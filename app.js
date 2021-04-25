const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

/* ===============
  HOMEPAGE
================= */

// This adds the animation to the <span class="text"> with a duration of 2 second and staggers 0.25
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });

// The last argument defines, in seconds, when to start.
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

// fromTo defines the beginning and the ending directly in Javascript rather than the starting value within the CSS
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.7");

tl.fromTo(".icon", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.15 }, "-=0.5");


/* ===============
  ABOUT PAGE
================= */
tl.to(".intro.about", { y: "-100%", duration: 1 });
