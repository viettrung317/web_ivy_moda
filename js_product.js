document.addEventListener("DOMContentLoaded", function() {
    const scr = document.querySelector(".select_menu");
    const scrheight = scr.offsetHeight;
    window.addEventListener("scroll", function() {
        x = window.pageYOffset;
        const hx = x - scrheight;
        if (x >= 1900) {
            scr.style = "margin-top :" + -hx + "px";
        } else {
            scr.style = "position:fixed";
        }
    })
    const clk = document.querySelectorAll(".select_menu1>div button");
    const clks = document.querySelectorAll(".select_menu1 >div div");
    let index = 0;
    clk[0].addEventListener("click", function() {
        if (index == 0) {
            clks[0].style = "display:block";
        } else if (index == 1) {
            clks[0].style = "display:none";
        }
        index++;
        if (index == 2) {
            index = 0
        }
    })
    let index1 = 0;
    clk[1].addEventListener("click", function() {
        if (index1 == 0) {
            clks[1].style = "display:block";
        } else if (index1 == 1) {
            clks[1].style = "display:none";
        }
        index1++;
        if (index1 == 2) {
            index1 = 0
        }
    })
    let index2 = 0;
    clk[2].addEventListener("click", function() {
        if (index2 == 0) {
            clks[2].style = "display:block";
        } else if (index2 == 1) {
            clks[2].style = "display:none";
        }
        index2++;
        if (index2 == 2) {
            index2 = 0
        }
    })
    let index3 = 0;
    clk[3].addEventListener("click", function() {
        if (index3 == 0) {
            clks[3].style = "display:block";
        } else if (index3 == 1) {
            clks[3].style = "display:none";
        }
        index3++;
        if (index3 == 2) {
            index3 = 0
        }
    })
    let index4 = 0;
    clk[4].addEventListener("click", function() {
        if (index4 == 0) {
            clks[4].style = "display:block";
        } else if (index4 == 1) {
            clks[4].style = "display:none";
        }
        index4++;
        if (index4 == 2) {
            index4 = 0
        }
    })


    const sort = document.querySelector(".sort");
    const sortlist = document.querySelector(".list_sort");
    const updown = document.querySelector(".sort svg");
    let indexsort = 0;
    sort.addEventListener("click", function() {
        if (indexsort == 0) {
            sortlist.style = "visibility: visible;margin-top: 50px;opacity:1;";
            updown.style = "transform: rotate(180deg)";
        } else if (indexsort == 1) {
            sortlist.style = "visibility: hidden;margin-top: 0px;opacity:0;";
            updown.style = "transform: rotate(360deg)";
        }
        indexsort++;
        if (indexsort == 2) {
            indexsort = 0;
        }
    })
    let indexpage = Number(document.getElementById("dotpage").innerText);
    console.log(indexpage);
    const prevpage = document.querySelector(".prev_page");
    const nextpage = document.querySelector(".next_page");
    prevpage.addEventListener("click", function() {
        selectpage(-1);
    });
    nextpage.addEventListener("click", function() {
        selectpage(1);
    });

    function selectpage(tmp) {
        if (tmp == -1) {
            if (indexpage == 3) {
                prevpage.href = "./product1a.html";
            } else if (indexpage == 2) {
                prevpage.href = "./product1.html";
            } else if (indexpage == 3) {
                prevpage.href = "./product1.html";
            }
        } else if (tmp == 1) {
            if (indexpage == 1) {
                nextpage.href = "./product1a.html";
            } else if (indexpage == 2) {
                nextpage.href = "./product1b.html";
            } else if (indexpage == 1) {
                nextpage.href = "./product1b.html";
            }
        }
    }

});