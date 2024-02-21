# humanisejs

![npm](https://img.shields.io/npm/v/humanisejs)
![npm](https://img.shields.io/npm/dt/humanisejs)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/aaronmansfield5/humanisejs)
![GitHub issues](https://img.shields.io/github/issues/aaronmansfield5/humanisejs)
![GitHub pull requests](https://img.shields.io/github/issues-pr/aaronmansfield5/humanisejs)
![GitHub stars](https://img.shields.io/github/stars/aaronmansfield5/humanisejs)

A Node.js package that adds a realistic human typing simulation to pages using Puppeteer and Ghost Cursor. This package is useful for enhancing web automation scripts by making interactions with pages more human-like.

## Installation

Install the package using npm:

```bash
npm install humanisejs
```

## Usage
### 1. Initialize Puppeteer Browser
```js
const { Browser } = require("puppeteer");
const { createCursor } = require('ghost-cursor');
const { humanise } = require('humanisejs');

const browser = await puppeteer.launch();
```

## 2. Add Human Typing to the Browser
### Use the humanise function to add human typing functionality to the browser:
```js
await humanise(browser);
```

## 3. Utilize the `humanType` Method
### Now, you can use the `humanType` method on any page in the browser to simulate human-like typing behavior:
```js
const page = await browser.newPage();
await page.goto('https://example.com');
await page.humanType('#inputField', 'Hello, world!');
```

## Features
- Simulates realistic human typing behavior.
- Adds a convenient humanType method to Puppeteer pages.
- Enhances web automation scripts for more human-like interactions.
  
## How It Works
The `humanise` function listens for new pages created in the browser. When a new page is detected, it adds the `humanType` method to the page, allowing you to easily simulate human typing.

The `humanType` method utilizes [ghost-cursor](https://www.npmjs.com/package/ghost-cursor) to move the cursor to the specified input field, click it, and then type the provided text with occasional simulated mistakes, creating a more human-like typing pattern.

## Contributing
If you encounter any issues or have suggestions, please [open an issue](https://github.com/aaronmansfield5/humanisejs/issues) on GitHub. Pull requests are also welcome.

## Roadmap
- [ ] Add support for customizing typing speed and mistake frequency.

- [ ] Implement additional features for more realistic interactions.
Feel free to contribute to the project by tackling these tasks or suggesting new ideas!
