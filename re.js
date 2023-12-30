function locoscroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoscroll()

function loaderAnimation(){
  var tl = gsap.timeline()
tl.from(".loader h3",{
x : 40,
opacity: 0,
duration:1,
stagger:0.1
})
tl.to(".loader h3",{
opacity:0,
x:-10,
duration:1,
stagger:0.1
})
tl.to(".loader",{
  opacity:0,
})
tl.from(".pagecontent h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5
})
tl.to(".loader",{
  display:"none"
})
}
loaderAnimation()


function CursorEffect() {
  var crsr = document.querySelector(".cursor")

  var page = document.querySelector(".pagecontent")

  page.addEventListener("mousemove", function (dets) {
    // crsr.style.left = dets.x+"px"
    // crsr.style.top = dets.y+"px"
    gsap.to(crsr, {
      x: dets.x,
      y: dets.y
    })
  })
  page.addEventListener("mouseenter", function () {
    gsap.to(crsr, {
      scale: 1,
      opacity: 1
    })
  })
  page.addEventListener("mouseleave", function () {
    gsap.to(crsr, {
      scale: 0,
      opacity: 0
    })
  })
}
CursorEffect()

function CursorEffects() {
  var crsrs = document.querySelector(".cursors")

  var pages = document.querySelector(".page4")

  pages.addEventListener("mousemove", function (dets) {
    // crsr.style.left = dets.x+"px"
    // crsr.style.top = dets.y+"px"
    gsap.to(crsrs, {
      x: dets.x,
      y: dets.y,
    })
  })
  pages.addEventListener("mouseenter", function () {
    gsap.to(crsrs, {
      scale: 1,
      opacity: 1
    })
  })
  pages.addEventListener("mouseleave", function () {
    gsap.to(crsrs, {
      scale: 0,
      opacity: 0
    })
  })
}
CursorEffects()

function page2Animation(){
  gsap.from(".elem h1",{
    y:120,
    stagger:0.2,
    duration:1.5,
    scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      start:"top 47%",
      end:"top 46%",
      scrub:2
    }
    })
}
page2Animation()


function page3Animation(){
  gsap.from(".page3-top h1",{
    y:120,
    stagger:0.2,
    duration:1.5,
    scrollTrigger:{
      trigger:".page3",
      scroller:".main",
      start:"top 60%",
      end:"top 61%",
      scrub:2
    }
  
  })
}
page3Animation()

function pageAnimation(){
  gsap.from(".elems h1",{
    y:120,
    stagger:0.2,
    duration:1.5,
    scrollTrigger:{
      trigger:".page",
      scroller:".main",
      start:"top 70%",
      end:"top 71%",
      scrub:2
    }
  
  })
}
pageAnimation()

function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay : 0,
      disableOnInteraction:false,
    },
    speed:20000, 
  });
  
}
swiperAnimation()


  gsap.from(".page7-bottom ",{
    y:-420,
    opacity:0,
    stagger:0.1,
    duration:3,
    scrollTrigger:{
      trigger:".page7-bottom",
      scroller:".main",
      scrub:2
    }
    });
    
  gsap.from(".page7-bottom h1 span ",{
    y:-420,
    opacity:0,
    stagger:.5,
    duration:3,
    scrollTrigger:{
      trigger:".page7-bottom",
      scroller:".main",
      start:"20% ",
      end:"50%",
      scrub:7
    }
    });
    





