// A simple function to remove ads from the page
function removeAds() {
    // Define common ad element identifiers (classes, ids, etc.)
    const adSelectors = [
        'iframe[src*="ads"]',          // Frames containing ads
        'div[class*="ad"]',            // Divs with "ad" in class name
        'div[id*="ad"]',               // Divs with "ad" in ID
        'aside',                       // Ads in sidebars
        'ins.adsbygoogle',             // Google AdSense ads
        'a[href*="ads"]',              // Links pointing to ad networks
        'img[src*="ads"]',             // Images sourced from ad networks
    ];

    // Iterate through all ad selectors and remove matching elements
    adSelectors.forEach((selector) => {
        const adElements = document.querySelectorAll(selector);
        adElements.forEach((element) => {
            element.remove();
            console.log('Ad removed:', element);
        });
    });
}

// Run the ad removal function periodically (in case ads are loaded after page load)
const observer = new MutationObserver(() => {
    removeAds();
});

// Start observing the body for any changes that might indicate ads loading dynamically
observer.observe(document.body, { childList: true, subtree: true });

// Also run the removal once when the content script is first executed
removeAds();
