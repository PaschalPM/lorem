let hamburger = document.querySelector(".hamburger")
hamburger.innerHTML = HamburgerSVG()

let drawer = document.querySelector(".drawer")
let drawerToggleFlag = false

hamburger.addEventListener("click",()=>{
    drawerToggleFlag = !drawerToggleFlag

    if(drawerToggleFlag){
        hamburger.innerHTML = ExitSVG()
        drawer.style.borderBottom = "1px ridge pink"
        drawer.style.maxHeight = "160px"
    }
    else{
        hamburger.innerHTML = HamburgerSVG()
        drawer.style.borderBottom = "none"
        drawer.style.maxHeight = "0px"
    }
})

