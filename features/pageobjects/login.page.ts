class LoginPage {
    public get closeBtn(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    public async closeLogin() {
        //await this.closeBtn.click();
        await browser.pause(5000);
        await browser.back();
    }
    
}

export default new LoginPage();
