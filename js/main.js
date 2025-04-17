/**
 * Crops For the Future UK - Main JavaScript
 * Handles interactivity for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (menuToggle && menuToggle.classList.contains('active')) {
                    menuToggle.click();
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Research slider functionality
    const researchSlider = document.querySelector('.research-slider');
    const researchSlides = document.querySelectorAll('.research-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (researchSlider && researchSlides.length > 0 && prevBtn && nextBtn) {
        let currentSlide = 0;
        
        // Hide all slides except the first one
        researchSlides.forEach((slide, index) => {
            if (index !== 0) {
                slide.style.display = 'none';
            }
        });
        
        // Function to show a specific slide
        const showSlide = (index) => {
            // Hide all slides
            researchSlides.forEach(slide => {
                slide.style.display = 'none';
            });
            
            // Show the current slide
            researchSlides[index].style.display = 'grid';
            
            // Animate the slide
            researchSlides[index].style.opacity = '0';
            setTimeout(() => {
                researchSlides[index].style.opacity = '1';
            }, 10);
        };
        
        // Event listener for prev button
        prevBtn.addEventListener('click', () => {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = researchSlides.length - 1;
            }
            showSlide(currentSlide);
        });
        
        // Event listener for next button
        nextBtn.addEventListener('click', () => {
            currentSlide++;
            if (currentSlide >= researchSlides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        });
        
        // Auto slide every 5 seconds
        let autoSlideInterval = setInterval(() => {
            nextBtn.click();
        }, 5000);
        
        // Pause auto slide on hover
        researchSlider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        // Resume auto slide on mouse leave
        researchSlider.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                nextBtn.click();
            }, 5000);
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const consentCheckbox = this.querySelector('input[type="checkbox"]');
            
            if (emailInput && consentCheckbox && emailInput.value && consentCheckbox.checked) {
                // In a real implementation, this would send the data to a server
                // For now, just show a success message
                this.innerHTML = '<p class="success-message">Thank you for subscribing to our newsletter!</p>';
            }
        });
    }

    // Basic animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .team-card, .update-card, .research-slide, .about-image, .hero-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .team-card, .update-card, .research-slide, .about-image, .hero-content {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.animate, .team-card.animate, .update-card.animate, .research-slide.animate, .about-image.animate, .hero-content.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

// Simple custom map functionality for the Global Impact section
// In a real implementation, this would use a proper mapping library like Leaflet or Google Maps
document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('impact-map');
    
    // Only initialize if the map element exists
    if (mapElement) {
        // This is a placeholder for a real map implementation
        // In reality, you would initialize a map library here
        console.log('Map element found, would initialize map here');
        
        // For a real implementation, you would add markers for each location
        const locations = [
            { name: 'Cambridge, UK', lat: 52.2053, lng: 0.1218 },
            { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
            { name: 'China', lat: 35.8617, lng: 104.1954 }
            // Add more locations as needed
        ];
        
        console.log('Would add markers for these locations:', locations);
    }
}); 