import { test, expect } from '@playwright/test';
import { EncryptPage } from '../Pages/EncryptPage'
import { LoginPage } from '../Pages/LoginPage';

test.beforeEach(async({page})=>{
  await page.goto('https://swab-sit.moh.gov.sg/appointment/generate/development');
})

test('Encrypt PAWW PAQTC url', async ({ page }) => {
  const encryptPage = new EncryptPage(page)
  const loginPage = new LoginPage(page)
  await encryptPage.clickEncryptButton()
  await expect(encryptPage.encryptUrl).toContainText('/login?key=')
  await encryptPage.clickEncryptUrl()
  await expect(loginPage.loginTitle).toBeVisible()


});

test('Encrypt FET RRT url', async ({ page }) => {
  const encryptPage = new EncryptPage(page)
  const loginPage = new LoginPage(page)
  await encryptPage.clickSelectUenMode()
  await encryptPage.clickEncryptButton()
  await expect(encryptPage.encryptUrl).toContainText('/login?key=')
  await encryptPage.clickEncryptUrl()
  await expect(loginPage.loginTitle).toBeVisible()
})
