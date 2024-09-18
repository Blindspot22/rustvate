import init, { is_ad_url } from './pkg/ad_blocker.js';

async function main() {
    await init();  // Initialize Wasm module

    browser.webRequest.onBeforeRequest.addListener(
        function (details) {
            let url = details.url;
            if (is_ad_url(url)) {
                console.log(`Blocked ad: ${url}`);
                return { cancel: true };
            }
        },
        { urls: ["<all_urls>"] },
        ["blocking"]
    );
}

main();
