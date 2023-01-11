class BookingStay {
  //SearchButton
  public get searchBtn() {
    return $(
      '//android.widget.Button[@resource-id="com.booking:id/facet_search_box_cta"]'
    );
  }

  //Properties

  public get signInCard(){
    return $('//android.widget.Button[@resource-id="com.booking:id/bui_banner_close_button"]');
  }
  public get property() {
    return $$(
      '//android.widget.FrameLayout[@resource-id="com.booking:id/results_list_facet"]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup'
    );
  }

  //Rooms

  public get selectRoomBtn() {
    return $(
      '//android.widget.Button[@resource-id="com.booking:id/select_room_cta"]'
    );
  }

  //text comparation
  public get selectItemText() {
    return $(
      '//android.widget.TextView[@resource-id="com.booking:id/rooms_item_select_text_view"]'
    );
  }

  public get saveRoomPref() {
    return $(
      '//android.widget.Button[@resource-id="com.booking:id/bottom_sheet_selector_confirm_cta"]'
    );
  }

  public get confirmRoomPref() {
    return $(
      '//android.widget.Button[@resource-id="com.booking:id/room_pref_select"]'
    );
  }

  public get reserveBtn() {
    return $(
      '//android.widget.Button[@resource-id="com.booking:id/main_action"]'
    );
  }

  public async chooseStay() {
    await this.searchBtn.click();
    await browser.pause(5000);

    if(await this.signInCard.isExisting()){
      await this.signInCard.click();
      await browser.pause(1000);
    }

    await this.property[2].click();
    await browser.pause(5000);
    await this.selectRoomBtn.click();
    await browser.pause(1500);

    do {
      await driver.touchAction([
        { action: "longPress", x: 500, y: 1000 },
        { action: "moveTo", x: 500, y: -100 },
        "release",
      ]);
    } while ((await this.selectItemText.isExisting()) !== true);
    
    if(await this.confirmRoomPref.isExisting()){
      await this.confirmRoomPref.click();
      await browser.pause(1000);
    }
   await this.selectItemText.click();

    await this.reserveBtn.click();
    await browser.pause(2000);
    await browser.back();
  }
}

export default new BookingStay();
