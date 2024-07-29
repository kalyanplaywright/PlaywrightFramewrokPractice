import { expect,test } from '../fixtures/pomFixtures'


test('Fixture Framework signin', async ({ page,landingPage,singInPage,homePage,settingPage }) => {

  //await page.goto('https://react-redux.realworld.io/#/login?_k=oddp7x')
  await landingPage.navigateTo('https://react-redux.realworld.io/#/login?_k=oddp7x')
  await landingPage.clickSignInButton()

  await singInPage.enterEmailId('playwrightdemo@gmail.com')
  await singInPage.enterPassWord('playwrightdemo')
  await singInPage.clickOnSignIn()
  //
  await homePage.clickSettingsButton()
  await settingPage.clickLogoutButton()
})
// await signinpage.enteremailid("playwrightdemo@gmail.com");
//   await signInPage.enterPassword("playwrightdemo");
//   await signInPage.clickSignInButton();