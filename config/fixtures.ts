import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
// import { CartPage } from '../pages/cartPage';
// import { ContactPage } from '../pages/contactPage';

export const test = baseTest.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
    // cartPage: async ({ page }, use) => {
    //     await use(new CartPage(page));
    // },
    // contactPage: async ({ page }, use) => {
    //     await use(new ContactPage(page));
    // }
});

export const expect = baseExpect;
