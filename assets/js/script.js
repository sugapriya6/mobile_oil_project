// FAQ Toggle
const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.classList.toggle("hidden");
    });
});


// Dark Mode

const themeBtn = document.getElementById("themeToggle");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
// Mobile Menu 

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});
//Animated Statistics

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;
            const increment = Math.ceil(target / 100);

            const updateCounter = () => {

                count += increment;

                if (count >= target) {
                    counter.innerText = target + "+";
                } else {
                    counter.innerText = count;
                    requestAnimationFrame(updateCounter);
                }

            };

            updateCounter();

            observer.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
//Scroll Animation 

const fadeElements = document.querySelectorAll(".fade");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

fadeElements.forEach(element=>{
    fadeObserver.observe(element);
});

function toggleRTL() {
    const html = document.getElementById("htmlRoot");

    if (html.getAttribute("dir") === "ltr") {
        html.setAttribute("dir", "rtl");
        localStorage.setItem("rtl", "true");
    } else {
        html.setAttribute("dir", "ltr");
        localStorage.setItem("rtl", "false");
    }
}

// Apply saved RTL on load
window.addEventListener("load", () => {
    const rtl = localStorage.getItem("rtl");

    if (rtl === "true") {
        document.documentElement.setAttribute("dir", "rtl");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
    }
});
