function nav() {
    const mobileNav = document.getElementById("res_nav");
    const body = document.body;
    const toggleNavBtn = document.getElementById("toggleNavBtn");
    const cross = document.getElementById("cross");

    if (mobileNav) {
        const currentDisplay = window.getComputedStyle(mobileNav).display;
        if (currentDisplay === "none") {
            mobileNav.style.display = "flex";
            body.style.overflowY = "hidden";
            toggleNavBtn.style.display = "none";
            cross.style.display = "flex";
        } else {
            mobileNav.style.display = "none";
            body.style.overflowY = "auto";
            toggleNavBtn.style.display = "flex";
            cross.style.display = "none";
        }
    }
}

document.querySelectorAll('#res_nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        if (window.innerWidth <= 640) {
            nav();
        }
    });
});