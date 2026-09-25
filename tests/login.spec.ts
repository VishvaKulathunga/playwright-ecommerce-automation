import {expect,test} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { userData } from '../test-data/userData';

test("User navigating the ", async({page})=>{

    const loginPage =  new LoginPage(page);

    await page.goto('https://automationexercise.com/');
    
    await expect(page).toHaveTitle(/Automation Exercise/);
    console.log('✅ Successfully navigated to the Automation Exercise landing page.');

    await loginPage.clickOnLoginBtn();

    await expect(page).toHaveURL('https://automationexercise.com/login');
    
    await loginPage.enterLoginDetails(userData.email1);
    await loginPage.LogoutUser();


})
