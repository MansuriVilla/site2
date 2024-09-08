export function mouseOver() {
    document.querySelectorAll('.diraction_aware_hover').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            let rect = btn.getBoundingClientRect();
            let mx = e.clientX - rect.left;
            let my = e.clientY - rect.top;

            btn.style.setProperty('--x', mx + 'px');
            btn.style.setProperty('--y', my + 'px');
        });
    });
}
