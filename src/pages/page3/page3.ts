import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemsService } from '../../providers/itemsService';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemsService:ItemsService) {
    //make sure that item is a number (if coming from URL, it will be a string)
    let itemId = parseInt(navParams.get('item'));
    this.item = this.itemsService.getItemById(itemId);
  }

}
