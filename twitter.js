const webdriver = require("selenium-webdriver");
require("dotenv").config({ path: "config.env" });
const { By, until } = webdriver;

const { uname, pass } = process.env;

async function webBot() {
  const driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.get("https://twitter.com/login");
  driver
    .findElement(
      By.xpath(
        '//*[@id="page-container"]/div/div[1]/form/fieldset/div[1]/input'
      )
    )
    .sendKeys(uname);
  driver
    .findElement(
      By.xpath(
        '//*[@id="page-container"]/div/div[1]/form/fieldset/div[2]/input'
      )
    )
    .sendKeys(pass);
  driver
    .findElement(
      By.xpath('//*[@id="page-container"]/div/div[1]/form/div[2]/button')
    )
    .click();

  // await driver.sleep(10000);
  // driver.quit();
}

webBot();
