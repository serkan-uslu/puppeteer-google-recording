const puppeteer = require("puppeteer"); // v20.7.4 or later

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const timeout = 30000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1440,
      height: 344,
    });
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    startWaitingForEvents();
    await targetPage.goto("https://www.amazon.com/ref=nav_logo");
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Search Amazon)"),
      targetPage.locator("#twotabsearchtextbox"),
      targetPage.locator('::-p-xpath(//*[@id=\\"twotabsearchtextbox\\"])'),
      targetPage.locator(":scope >>> #twotabsearchtextbox"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 264.359375,
          y: 15,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Search Amazon)"),
      targetPage.locator("#twotabsearchtextbox"),
      targetPage.locator('::-p-xpath(//*[@id=\\"twotabsearchtextbox\\"])'),
      targetPage.locator(":scope >>> #twotabsearchtextbox"),
    ])
      .setTimeout(timeout)
      .fill("shoes");
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    await targetPage.keyboard.down("Enter");
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Enter");
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    await puppeteer.Locator.race([
      targetPage.locator(
        `::-p-aria(Brooks Men\\'s Ghost 14 Neutral Running Shoe[role=\\"image\\"])`
      ),
      targetPage.locator("div.s-main-slot > div:nth-of-type(3) img"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"search\\"]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/div[2]/span/a/div/img)'
      ),
      targetPage.locator(":scope >>> div.s-main-slot > div:nth-of-type(3) img"),
    ])
      .setTimeout(timeout)
      .on("action", () => startWaitingForEvents())
      .click({
        offset: {
          x: 149.59375,
          y: 86.984375,
        },
      });
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Add to Cart)"),
      targetPage.locator("#add-to-cart-button"),
      targetPage.locator('::-p-xpath(//*[@id=\\"add-to-cart-button\\"])'),
      targetPage.locator(":scope >>> #add-to-cart-button"),
    ])
      .setTimeout(timeout)
      .on("action", () => startWaitingForEvents())
      .click({
        offset: {
          x: 111,
          y: 24,
        },
      });
    await Promise.all(promises);
  }

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
