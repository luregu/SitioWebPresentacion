const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");


function toggleMenu() {
    console.log('click', this)
    menu.classList.toggle("menu_opened");

}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll(".menu a[href^='#']");

const observer = new IntersectionObserver((entries) => {
    console.log("entries", entries);
    entries.forEach(entry => {

        const id = entry.target.getAttribute("id");
        console.log("id ", id)
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
        console.log("menuLink", menuLink);

        if (entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected")
            menuLink.classList.add("selected");
        }
    })
}, { rootMargin: "-30% 0px -70% 0px" })


menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    })

    const hash = menuLink.getAttribute("href");
    console.log("hash", hash);
    const target = document.querySelector(hash);
    console.log("target", target);

    if (target) {
        observer.observe(target);
    }

});