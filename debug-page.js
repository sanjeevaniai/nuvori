const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Listen for console messages
    page.on('console', msg => {
        console.log('CONSOLE:', msg.type(), msg.text());
    });

    // Listen for errors
    page.on('pageerror', error => {
        console.log('PAGE ERROR:', error.message);
    });

    try {
        await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });

        // Wait a bit for React to render
        await page.waitForTimeout(2000);

        // Get the page content
        const content = await page.content();
        console.log('Page loaded, checking for tagline...');

        if (content.includes('There is no We without Us')) {
            console.log('✅ Tagline found!');
        } else {
            console.log('❌ Tagline NOT found');
            console.log('Root div content:');
            const rootContent = await page.$eval('#root', el => el.innerHTML);
            console.log(rootContent.substring(0, 500) + '...');
        }

    } catch (error) {
        console.log('ERROR:', error.message);
    }

    await browser.close();
})();
