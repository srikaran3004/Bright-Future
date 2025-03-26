// Script File

// Preload images function
function preloadImages() {
    const images = [
        'images/home/logo.png',
        'images/home/student.png',
        'images/home/pattern.png',
        'images/brand-logos/matoontapa.png',
        'images/brand-logos/khostan.png',
        'images/brand-logos/etimadya.png',
        'images/brand-logos/torghar.png',
        'images/brand-logos/nadershakot.png',
        'images/brand-logos/almarah.png'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Execute preloading on page load
document.addEventListener('DOMContentLoaded', preloadImages);

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Theme Toggle Functionality
const lightModeToggle = document.getElementById('light-mode-toggle');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or system preference
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    
    // Check if system prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Apply theme with smooth transition
function applyTheme(theme) {
    // Add transition class
    htmlElement.classList.add('theme-transition');
    
    // Apply theme after a small delay to ensure transition class is applied
    setTimeout(() => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
        } else {
            htmlElement.classList.remove('dark-mode');
        }
        
        // Remove transition class after theme is applied
        setTimeout(() => {
            htmlElement.classList.remove('theme-transition');
        }, 300);
    }, 10);
}

// Initial theme setup
const preferredTheme = getPreferredTheme();
applyTheme(preferredTheme);

// Theme toggle event listeners for direct icon clicks
if (lightModeToggle) {
    lightModeToggle.addEventListener('click', () => {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    });
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    });
}

// Fix image loading
document.addEventListener('DOMContentLoaded', function() {
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
        // Skip if already loaded
        if (img.complete) return;
        
        // Set initial state for animation
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Add load event handler
        img.addEventListener('load', function() {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        });
        
        // Add error handler
        img.addEventListener('error', function() {
            console.error('Failed to load image:', img.src);
            // Optionally add a placeholder or fallback
            // img.src = 'path/to/placeholder.png';
        });
    });
    
    // Add animation classes
    const services = document.querySelectorAll('.service-box');
    services.forEach((service, index) => {
        service.classList.add('slide-in-bottom');
        service.style.animationDelay = `${0.2 * index}s`;
    });
    
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.animationDelay = `${0.1 * index}s`;
    });
    
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach((item, index) => {
        item.classList.add('slide-in-bottom');
        item.style.animationDelay = `${0.2 * index}s`;
    });
});

// Animation on scroll using Intersection Observer
function setupIntersectionObserver() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom, .scale-in').forEach(el => {
            el.classList.add('animate');
        });
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});
    
    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom, .scale-in').forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
window.addEventListener('DOMContentLoaded', setupIntersectionObserver);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Owl Carousel
$(document).ready(function(){
    $('.partners-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });

    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });
    
    // Add pulsing animation to the logo
    $('.main-navbar .logo img').addClass('pulse');
});

// Scroll to top functionality
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Function to toggle button visibility
function toggleScrollToTopBtn() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
}

// Function to scroll to top
function scrollToTop() {
    // Add clicked class for animation
    scrollToTopBtn.classList.add('clicked');
    
    // Remove the class after animation completes
    setTimeout(() => {
        scrollToTopBtn.classList.remove('clicked');
    }, 800);
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add event listeners
if (scrollToTopBtn) {
    window.addEventListener('scroll', toggleScrollToTopBtn);
    scrollToTopBtn.addEventListener('click', scrollToTop);
}

// Execute on page load to set initial state
window.addEventListener('load', toggleScrollToTopBtn);

// Add keyboard shortcut for scrolling to top (Home key)
document.addEventListener('keydown', function(e) {
    // Check if Home key is pressed (key code 36)
    if (e.key === 'Home') {
        scrollToTop();
    }
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar i');
    const courseCards = document.querySelectorAll('.course-card');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Remove any existing highlight class
        courseCards.forEach(card => {
            card.classList.remove('highlight');
        });

        let foundMatch = false;
        let firstMatch = null;

        courseCards.forEach(card => {
            const courseTitle = card.querySelector('.course-title').textContent.toLowerCase();
            const courseCategory = card.querySelector('.subject h3').textContent.toLowerCase();
            
            if (courseTitle.includes(searchTerm) || courseCategory.includes(searchTerm)) {
                card.classList.add('highlight');
                foundMatch = true;
                if (!firstMatch) {
                    firstMatch = card;
                }
            }
        });

        // If a match is found, scroll to the courses section
        if (foundMatch && firstMatch) {
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        } else if (searchTerm !== '') {
            alert('No courses found matching your search.');
        }
    }

    // Add event listeners for search
    searchIcon.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}); 