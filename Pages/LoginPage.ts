import { Page, Locator } from "@playwright/test";
import { BasePage } from "./Basepage";



export class Login_Vtiger extends BasePage{
   
   readonly user_Name: Locator;
    readonly user_password: Locator;
    readonly submite_Button: Locator;

    constructor(page: Page){
        super(page);
        page:this.page;
        this.user_Name =page.locator("//input[@name='user_name']");
        this.user_password =page.locator("//input[@name='user_password']");
        this.submite_Button=page.locator("input[id='submitButton']");

    }
   async open_Url(op_Url:string){
   await  this.hitUrl(op_Url)
   }

   async enter_UserName(value:string){
    await this.fill(this.user_Name,value)
    }
  
  async enter_Password(value:string){
    await this.fill(this.user_password,value)
    }

   async clickOn_login_Button(){
    await this.click(this.submite_Button)
    }


}





