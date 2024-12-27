// GSAP Animations for Smooth Entry
document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animation
    gsap.from(".hero-title", { 
        opacity: 0, 
        y: -50, 
        duration: 1 
    });
    gsap.from(".hero-subtitle", { 
        opacity: 0, 
        y: 50, 
        delay: 0.3, 
        duration: 1 
    });
    gsap.from(".nav a", { 
        opacity: 0, 
        y: 20, 
        stagger: 0.2, 
        delay: 0.5 
    });

    // Scroll Animations for Sections
    const sections = document.querySelectorAll(".content-container, section h2");

    sections.forEach((section) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });

    // Hover Effects for Logos
    const logos = document.querySelectorAll(".experience-image, .social-icons img");

    logos.forEach((logo) => {
        logo.addEventListener("mouseenter", () => {
            gsap.to(logo, { 
                scale: 1.1, 
                duration: 0.3 
            });
        });
        logo.addEventListener("mouseleave", () => {
            gsap.to(logo, { 
                scale: 1, 
                duration: 0.3 
            });
        });
    });
});
