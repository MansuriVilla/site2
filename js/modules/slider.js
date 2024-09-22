export function Slider() {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoWidth: false,
            dots: false,
            navText: ["<img src='./assets/images/site_right_icon_fff.svg'>", "<img src='./assets/images/site_right_icon_fff.svg'>"],
            responsive: {
                0: {
                    items: 1.2
                },
                768: {
                    items: 1.5
                },
                991: {
                    items: 2.5
                },
                1920: {
                    items: 3.5
                }
            }
        })
    });
    $(document).ready(function () {
        $('.client_slider').owlCarousel({
            loop: true,
            margin: 300,
            nav: true,

            dots: false,
            navText: ["<img src='./assets/images/site_right_icon_fff.svg'>", "<img src='./assets/images/site_right_icon_fff.svg'>"],
            responsive: {
                991: {
                    items: 2.5
                },
                1000: {
                    items: 2.3
                }
            }
        })
    });
}
