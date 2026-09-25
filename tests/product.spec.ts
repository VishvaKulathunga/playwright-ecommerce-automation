import { ProductPage } from "../Pages/ProductPage";
import{test, expect} from "@playwright/test";
import { userData } from "../test-data/userData";
import { LoginPage } from "../Pages/LoginPage";

test("User navigating to the product page", async({page})=>{

     await page.route('**/*googlesyndication.com/**', route => route.abort());
    await page.route('**/*doubleclick.net/**', route => route.abort());
    await page.route('**/*googleadservices.com/**', route => route.abort());


    const productPage = new ProductPage(page);
    const loginPage =  new LoginPage(page);
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
    console.log('✅ Successfully navigated to the Automation Exercise landing page.');

    await loginPage.clickOnLoginBtn();
    await loginPage.enterLoginDetails(userData.email1);
    await productPage.navigateToProductPage();
    await productPage.searchForProduct(userData.productName);
    await productPage.verifyProductDetails();

    


    
});