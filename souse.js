document.addEventListener("DOMContentLoaded", function() {
    const slidermain = document.querySelector(".slide_main");
    const slider = document.querySelector(".slide_main .slider div");
    const imgs = document.querySelectorAll("#slide");
    const nextbtn = document.querySelector(".next");
    const prevbtn = document.querySelector(".prev");
    const dot = document.querySelectorAll(".dot_item");
    const slidewidth = imgs[0].offsetWidth;
    const len = imgs.length;
    //slider.style.width = (len * slidewidth) + "px";
    let index = 0;
    let position = 0;
    nextbtn.addEventListener("click", function() {
        slideposition(1);
    });
    prevbtn.addEventListener("click", function() {
        slideposition(-1);
    });
    [...dot].forEach(item => item.addEventListener("click", function(d) {
        [...dot].forEach(del => del.classList.remove("active"));
        d.target.classList.add("active");
        const slideindex = parseInt(d.target.dataset.index);
        index = slideindex;
        position = -1 * index * slidewidth;
        slider.style = "transform: translateX( " + position + "px)";
    }));

    function slideposition(tmp) {
        if (tmp == 1) {
            if (index >= len - 1) {
                index = len - 1;
                return;
            }
            position = position - slidewidth;
            slider.style = "transform: translateX(" + position + "px)";
            index++;
        } else if (tmp == -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            position = position + slidewidth;
            slider.style = "transform: translateX(" + position + "px)";
            index--;
        }
        [...dot].forEach(del => del.classList.remove("active"));
        dot[index].classList.add("active");
    }


    const saleitem = document.querySelector(".sale_item");
    const saledot = document.querySelectorAll(".select_sale button");
    const saledotslide = document.querySelectorAll(".slider_sale> div");
    const saleslide = document.querySelector(".sale_item div");
    const s1 = document.querySelectorAll(".slide-sale .sale-slide");
    const s2 = document.querySelectorAll(".slide-sale-man .sale-slide");
    const s3 = document.querySelectorAll(".slide-sale-kid .sale-slide");

    [...saledot].forEach(item => item.addEventListener("click", function(g) {
        [...saledot].forEach(del => del.classList.remove("s_s"));
        g.target.classList.add("s_s");
    }));

    function fineslide(saledotselect) {
        if (saledotselect == 0) {
            return s1;
        } else if (saledotselect == 1) {
            return s2;
        } else if (saledotselect == 2) {
            return s3;
        }
    }
    saledot[0].addEventListener("click", function() {
        transaledot(0);
    });
    saledot[1].addEventListener("click", function() {
        transaledot(1);
    });
    saledot[2].addEventListener("click", function() {
        transaledot(2);
    });


    function transaledot(i) {
        if (i == 0) {
            saledotslide[0].style = "z-index :" + 1;
            saledotslide[1].style = "z-index :" + -1;
            saledotslide[2].style = "z-index :" + -2;
        } else if (i == 1) {
            saledotslide[0].style = "z-index :" + 0;
            saledotslide[1].style = "z-index :" + 1;
            saledotslide[2].style = "z-index :" + -2;
        } else if (i == 2) {
            saledotslide[2].style = "z-index :" + 1;
            saledotslide[0].style = "z-index :" + 0;
            saledotslide[1].style = "z-index :" + -1;
        }
    }
    const slidesaleimg = fineslide(0);
    const next = document.querySelector(".nextsale");
    const prev = document.querySelector(".prevsale");
    const widthsale = slidesaleimg[0].offsetWidth;
    const widthsl = saleitem.offsetWidth;
    const lensale = slidesaleimg.length;
    let f = widthsl / widthsale
    let t = f.toFixed(0);
    let temp = 0;
    let trans = 0;
    next.addEventListener("click", function() {
        transale(1);
    });
    prev.addEventListener("click", function() {
        transale(-1);
    });

    function transale(i) {
        if (i == 1) {
            if (temp >= lensale - t) {
                temp = lensale - t;
                return;
            }
            trans = trans - widthsale;
            saleslide.style = "transform: translateX(" + trans + "px)";
            temp++;
            console.log(temp);
        } else if (i == -1) {
            if (temp <= 0) {
                temp = 0;
                return;
            }
            trans = trans + widthsale;
            saleslide.style = "transform: translateX(" + trans + "px)";
            temp--;
        }
    }
});