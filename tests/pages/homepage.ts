// import { Page, Locator } from "@playwright/test";
// //import BasePage from './basePage';

// //export class HomePage extends BasePage {
//     private readonly settingsButton: Locator;
//     private readonly settingsButtonSelector: string = 'a[href="#settings"]';

//     constructor(page: Page) {
//         //super(page)
// ;
//         this.settingsButton = page.locator('a[href="#settings"]');
//     }

//     async clickSettingsButton() {
//         //await this.waitForElementVisible(this.settingsButton);
//         //await this.clickElement(this.settingsButton);
//     }
// }
/*********home page*************/
import { Page, Locator } from "@playwright/test";


export class HomePage  {
    private readonly settingsButton: Locator;
    private readonly settingsButtonSelector: string = 'a[href="#settings"]';

    constructor(page: Page) {       
        super(page)
        this.se

        this.settingsButton = page.locator('a[href="#settings"]');
        }

    async clickSettingsButton() {
       await this.settingsButton.click()
    }
    async captureYourFeedMesg(){

    }
    
}