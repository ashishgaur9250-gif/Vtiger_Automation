import {Page , Locator} from "@playwright/test";


export class BasePage{

  page:Page;
    
    constructor(page: Page) {
        this.page = page;
    }

   /**
     * It is used to open the url
     * @param url 
     */
    async hitUrl(url: string): Promise<void> {
        await this.page.goto(url);
    }
 
   async click(element:Locator){
    await element.click();    
   }
  

   async fill(element:Locator,value:string){
    await element.fill(value);
   }
     
   




}










