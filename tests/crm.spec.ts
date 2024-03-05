import { test, expect } from '@playwright/test'
import { SignIn } from '../page-objects/signInPage'

test.beforeEach(async({page}) => {
  await page.goto('https://automationplayground.com/crm/')
  await expect(page).toHaveTitle('Customer Service')
})

test('has title', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/')
  await expect(page).toHaveTitle('Customer Service')
});

test('get started Sign In', async ({ page }) => {
  const SI = new SignIn(page)
  await SI.LogIn()
  await SI.SignInPage('admin@robotframework.com', 'Qwe123')
});
