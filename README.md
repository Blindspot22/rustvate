# Rustvate: A Rust-Based Ad-Blocking Extension
## Overview

**Rustvate** is a lightweight, high-performance ad-blocking browser extension developed in Rust and WebAssembly. It aims to block both visual ads and network requests, enhancing user privacy and browsing experience. This project leverages Rust’s efficiency and safety features to create a robust ad-blocker.
## Features
- **Block Visual Ads**: Remove ad elements from web pages.
- **Block Network Requests**: Prevent ad-related network requests from being made.
- **Fast and Efficient**: Powered by Rust and WebAssembly for high performance.
## Installation

### Chrome

1. **Prepare Your Extension Folder**:
   - Ensure all extension files are organized in a folder named `rustvate-extension`.

2. **Open Chrome**:
   - Launch Google Chrome.

3. **Access Extensions Page**:
   - Go to `chrome://extensions/`.

4. **Enable Developer Mode**:
   - Toggle the **Developer mode** switch in the top-right corner.

5. **Load Unpacked Extension**:
   - Click **Load unpacked**.
   - Select the `rustvate-extension` folder and click **Open**.

### Firefox

1. **Prepare Your Extension Folder**:
   - Make sure your extension files are in a folder named `rustvate-extension`.

2. **Open Firefox**:
   - Launch Mozilla Firefox.

3. **Access Add-ons Page**:
   - Go to `about:addons`.

4. **Enable Debugging**:
   - Click the **gear icon** next to the search bar and select **Debug Add-ons**.
   - Click **Enable add-on debugging**.

5. **Load Temporary Add-on**:
   - Click **Load Temporary Add-on**.
   - Navigate to `rustvate-extension` and select any file within it (e.g., `manifest.json`).

## Usage

Once the extension is installed:

1. **Visit Websites**:
   - Navigate to any website with ads to see if they are blocked.

2. **Check Console Logs**:
   - Open Developer Tools (`Ctrl + Shift + I` or `Cmd + Option + I` on Mac) and go to the **Console** tab to view logs related to blocked ads.

## How It Works

### Ad Block List

The extension uses a predefined list of ad-related domains to block visual ads and network requests. The domains are specified in the `lib.rs` file and include popular ad-serving domains.

### Visual Ad Blocking

The `content.js` script identifies and hides ad elements based on their CSS selectors or DOM attributes.

### Network Request Blocking

The `background.js` script intercepts network requests and blocks those matching ad-related domains using Rust’s WebAssembly functions.

### WebAssembly Integration

The Rust code is compiled to WebAssembly, which is then loaded and executed in the browser. This enables efficient processing and blocking of ad-related requests.

## Development

### Prerequisites

- **Rust**: [Install Rust](https://www.rust-lang.org/).
- **wasm-pack**: [Install wasm-pack](https://rustwasm.github.io/wasm-pack/installer/).
- **Node.js**: [Install Node.js](https://nodejs.org/).

### Building the Project

1. **Compile Rust to WebAssembly**:
   ```bash
   wasm-pack build --target web
