import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { ItemsService } from '../providers/itemsService';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3
  ],
  imports: [
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: Page1, name:'Page 1', segment:'page1'},
        {component: Page2, name:'Page 2', segment:'page2'},
        {component: Page3, name:'Page 3', segment:'page2/:item', defaultHistory:[Page2]},
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ItemsService]
})
export class AppModule {}
