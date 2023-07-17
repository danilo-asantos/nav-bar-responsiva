class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList =  document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log
        ("Olá 🐻‍❄️"));
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
MobileNavbar.init();