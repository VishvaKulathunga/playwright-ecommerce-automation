import { expect, test } from '@playwright/test';
import { randomUUID } from 'crypto';

test('navigating to the landing page', async ({ page }) => {

    // Navigate to the Automation Exercise landing page
    await page.goto('https://automationexercise.com/');
    await page.waitForLoadState('networkidle');

    // Verify that the correct page title is displayed
    await expect(page).toHaveTitle(/Automation Exercise/);
    console.log('✅ Successfully navigated to the Automation Exercise landing page.');

    // Click the Login / Signup button
    const LoginBtn = page.locator('a[href="/login"]');
    await LoginBtn.click();

    // Verify that the user is redirected to the Login / Signup page
    await expect(page).toHaveURL('https://automationexercise.com/login');

    // Enter new user signup details
    await page.getByPlaceholder('Name').fill('Subaru');
    //await page.locator('[data-qa="signup-email"]').fill('Subaru@gmail.com');
    const uniqueEmail = `subaru-${randomUUID()}@example.com`;

    await page.locator('[data-qa="signup-email"]').fill(uniqueEmail);

    console.log(`📧 Using unique email: ${uniqueEmail}`);

    console.log('✅ Successfully filled the name and email address fields.');

    // Submit the signup form
    await page.locator('[data-qa="signup-button"]').click();

    // Verify that the user is redirected to the signup details page
    await expect(page).toHaveURL('https://automationexercise.com/signup');

    // Locate the "Mr" gender radio button
    const genderRadio = page.locator('[value="Mr"]');

    // Verify that the radio button is visible
    await expect(genderRadio).toBeVisible();
    console.log('✅ Mr radio button is visible.');

    // Select the "Mr" radio button
    await genderRadio.check();

    // Verify that the radio button has been selected
    await expect(genderRadio).toBeChecked();
    console.log('✅ Mr radio button is selected.');

    //Verify that the password field is not empty
    const pword = await page.locator('//*[@id="password"]');
    await pword.fill('Subaru123');
    await expect(pword).toHaveValue('Subaru123');
    console.log('✅ Password field is not empty.');

    // Verify that the date of birth fields are visible
    const day = await page.locator('[id="days"]');
    await day.selectOption('5');
    await expect(day).toHaveValue('5');
    const month = await page.locator('[id="months"]');
    await month.selectOption('5');
    await expect(month).toHaveValue('5');
    const year = await page.locator('[id="years"]');
    await year.selectOption('1995');
    await expect(year).toHaveValue('1995');

    console.log('✅ Date of birth fields are filled.');


    const newsletterCheckbox = page.locator('[name="newsletter"]');
    await newsletterCheckbox.isVisible();
    await newsletterCheckbox.check();
    await expect(newsletterCheckbox).toBeChecked();
    console.log('✅ Newsletter checkbox is visible and checked.');

    //Verify the address

    const firstAddress = await page.locator('//*[@id="first_name"]');
    await firstAddress.fill('Subaru');
    await expect(firstAddress).toHaveValue('Subaru');

    const LastAddress =  await page.locator('//*[@id="last_name"]');
    await LastAddress.fill('Impreza');
    await expect(LastAddress).toHaveValue('Impreza');

    const companyName =  await page.locator('//*[@id="company"]');
    await companyName.fill('Subaru Motors');
    await expect(companyName).toHaveValue('Subaru Motors');


    const country = await page.locator('[name="country"]');
    await country.selectOption('Canada');
    await expect(country).toHaveValue('Canada');

    const State =  await page.locator('//*[@id="state"]');
    await State.fill('Ontario');
    await expect(State).toHaveValue('Ontario');
    console.log('✅ state fields are filled.');

    const city= await page.locator('//*[@id="city"]');
    await city.fill('Moratuwa');
    await expect(city).toHaveValue('Moratuwa');
    console.log("✅ City field is filled.");

    const mobileNumber =  await page.locator('//*[@id="mobile_number"]');
    await mobileNumber.fill('0771234567');
    await expect(mobileNumber).toHaveValue('0771234567');
    console.log('✅ Mobile number field is filled.');

    const ZipCode =  await page.locator('//*[@id="zipcode"]');
    await ZipCode.fill('12345');
    await expect(ZipCode).toHaveValue('12345');
    console.log('✅ Zip code field is filled.');    

    const CompanyAddress =  await page.locator('//*[@id="address1"]');
    await CompanyAddress.fill('123 Main Street');
    await expect(CompanyAddress).toHaveValue('123 Main Street');
    console.log('✅ Company address field is filled.');


    //verfly the create account button is visible and click it
    const CreateAccountBtn = page.locator('[data-qa="create-account"]');
    await expect(CreateAccountBtn).toBeVisible();
    await CreateAccountBtn.click();
    console.log('✅ Create Account button is visible and clicked.');

    await expect(page).toHaveURL('https://automationexercise.com/account_created');
    console.log('✅ User is redirected to the account created page.');






    

});