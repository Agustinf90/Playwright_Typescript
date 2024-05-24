import { test } from '../../config/fixtures';
test.describe('Login Test Suite', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.GotoLoginPage();
    });

    test('1 - Login with valid credentials', async ({ loginPage }) => {
        await loginPage.Login(); 
        await loginPage.takeScreenshot();
        await loginPage.AssertLoggedIn();  

    });

    test('2 - Login with invalid credentials', async ({ loginPage }) => {
        await loginPage.LoginInvalid();
    });

    test('3 - Signup', async ({ loginPage }) => {
        await loginPage.SignUp();
    });

    test.afterEach(async ({ page }) => {
        if (page) { 
            await page.close();
        }
    });
});
