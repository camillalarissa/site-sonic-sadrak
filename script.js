const slider = () => {
    const slider = document.querySelector(".container .slider");

    const slideButtons = document.querySelectorAll(".container .slide-button");

    const slideScroll = document.querySelector(".container .slider-scrollbar");

    const slideThumbs = slideScroll.querySelector(".scrollbar-thumb");

    const maxScrollLeft = slider.scrollWidth - slider.clientWidth

    /*SLIDE DE IMAGENS PELO BUTTON*/

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "button-left" ? -1 : 1;
            const scrollAmount = slider.clientWidth * direction;
            slider.scrollBy({ left: scrollAmount, behavior: "smooth" })
        })
    })
    const barraSlide = () => {
        slideButtons[0].style.display = slider.scrollLeft <= 0 ? "none" : "block"

        slideButtons[1].style.display = slider.scrollLeft >= maxScrollLeft ? "none" : "block"
    }

    /*CONFIGURAÇAO BARRA ROLAGEM*/
    const updateBarra = () => {
        const scrolBarra = slider.scrollLeft;
        const thumbBarra = (scrolBarra / maxScrollLeft) * (slideScroll.clientWidth - slideThumbs.offsetWidth)
        slideThumbs.style.left = `${thumbBarra}px`
    }
    slider.addEventListener("scroll", () => {
        barraSlide();
        updateBarra();
    })
}

window.addEventListener("load", slider);