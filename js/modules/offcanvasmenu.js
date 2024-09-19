export function offcanvsMenu() {

    
    const menuToggle = document.querySelector('.menu-toggle');
    const offCanvasMenu = document.querySelector('.off-canvas-menu');
    const menu = document.querySelector('.menu');
    const ctaMain = document.querySelector('.cta_main');
    const menuClose = document.querySelector('.menu-close');


    function moveMenuAndCtaToOffCanvas() {
        if (window.innerWidth <= 768) {
            if (!offCanvasMenu.contains(menu)) {
                offCanvasMenu.appendChild(menu);
            }
            if (!offCanvasMenu.contains(ctaMain)) {
                offCanvasMenu.appendChild(ctaMain);
            }
        } else {
            const headerNavigationsLinks = document.querySelector('.header_navigations_links');
            if (!headerNavigationsLinks.contains(menu)) {
                headerNavigationsLinks.appendChild(menu);
            }
            if (!headerNavigationsLinks.contains(ctaMain)) {
                headerNavigationsLinks.appendChild(ctaMain);
            }
        }
    }

    // Initialize the menu and CTA position
    moveMenuAndCtaToOffCanvas();

    // Update the menu and CTA position on resize
    window.addEventListener('resize', moveMenuAndCtaToOffCanvas);

    // Toggle the off-canvas menu
    menuToggle.addEventListener('click', () => {
        offCanvasMenu.classList.add('active');
    });

    // Close the off-canvas menu
    menuClose.addEventListener('click', () => {
        offCanvasMenu.classList.remove('active');
    });

    // Optionally close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!offCanvasMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            offCanvasMenu.classList.remove('active');
        }
    });




}
