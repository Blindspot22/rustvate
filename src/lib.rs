use wasm_bindgen::prelude::*;

static BLOCKLIST: &[&str] = &["ads.example.com", "tracking.example.com"];

#[wasm_bindgen]
pub fn is_ad_url(url: &str) -> bool {
    for block in BLOCKLIST.iter() {
        if url.contains(block) {
            return true;
        }
    }
    false
}
