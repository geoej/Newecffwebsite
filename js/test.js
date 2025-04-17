/**
 * Simple test script for the Crops For the Future UK website
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Running website tests...');
    
    // Test 1: Check if all required DOM elements exist
    const elementsToCheck = [
        { name: 'Header', selector: '.site-header' },
        { name: 'Navigation', selector: '.main-nav' },
        { name: 'Hero Section', selector: '.hero' },
        { name: 'Features Grid', selector: '.feature-grid' },
        { name: 'About Preview', selector: '.about-preview' },
        { name: 'Research Highlights', selector: '.research-highlights' },
        { name: 'Team Preview', selector: '.team-preview' },
        { name: 'Updates Grid', selector: '.updates-grid' },
        { name: 'Global Impact', selector: '.global-impact' },
        { name: 'Newsletter Form', selector: '.newsletter-form' },
        { name: 'Footer', selector: '.site-footer' }
    ];
    
    console.log('Test 1: Checking required DOM elements...');
    let test1Passed = true;
    
    elementsToCheck.forEach(element => {
        const el = document.querySelector(element.selector);
        if (!el) {
            console.error(`Missing required element: ${element.name} (${element.selector})`);
            test1Passed = false;
        } else {
            console.log(`✓ Found ${element.name}`);
        }
    });
    
    if (test1Passed) {
        console.log('✓ Test 1 Passed: All required DOM elements found');
    } else {
        console.error('✗ Test 1 Failed: Some required DOM elements are missing');
    }
    
    // Test 2: Check if JS functionality is working
    console.log('Test 2: Checking JavaScript functionality...');
    
    // 2.1 Test mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        console.log('✓ Mobile menu elements found');
        
        try {
            // Simulate click
            menuToggle.click();
            
            // Check if menu is now active
            if (navMenu.classList.contains('active')) {
                console.log('✓ Mobile menu toggle works correctly');
            } else {
                console.error('✗ Mobile menu does not become active on toggle click');
            }
            
            // Reset menu state
            menuToggle.click();
        } catch (error) {
            console.error('✗ Error testing mobile menu:', error);
        }
    } else {
        console.error('✗ Mobile menu elements not found');
    }
    
    // 2.2 Test research slider
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const researchSlides = document.querySelectorAll('.research-slide');
    
    if (prevBtn && nextBtn && researchSlides.length > 0) {
        console.log('✓ Research slider elements found');
        
        try {
            // Note initial display state of first slide
            const initialDisplay = window.getComputedStyle(researchSlides[0]).display;
            
            // Click next button
            nextBtn.click();
            
            // Check if slide has changed (a bit simplified for testing)
            setTimeout(() => {
                const newDisplay = window.getComputedStyle(researchSlides[0]).display;
                if (newDisplay !== initialDisplay) {
                    console.log('✓ Research slider navigation works correctly');
                } else {
                    console.error('✗ Research slider navigation does not change slides');
                }
                
                // Test complete
                console.log('All tests completed!');
            }, 100);
        } catch (error) {
            console.error('✗ Error testing research slider:', error);
        }
    } else {
        console.error('✗ Research slider elements not found');
    }
}); 