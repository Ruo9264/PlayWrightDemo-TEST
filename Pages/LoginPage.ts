import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page
    readonly loginTitle: Locator
    readonly useCaseTitle: Locator


    constructor(page: Page){
        this.page = page
        this.loginTitle = page.locator('p:has-text("Appointment Booking Portal")')
    }
}