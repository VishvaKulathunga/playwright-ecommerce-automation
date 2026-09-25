import { Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { userData } from '../test-data/userData';

export class LoginPage {

    readonly page:Page;

    constructor(page: Page){
        this.page = page;

    }

    async clickOnLoginBtn(){

        const LoginBtn = this.page.locator('a[href="/login"]');
        await LoginBtn.click();
        const LoginEmail = this.page.locator('[data-qa="login-email"]');
        await expect(LoginEmail).toBeVisible();
        console.log('✅ Login Email field is visible.');

        const LoginPassword = this.page.locator('[data-qa="login-password"]');
        await expect(LoginPassword).toBeVisible();
        console.log('✅ Login Password field is visible.');

    }


        async enterLoginDetails(email: string){

            const LoginEmail = this.page.locator('[data-qa="login-email"]');
            await LoginEmail.fill(userData.email1);

            const LoginPassword = this.page.locator('[data-qa="login-password"]');
            await LoginPassword.fill(userData.password);

            const loginBtn =  this.page.locator('[data-qa="login-button"]');
            await loginBtn.click();

            const logoutBtn = this.page.locator('a[href="/logout"]');
            await expect(logoutBtn).toBeVisible();
            console.log('✅ User is successfully logged in and logout button is visible.');




        }

        async LogoutUser(){
            const logoutBtn = this.page.locator('a[href="/logout"]');
            await logoutBtn.click();
            //await expect(this.page).toHaveURL('https://automationexercise.com/');
            await expect(logoutBtn).not.toBeVisible();
            console.log('✅ User is successfully logged out and redirected to the landing page.');


        }
        

        
        


        



    
}