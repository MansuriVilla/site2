export function Slider() {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoWidth: true,
            dots: false,
            navText: ["<img src='./assets/images/site_right_icon_fff.svg'>", "<img src='./assets/images/site_right_icon_fff.svg'>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 2
                }
            }
        })
    });
}
