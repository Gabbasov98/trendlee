function bestSlider() {
    var swiper = new Swiper('.best .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.best .swiper-button-next',
            prevEl: '.best .swiper-button-prev',
        },
        pagination: {
            el: '.best .swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
        },
    })
}

function saleSlider() {
    var swiper = new Swiper('.sale .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.sale .swiper-button-next',
            prevEl: '.sale .swiper-button-prev',
        },
        pagination: {
            el: '.sale .swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
        },
    })
}

function hitsSlider() {
    var swiper = new Swiper('.hits .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 44,
        navigation: {
            nextEl: '.hits .swiper-button-next',
            prevEl: '.hits .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 22
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 44
            },
        }
    })
}

function interesSlider() {
    var swiper = new Swiper('.interes .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
            nextEl: '.interes .swiper-button-next',
            prevEl: '.interes .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 11
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20
            },
        }
    })
}

function cardsSlider() {
    var swiper = new Swiper('.cards .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.cards .swiper-button-next',
            prevEl: '.cards .swiper-button-prev',
        },
    })
}


bestSlider()
saleSlider()
hitsSlider()
interesSlider()
cardsSlider()

function addZero(num){
    return (num > 9) ? num : '0' + num;
}
