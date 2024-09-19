use wasm_bindgen::prelude::*;

// A list of common ad-related domains or patterns
static BLOCKLIST: &[&str] = &[
    "ads.example.com",
    "tracking.example.com",
    "doubleclick.net",
    "googlesyndication.com",
    "adservice.google.com",
    "adservice.yahoo.com",
    // Add more ad-related URLs/domains here
];

// Function to check if a URL is an ad URL
#[wasm_bindgen]
pub fn is_ad_url(url: &str) -> bool {
    for block in BLOCKLIST.iter() {
        if url.contains(block) {
            return true;
        }
    }
    false
}
