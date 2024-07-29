import { test as baseTest } from '@playwright/test'
import { LandingPage } from '../tests/Pages/landingPage'
import { SignInPage } from '../tests/Pages/SignInPage'
import { HomePage } from '../tests/Pages/homePage'
import { SettingsPage } from '../tests/Pages/settingsPage'
import { Settings } from 'http2'
import exp from 'constants'

type pages = {//variable name is page
    landingPage: LandingPage
    singInPage: SignInPage
    homePage: HomePage
    settingPage: SettingsPage
}
const testPages = baseTest.extend<pages>({
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page))
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    singInPage: async ({ page }, use) => {
        await use(new SignInPage(page))
    },
    settingPage: async ({ page }, use) => {
        await use(new SettingsPage(page))
    }
})
export const test = testPages
export const expect = testPages.expect





