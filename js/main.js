(function (){
    // new fullpage('#fullpage', {
    //     //options here
    //     autoScrolling:true,
    //     scrollHorizontally: true
    // });
    function bigHandler() {
        const element = document.querySelector(".scene");
    }

    function sec3Handler() {
        const sec3 = document.querySelector("#main3");
        const header = document.querySelector("#header");
        const m_fix = document.querySelector(".m_fix");
        const top = document.querySelector(".top")
        let sec3tt = sec3.offsetTop;
        let ct 
        
        window.addEventListener("scroll",function() {
            ct = this.scrollY;
            if(ct >= sec3tt){
                header.classList.add("on");
                m_fix.classList.add("on");
                
            }else {
                header.classList.remove("on");
                m_fix.classList.remove("on");
            }
        });

        top.addEventListener("click",function(e) {
            e.preventDefault();
        })
    }
    sec3Handler();
})()