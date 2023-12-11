import { Locator, Page } from "@playwright/test";


export class EncryptPage{
    readonly page: Page
    readonly encryptBtn: Locator
    readonly encryptUrl: Locator
    readonly modeBtn: Locator
    readonly uenModeBtn: Locator


    constructor (page: Page){
        this.page = page
        this.encryptBtn = page.locator('[data-testid=generate-encrypt-button]')
        this.encryptUrl = page.locator('[data-testid=generate-encrypted-url]').first()
        this.modeBtn = page.locator('[data-testid=login-id-type-wrapper]')
        this.uenModeBtn = page.locator('div.sgds-dropdown-menu > div > a:nth-child(2)')
    }

    async clickEncryptButton(){
        await this.encryptBtn.click()
    }

    async clickEncryptUrl(){
        await this.encryptUrl.click()
    }

    async clickSelectUenMode(){
        await this.modeBtn.click()
        await this.uenModeBtn.click()
    }
}