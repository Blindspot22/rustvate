import init, { is_ad_url } from './pkg/ad_blocker.js';

async function main() {
    // Initialize the WebAssembly module (Rust logic)
    await init();

    // Listener for intercepting web requests
    browser.webRequest.onBeforeRequest.addListener(
        function (details) {
            const url = details.url;

            // Call the Rust function to check if the URL is an ad URL
            if (is_ad_url(url)) {
                console.log(`Blocked ad: ${url}`);
                return { cancel: true };  // Block the ad request
            }

            // Otherwise, allow the request to proceed
            return { cancel: false };
        },
        { urls: ["<all_urls>"] },  // Match all URLs
        ["blocking"]  // This flag indicates the request can be blocked
    );
}

main();
