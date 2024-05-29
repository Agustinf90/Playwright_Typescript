import { Page, expect } from '@playwright/test';
import config from '../config/config';

export class LoginPage {
    private page: Page;
    private btnToLogin: any;
    private txtEmail: any;
    private txtPassword: any;
    private btnSignIn: any;
    private txtName: any;
    private txtEmailAdd: any;
    private btnSignUp: any;
    private txtInvalidCred: any;
    private bntLoggedIn: any;
    private loginForm: any;

    constructor(page: Page) {
        this.page = page;
        this.btnToLogin = page.locator('//a[contains(., "Signup / Login")]');
        this.txtEmail = page.locator('form').filter({ hasText: 'Login' }).locator('input[placeholder="Email Address"]');
        this.txtPassword = page.locator('form').locator('input[placeholder="Password"]');
        this.btnSignIn = page.locator('button.btn.btn-default', { hasText: 'Login' });
        this.txtName = page.locator('form').locator('input[placeholder="Name"]');
        this.txtEmailAdd = page.locator('form').filter({ hasText: 'Signup' }).locator('input[placeholder="Email Address"]');
        this.btnSignUp = page.locator('button.btn.btn-default', { hasText: 'Signup' });
        this.txtInvalidCred = page.locator('//p[contains(@style, "color: red;") and text()="Your email or password is incorrect!"]');
        this.bntLoggedIn = page.locator('//a[contains(., "Logout")]');
        this.loginForm = page.locator('//b[text()="Enter Account Information"]');
    }

    async GotoLoginPage() {
        await this.page.goto(config.url);
    }

    async Login() {
        await this.btnToLogin.click();
        await this.txtEmail.fill(config.email);
        await this.txtPassword.fill(config.password);
        await this.btnSignIn.click();
        await expect(this.btnSignIn).toBeHidden();
    }

    async AssertLoggedIn() {
        await expect(this.bntLoggedIn).toBeVisible();
    }

    async LoginInvalid() {
        await this.btnToLogin.click();
        await this.txtEmail.fill(config.emailInvalid);
        await this.txtPassword.fill(config.passwordInvalid);
        await this.btnSignIn.click(); 
        await expect(this.txtInvalidCred).toBeVisible();  
    }

    async SignUp() {
        await this.btnToLogin.click();
        await this.txtName.fill(config.name);
        await this.txtEmailAdd.fill(config.emailNew);
        await this.btnSignUp.click();
        await expect(this.loginForm).toBeVisible();    
    }

    async takeScreenshot() {
        await this.page.screenshot({ path: './Playwright/screenshots/after-click3.png' });
    }
}
