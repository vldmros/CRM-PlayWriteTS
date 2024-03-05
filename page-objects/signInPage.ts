import { Locator, Page, expect, test } from '@playwright/test';

export class SignIn { 

    readonly page: Page

    constructor(page: Page) { 
        this.page = page
    }
    async LogIn() { 
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();

    }

    async SignInPage(email: string, password: string) { 
        const customersPage = this.page.locator('.container', { hasText: "Our Happy Customers" })     
        await this.page.locator('#email-id').fill(email)
        await this.page.locator('#password').fill(password)
        await this.page.locator('#remember').click()
        await this.page.getByRole('button', { name: 'Submit' }).click()
        await expect(customersPage).toBeVisible()
    }

}