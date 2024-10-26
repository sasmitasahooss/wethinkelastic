var tl = gsap.timeline();
tl.from('#hello h1 span', {
    opacity: 0,
    y: 100,
    stagger: 0.1
});
// Create a ScrollTrigger animation for the video box
gsap.to("#vdo", {
    scrollTrigger: {
        trigger: "#vdo",
        start: "top 95%",
        end: "bottom 95%",
        scrub: true,
        toggleActions: "play none none reverse"
    },
    scale: 1,
    width: "100%",
    height: "100vh",
    margin: 0,
    ease: "power1.inOut"
});

var path = "M 80 100 Q 600 100 2000 100"
var finalPath = "M 80 100 Q 600 100 2000 100"

var guitar = document.querySelector("#guitar")

guitar.addEventListener("mousemove", function(dets){
    console.log("hy")
   path = `M 80 100 Q ${dets.x} ${dets.y} 2000 100`
   gsap.to("svg path",{
    attr:{d:path},
    duration:0.5,
    ease:"power3.out"
   })
})
  
guitar.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"

    })
})

gsap.to("#expertise h1",{
    transform:"translateX(-55%)",
    scrollTrigger:{
        trigger:"#expertise",
        scroller:"body",
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})
document.querySelector("#main").addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
   })

})

function breakTheText(){
    var h1 = document.querySelector("#wave h1"); // Get the h1 element
    var h1Text = h1.textContent; // Get the text content of h1
    var splittedText = h1Text.split("");
    var halfValue = splittedText.length/2
    var newh1 = ""
    splittedText.forEach(function(elem, id){
        if(id<halfValue){
            newh1+= `<span class="a">${elem}</span>`
        }
        else{
            newh1+=`<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = newh1
    
    
}

breakTheText()

gsap.from("h1 .a",{
    y:50,
    delay:1,
    duration:0.6,
    opacity:0,
    stagger:0.2
})
gsap.from("h1 .b",{
    y:50,
    delay:1,
    duration:0.6,
    opacity:0,
    stagger:-0.2
})
window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        console.log("working")
        gsap.to("#slider .box",{
            transform: 'translateX(-200%)',
            duration:4,
            repeat:-1,
            ease:"none",
            scrollTrigger:{
                trigger:"#slider",
                start:"top 50%",
                end:"bottom 0%"
            }
           
        })
        gsap.to(".box img",
            {
                rotate:180
            }
        )
    }
    else{
        gsap.to("#slider .box",{
            transform: 'translateX(0%)',
            duration:4,
            repeat:-1,
            ease:"none"
        })
        gsap.to(".box img",
            {
                rotate:0
            }
        )
    }
})