import { test } from '../../config/fixtures';
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.describe('Login Test Suite', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
    });

    test('Test 1 - Login with valid credentials', async ({ loginPage }) => {
        await allure.description(
            "This test ensures the login with valid credentials",
          );
          await allure.story("Login/Signup");
          await allure.suite("Login/Signup Suite");
          await allure.tags("Login");
          await allure.severity(Severity.CRITICAL);
        await loginPage.Login(); 
        await loginPage.takeScreenshot();
        await loginPage.AssertLoggedIn();  

    });

    test('Test 2 - Login with invalid credentials', async ({ loginPage }) => {
        await allure.description(
            "This test ensures login doesn't work with invalid credentials",
          );
          await allure.story("Login/Signup");
          await allure.suite("Login/Signup Suite");
          await allure.tags("Login");
          await allure.severity(Severity.CRITICAL);
        await loginPage.LoginInvalid();
    });

    test('Test 3 - Signup', async ({ loginPage }) => {
        await allure.description(
            "This test ensures signup of an existing user",
          );
          await allure.story("Login/Signup");
          await allure.suite("Login/Signup Suite");
          await allure.tags("Signup");
          await allure.severity(Severity.BLOCKER);
        await loginPage.SignUp();
    });

    test.afterEach(async ({ page }) => {
        if (page) { 
            await page.close();
        }
    });
});
