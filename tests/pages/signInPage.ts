/***************signInpage*************/
import { Locator,Page } from "@playwright/test"
export class SignInPage {

private readonly emailIdTextBox:Locator
private readonly passwordTextBox:Locator
private readonly signInButton:Locator

    constructor(page:Page){
        this.emailIdTextBox = page.locator('input[placeholder="Email"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }
    async enterEmailId(emailID:string){               
        await this.emailIdTextBox.fill(emailID)    
    }
    async enterPassWord(passWord:string){               
        await this.passwordTextBox.fill(passWord)    
    }
    async clickOnSignIn(){               
        await this.signInButton.click()    
    }

}             