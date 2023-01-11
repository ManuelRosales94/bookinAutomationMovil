class UserData{
    
    public get firstNameInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_firstname_value"]/android.widget.EditText')
    }

    public get lastNameInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_lastname_value"]/android.widget.EditText')
    }

    public get emailInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_email_value"]/android.widget.EditText')
    }

    public get addressInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_address_value"]/android.widget.EditText')
    }

    public get zipCodeInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_zipcode_value"]/android.widget.EditText')
    }

    public get cityInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_city_value"]/android.widget.EditText')
    }

    public get countryInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_country_value"]/android.widget.EditText')
    }

    public get mobilePhoneInput(){
        return $('//javaClass[@resource-id="com.booking:id/bstage1_contact_telephone_value"]/android.widget.EditText')
    }

    public get leisureRadioBtn(){
        return $('//android.widget.RadioButton[@resource-id="com.booking:id/business_purpose_leisure"]')
    }

    public get nextStepBtn(){
        return $('//android.widget.Button[@resource-id="com.booking:id/action_button"]')
    }

    public get finalStepBtn(){
        return $('//android.widget.Button[@resource-id="com.booking:id/action_button"]')
    }
    

    public async fillInfo(firstName: string, lastName: string, email: string, address:string, zipCode:string, city:string,  country: string, mobilePhone: string){
        await this.firstNameInput.setValue(firstName);
        await browser.pause(1000)

        await this.lastNameInput.setValue(lastName);
        await browser.pause(1000)

        await this.emailInput.setValue(email);
        await browser.pause(1000)

        if(await this.addressInput.isExisting()){
            await this.addressInput.setValue(address);
            await browser.pause(1000)

            await this.zipCodeInput.setValue(zipCode);
            await browser.pause(1000)

            do{
                await driver.touchAction([{ action: 'longPress', x: 600, y: 830 }, { action: 'moveTo', x: 600, y: -400 }, 'release']);
            }while(await this.cityInput.isExisting() !== true);

            await this.cityInput.setValue(city);
            await browser.pause(1000)
        }


        await this.countryInput.clearValue();
        await browser.pause(1000);

        await this.countryInput.setValue(country);
        await browser.pause(1000)

        await this.mobilePhoneInput.setValue(mobilePhone);
        await browser.pause(1000)

        do{
            await driver.touchAction([{ action: 'longPress', x: 600, y: 830 }, { action: 'moveTo', x: 600, y: -400 }, 'release']);

        }while(await this.leisureRadioBtn.isExisting() !== true);

        await this.leisureRadioBtn.click();
        await browser.pause(1000);

        await this.nextStepBtn.click();
        await browser.pause(3000);

        await this.finalStepBtn.click();
        await browser.pause(1000);
    }
}

export default new UserData();