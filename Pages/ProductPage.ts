import {Page,expect,test} from "@playwright/test";
import { userData } from "../test-data/userData";


export class ProductPage {
  readonly page:Page

  constructor(page: Page){
    this.page = page;
  }

  async navigateToProductPage(){

    console.log('➡️  Navigating to the products page...');

    const productBtn = await this.page.locator('[href="/products"]');
    await expect(productBtn).toBeVisible();
    console.log('✅ Products link is visible.');

    await productBtn.click();
    console.log('✅ Clicked on the Products link.');

    await expect(this.page).toHaveURL('https://automationexercise.com/products');
    console.log('✅ User is successfully navigated to the product page.');


  }

  async searchForProduct(productName: string){

    console.log(`➡️  Searching for product: ${productName}`);

    const searchbar = await this.page.locator('//*[@id="search_product"]');
    await expect(searchbar).toBeVisible();
    console.log('✅ Search field is visible.');

    await searchbar.fill(userData.productName);
    console.log('✅ Entered product name into the search field: ' + userData.productName);

    await this.page.locator('//*[@id="submit_search"]').click();
    console.log('✅ User is successfully searched for the product. ' + userData.productName);


    // Verify searched product is displayed

    const product = this.page.locator('.productinfo').filter({ hasText: 'Winter Top' });

  await expect(product).toBeVisible();
  console.log('✅ Searched product is displayed on the page. ' + userData.productName);

  }

  async verifyProductDetails(){

    console.log('➡️  Opening product details page...');

    const productDetails =  await this.page.locator('[href="/product_details/5"]').filter({ hasText: 'View Product' });
    await expect(productDetails).toBeVisible();
    console.log('✅ "View Product" link is visible.');

    await productDetails.click();
    console.log('✅ Clicked on "View Product".');

    await expect(this.page).toHaveURL('https://automationexercise.com/product_details/5');
    console.log('✅ Navigated to the product details page.');

    await expect(this.page.locator('.product-information').filter({ hasText: 'Winter Top' })).toBeVisible();
    console.log('✅ User is successfully navigated to the product details page and verified the product details. ' + userData.productName);


    const productInformation = this.page.locator('.product-information');

    await expect(productInformation).toContainText('Availability: In Stock');
    console.log('✅ Product availability is verified as In Stock. ' + userData.productName);

    const productQuantity = await this.page.locator('[name="quantity"]');
    await expect(productQuantity).toBeVisible();
    console.log('✅ Quantity field is visible.');

    await productQuantity.fill('3');
    await expect(productQuantity).toHaveValue('3');
    console.log('✅ Product quantity is 3');

    //verify add to the cart
    console.log('➡️  Adding product to cart...');

    const addCartBtn = this.page.locator('.product-details .btn.btn-default.cart');
    await expect(addCartBtn).toBeVisible();
    console.log('✅ "Add to cart" button is visible.');

    await addCartBtn.scrollIntoViewIfNeeded();
    await addCartBtn.click();
    console.log('✅ Clicked "Add to cart" button.');

    //Verify the added product
    const cartIcon =  await this.page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');
    await expect(cartIcon).toBeVisible();
    console.log('✅ Cart icon is visible in the header.');

    await cartIcon.click();
    console.log('✅ Clicked the cart icon.');

    await expect(this.page).toHaveURL('https://automationexercise.com/view_cart');
    console.log('✅ Navigated to the shopping cart page.');

    const item = await this.page.locator('//*[@id="product-1"]/td[2]/h4/a');
    await expect(item).toBeVisible();
    console.log('✅ Product is visible in the cart.');


 


  }


  


}