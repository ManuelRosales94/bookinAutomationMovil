class CardData{
    public get cardNumberInput(){
        return $('//android.widget.EditText[@resource-id="com.booking:id/new_credit_card_number_edit"]')
    }

    public get cardTypeSpinner(){
        return $('//android.widget.Spinner[@resource-id="com.booking:id/new_credit_card_type_spinner"]')
    }

    public get cardTypeList(){
        return $$('//android.widget.CheckedTextView[@resource-id="android:id/text1"]');
    }

    public get expirationDateInput(){
        return $('//android.widget.EditText[@resource-id="com.booking:id/new_credit_card_expiry_date_edit"]')
    }

    public get cvcInput(){
        return $('//android.widget.EditText[@resource-id="com.booking:id/new_credit_card_cvc_edit_text"]')
    }

    public get bookNowBtn(){
        return $('//android.widget.Button[@resource-id="com.booking:id/action_button"]')
    }

    public async finalStep(cardNumber: string, cardType: string, expirationDate: string){
        if( await this.cardNumberInput.isExisting()){
            await this.cardNumberInput.setValue(cardNumber);
            await browser.pause(1000);
    
            await this.cardTypeSpinner.click();
            await browser.pause(1000);
    
            await this.cardTypeList.forEach(async (option) =>{
                if (await option.getText() === cardType) {
                    option.click();
                }
               })
            await browser.pause(1000);   
    
            await this.expirationDateInput.setValue(expirationDate);
            await browser.pause(1000);
            
            await browser.pause(3000);
            await this.bookNowBtn.click();
        }
    }
}

export default new CardData();