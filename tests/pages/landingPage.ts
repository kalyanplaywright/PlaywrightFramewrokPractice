// import { Locator,Page } from "@playwright/test";
// import BasePage from "./basePage";
// //class -segregate the things 
// export  class LandingPage extends BasePage{//inorder to use this class for pages we can use export    
//    private readonly signInButton:Locator;//nobody is supposed to change this locator as we declared readonly
//     constructor(page:Page){// a fixture model,for the Page(imported from top) we create the name as page
//         super {page}
//         this.signInButton=page.locator('//a[normalize-space()="Sign in"]')
//     }
//     async clickSignInButton(){//method is action 
//         await this.clickElement(this.signInButton)
//     }
// }
/********landing page***************/
import { Locator,Page } from "@playwright/test";
import BasePage from "./basePage";//which means dafaut then its bydefault simillarly this
//class// giving export key word to access for other
export class LandingPage extends BasePage { //using this extend keyword landpage with basepage
    private readonly signInButton:Locator //no one can change
    constructor(page:Page){
        super (page)//refering parent that is basepage code
this.signInButton = page.locator('//a[normalize-space()="Sign in"]')
    }
    async clickSignInButton(){               
        await this.clickElement(this.signInButton)    
    }   
}             