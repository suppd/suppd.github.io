
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header.hero nav a");

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 500; //adjust offset top if bugging 
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});

//Project Page Gallery functionality
const galleryItems = document.querySelectorAll(".gallery-item");
const prevBtn = document.querySelector(".gallery-btn.prev");
const nextBtn = document.querySelector(".gallery-btn.next");

let currentIndex = 0;

function updateGallery(index) {
    galleryItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateGallery(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex + 1) % galleryItems.length;
    updateGallery(currentIndex);
});
