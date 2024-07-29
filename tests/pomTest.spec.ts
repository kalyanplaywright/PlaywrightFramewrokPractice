/********POM.spec.ts**********/
import {test} from '@playwright/test'
import{LandingPage} from './Pages/landingPage'
import { SignInPage } from './Pages/SignInPage'
import { HomePage } from './Pages/homePage'
import { SettingsPage } from './Pages/settingsPage'

test('Framework signin', async ({ page }) => {
const landingpage = new LandingPage  (page)
const signIn = new SignInPage (page)
const homePage= new HomePage (page)
const settingsPage = new SettingsPage (page)

//await page.goto('https://react-redux.realworld.io/#/login?_k=oddp7x')
await landingpage.navigateTo('https://react-redux.realworld.io/#/login?_k=oddp7x')
await landingpage.clickSignInButton()

await signIn.enterEmailId('playwrightdemo@gmail.com')
  await signIn.enterPassWord('playwrightdemo')   
  await signIn.clickOnSignIn()
  //
await homePage.clickSettingsButton()
await settingsPage.clickLogoutButton()
})
// await signinpage.enteremailid("playwrightdemo@gmail.com");
//   await signInPage.enterPassword("playwrightdemo");
//   await signInPage.clickSignInButton();