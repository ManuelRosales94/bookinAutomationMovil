class StaysPage{
    //Close login
    public get closeLoginBtn(){
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }

    //Search Boxes Container
    public get searchFields(){
        return $('//android.widget.LinearLayout[@resource-id="com.booking:id/facet_search_box_fields"]')
    }

    public get labelFields(){
        return $$('//android.widget.TextView[@resource-id="com.booking:id/facet_search_box_basic_field_label"]')
    }


    //Destination
    public get destination(){
        return $('//android.widget.LinearLayout[@resource-id="com.booking:id/facet_search_box_accommodation_destination"]')
    }

    public get destinationInput(){
        return $('//android.widget.EditText[@resource-id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]')
    }

    public get destinationOption(){
        return $$('//android.widget.TextView[@resource-id="com.booking:id/view_disambiguation_destination_title"]')
    }

    //Date

    public get monthList(){
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.booking:id/calendar_month_list"]')
    }


    public get btnConfirmDate(){
        return $('//android.widget.Button[@resource-id="com.booking:id/facet_date_picker_confirm"]')
    }

    //Rooms and Guests

    public get roomsAndGuests(){
        return $('//android.widget.LinearLayout[@resource-id="com.booking:id/facet_search_box_accommodation_occupancy"]')
    }

    public get roomsAndGuestsOptions(){
        return $$('//android.widget.Button[@resource-id="com.booking:id/bui_input_stepper_add_button"]')
    }

    public get ageOfChild(){
        return $('//android.widget.EditText[@resource-id="android:id/numberpicker_input"]')
    }

    public get okBtn(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]')
    }

    public get applyBtn(){
        return $('//android.widget.Button[@resource-id="com.booking:id/group_config_apply_button"]')
    }

    //SearchButton
    public get searchBtn(){
        return $('//android.widget.Button[@resource-id="com.booking:id/facet_search_box_cta"]')
    }

    public async setDestination(destino: string){

        await this.destinationInput.click();
        await this.destinationInput.setValue(destino);
        await browser.pause(2500);

        await this.destinationOption[0].click();

        //(await this.destinationOption).find(async option => await option.getText() === destino).click()   
    }

    public async setDate(start: string, end: string, monthYear: string){
        const startDay = await $(`//android.view.View[@content-desc="${start} ${monthYear}"]`);
        await browser.pause(1500);
        do{
            console.log("La fecha esta en el DOM ?"+ startDay.isExisting());
            await driver.touchAction([{ action: 'longPress', x: 600, y: 830 }, { action: 'moveTo', x: 600, y: -200 }, 'release']);

        }while(await startDay.isExisting() === false);
        await startDay.click();
        await browser.pause(1500);
        const endDay = await $(`//android.view.View[@content-desc="${end} ${monthYear}"]`);
        await endDay.click();
        browser.pause(1500);
        await this.btnConfirmDate.click();
    }

    public async setRoomsAndGuests(age: string){
        await this.roomsAndGuestsOptions[2].click();
        await browser.pause(3000)

        do{
            console.log("Edad enviada por parametro: " + age)
            await driver.touchAction([{ action: 'longPress', x: 525, y: 1160 }, { action: 'moveTo', x: 525, y: -1000 }, 'release'])
        }while(await this.ageOfChild.getText() !== `${age} years old`)

        await this.okBtn.click();
        await this.applyBtn.click();
    }
}

export default new StaysPage();