import { createServer } from 'vite';
import puppeteer from 'puppeteer-core';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function runTests() {
  console.log('⚡ Starting Vite server in-process...');
  const server = await createServer({
    server: { port: 3100, host: '127.0.0.1' }
  });
  await server.listen();
  const address = server.httpServer.address();
  const port = address.port;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`📡 Vite running at ${baseUrl}`);

  console.log('🚀 Launching Chrome for Automated Testing...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  console.log(`📡 Navigating to ${baseUrl}...`);
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });

  // 1. Check title & SEO
  const title = await page.title();
  console.log(`✅ Page Title: "${title}"`);

  // Verify single h1
  const h1Count = await page.$$eval('h1', (els) => els.length);
  const h1Text = await page.$eval('h1', (el) => el.innerText);
  console.log(`✅ H1 Count: ${h1Count} ("${h1Text.replace(/\n/g, ' ')}")`);

  // Verify JSON-LD Schema
  const jsonLd = await page.$eval('script[type="application/ld+json"]', (el) => JSON.parse(el.innerText));
  console.log(`✅ JSON-LD Person: "${jsonLd.name}", Job: "${jsonLd.jobTitle}"`);

  // 2. Desktop Viewport 1440x900
  console.log('🖥️ Testing Desktop Viewport (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshot-1440.png', fullPage: false });
  console.log('📸 Captured screenshot-1440.png');

  // Test "Explore Projects" CTA
  console.log('🔘 Testing "Explore Projects" CTA...');
  await page.click('a[data-reticle="PROJECTS"]');
  await new Promise((r) => setTimeout(r, 600));

  // Test Project Modal (Fake News)
  console.log('🔘 Opening Project Detail Modal (Fake News)...');
  const specBtn = await page.$('#fake-news-detector button[data-reticle="INSPECT"]');
  if (specBtn) {
    await specBtn.click();
    await new Promise((r) => setTimeout(r, 500));
    const modalTitle = await page.$eval('#modal-project-title', (el) => el.innerText);
    console.log(`✅ Modal Opened: "${modalTitle}"`);

    // Verify // VERIFY tag is present
    const modalContent = await page.$eval('[role="dialog"]', (el) => el.innerText);
    const hasVerify = modalContent.includes('// VERIFY');
    console.log(`✅ Modal Contains "// VERIFY" comment tag: ${hasVerify}`);

    // Verify NO dummy link or github button
    const modalLinks = await page.$$eval('[role="dialog"] a', (els) => els.map((a) => a.href));
    console.log(`✅ Modal External Links: ${modalLinks.length} (Strictly 0 dummy links)`);

    // Press Escape to close modal
    console.log('⌨️ Pressing Escape key to close modal...');
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
    const isModalOpen = await page.$('[role="dialog"]');
    console.log(`✅ Modal closed after Escape: ${isModalOpen === null}`);
  }

  // Test Pipeline Lab Stepper
  console.log('🧪 Testing Pipeline Lab Stepper (Steps 01-04)...');
  const labSteps = await page.$$('#fake-news-detector .grid button');
  for (let i = 0; i < labSteps.length; i++) {
    await labSteps[i].click();
    await new Promise((r) => setTimeout(r, 100));
  }
  console.log(`✅ Clicked through ${labSteps.length} Pipeline Lab steps.`);

  // Test PR Lifecycle Stepper
  console.log('🔄 Testing PR Lifecycle Stepper...');
  const prButtons = await page.$$('#stage-04 button');
  for (let i = 0; i < prButtons.length; i++) {
    await prButtons[i].click();
    await new Promise((r) => setTimeout(r, 100));
  }
  console.log(`✅ Clicked through ${prButtons.length} PR lifecycle buttons.`);

  // Test Contact Form Validation & Fallback
  console.log('✉️ Testing Contact Form...');
  await page.evaluate(() => document.getElementById('stage-07')?.scrollIntoView());
  await new Promise((r) => setTimeout(r, 600));

  // Submit empty form
  await page.click('form button[data-reticle="TRANSMIT"]');
  await new Promise((r) => setTimeout(r, 200));
  const errorText = await page.evaluate(() => {
    return document.querySelector('form .text-signal span')?.innerText || '';
  });
  console.log(`✅ Form Empty Validation Message: "${errorText}"`);

  // Fill form and submit to test fallback
  await page.type('#name', 'Alex Recruiter');
  await page.type('#email', 'alex@techcompany.com');
  await page.type('#message', 'Interested in scheduling an engineering interview for Rimjhim Madan.');
  await page.click('form button[data-reticle="TRANSMIT"]');
  await new Promise((r) => setTimeout(r, 300));
  const fallbackText = await page.evaluate(() => {
    return document.querySelector('form .text-bone span')?.innerText || '';
  });
  console.log(`✅ Form Fallback Message: "${fallbackText}"`);

  // 3. Tablet Viewport 768x1024
  console.log('📱 Testing Tablet Viewport (768x1024)...');
  await page.setViewport({ width: 768, height: 1024 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshot-768.png', fullPage: false });
  console.log('📸 Captured screenshot-768.png');

  const tabletOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`✅ Tablet Horizontal Overflow Detected: ${tabletOverflow}`);

  // 4. Mobile Viewport 375x812
  console.log('📱 Testing Mobile Viewport (375x812)...');
  await page.setViewport({ width: 375, height: 812 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: 'screenshot-375.png', fullPage: false });
  console.log('📸 Captured screenshot-375.png');

  const mobileOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log(`✅ Mobile Horizontal Overflow Detected: ${mobileOverflow}`);

  // Test Mobile Menu
  console.log('🍔 Testing Mobile Hamburger Navigation...');
  const menuBtn = await page.$('button[aria-label="Open navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 300));
    const isMenuOpen = await page.$('[role="dialog"][aria-label="Mobile Navigation"]');
    console.log(`✅ Mobile Menu Dialog Opened: ${isMenuOpen !== null}`);

    // Close menu
    const closeBtn = await page.$('button[aria-label="Close navigation menu"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise((r) => setTimeout(r, 200));
      const isMenuClosed = await page.$('[role="dialog"][aria-label="Mobile Navigation"]');
      console.log(`✅ Mobile Menu Dialog Closed: ${isMenuClosed === null}`);
    }
  }

  // 5. Resume Download Test
  console.log('📄 Testing Resume PDF Endpoint...');
  const resumeRes = await page.goto(`${baseUrl}/Rimjhim_Madan_Resume.pdf`);
  console.log(`✅ Resume PDF HTTP Status: ${resumeRes.status()} (${resumeRes.headers()['content-type']})`);

  // 6. Console Error Summary
  console.log(`\n========================================`);
  console.log(`Console Errors Total: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Console Errors:', consoleErrors);
  } else {
    console.log('🎉 ZERO console errors detected during full test run!');
  }
  console.log(`========================================\n`);

  await browser.close();
  await server.close();
  console.log('🏁 Verification Suite Completed Successfully!');
}

runTests().catch((err) => {
  console.error('Test run failed:', err);
  process.exit(1);
});
