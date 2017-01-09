import { Component } from '@angular/core';
import { Page3 } from '../page3/page3';
import { ItemsService } from '../../providers/itemsService';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {


  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsService: ItemsService) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page3, {
      item: item.id
    });
  }
}
