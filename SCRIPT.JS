function cursorEffect(){

    let page1Content = document.querySelector("#page1-content");
    let cursorMove = document.querySelector("#cursor");
    
    
    page1Content.addEventListener("mousemove",function(dets){
        // cursorMove.style.left = dets.x+"px";
        // cursorMove.style.top = dets.y+"px";
    
        gsap.to(cursorMove,{
            x:dets.x,
            y:dets.y
        })
    })
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursorMove,{
            scale:1,
            opacity:1
        })
        
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursorMove,{
            scale:0,
            opacity:0
        })
    })
}
cursorEffect();


function sliderAni(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
       autoplay:{
        delay: 2000,
        disableOnInteraction: true,
       },
      });
}

sliderAni();

var tl = gsap.timeline()

tl.from(".loader h3",{
    x:100,
    opacity:0,
    duration:1,
    stagger: 0.5
})

tl.to(".loader h3",{
    opacity: 0,
    x:-40,
    duration:1,
    stagger: 0.2
})

tl.to(".loader",{
    opacity: 0
})
tl.to(".loader",{
    display:"none"
})

tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})