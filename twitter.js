// this js app does login to twitter and unfollow trump

// requiring selenium webdriver
const webdriver = require("selenium-webdriver");
const { By, until } = webdriver;

// configuring process variables
require("dotenv").config({ path: "config.env" });
const { uname, pass } = process.env;
const driver = new webdriver.Builder().forBrowser("chrome").build();

// creating the login method
async function login() {
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
  await driver.sleep(8000);
}

// unfollow trump method
async function unfollowTrump() {
  driver.navigate().to("https://twitter.com/realDonaldTrump");
  await driver.sleep(8000);
  driver
    .findElement(
      By.xpath(
        '//*[@id="react-root"]/div/div/div/main/div/div/div/div/div/div[2]/div/div/div[1]/div/div[1]/div/div[3]/div/div'
      )
    )
    .click();
  await driver.sleep(10000);
}

login()
  .then(() => {
    unfollowTrump();
  })
  .then(() => {
    driver.quit();
  });
