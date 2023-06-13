import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { Add_addressPage } from '../pages/add_address/add_address';
import { CartPage } from '../pages/cart/cart';
import { Contact_usPage } from '../pages/contact_us/contact_us';
import { Delivery_infoPage } from '../pages/delivery_info/delivery_info';
import { Deliveryman_infoPage } from '../pages/deliveryman_info/deliveryman_info';
import { Explore_menuPage } from '../pages/explore_menu/explore_menu';
import { FavoritesPage } from '../pages/favorites/favorites';
import { HomePage } from '../pages/home/home';
import { Item_infoPage } from '../pages/item_info/item_info';
import { My_ordersPage } from '../pages/my_orders/my_orders';
import { My_profilePage } from '../pages/my_profile/my_profile';
import { Offers_discountsPage } from '../pages/offers_discounts/offers_discounts';
import { Order_infoPage } from '../pages/order_info/order_info';
import { Order_placedPage } from '../pages/order_placed/order_placed';
import { Ordered_itemsPage } from '../pages/ordered_items/ordered_items';
import { PaymentPage } from '../pages/payment/payment';
import { RegisterPage } from '../pages/register/register';
import { Select_locationPage } from '../pages/select_location/select_location';
import { Sign_inPage } from '../pages/sign_in/sign_in';
import { VerificationPage } from '../pages/verification/verification';
import { OrderTypePage } from '../pages/order-type/order-type';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APP_CONFIG, BaseAppConfig } from './app.config';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';
import { BuyAppAlertPage } from '../pages/buyappalert/buyappalert';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {DeliveryPage} from '../pages/delivery/delivery';
import {StorePage} from '../pages/store/store';
import { PizzaDetailsProvider } from '../providers/pizza-details/pizza-details';
import { ProvidersCustomerDataProvider } from '../providers/providers-customer-data/providers-customer-data';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Add_addressPage,
    CartPage,
    Contact_usPage,
    Delivery_infoPage,
    Deliveryman_infoPage,
    Explore_menuPage,
    FavoritesPage,
    HomePage,
    Item_infoPage,
    My_ordersPage,
    My_profilePage,
    Offers_discountsPage,
    Order_infoPage,
    Order_placedPage,
    Ordered_itemsPage,
    PaymentPage,
    RegisterPage,
    Sign_inPage,
    Select_locationPage,
    VerificationPage,
    Vt_popupPage,
    ManagelanguagePage,
    BuyAppAlertPage,
    SettingsPage,
    OrderTypePage,
    DeliveryPage,
    StorePage

  ], imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Add_addressPage,
    CartPage,
    Contact_usPage,
    Delivery_infoPage,
    Deliveryman_infoPage,
    Explore_menuPage,
    FavoritesPage,
    HomePage,
    Item_infoPage,
    My_ordersPage,
    My_profilePage,
    Offers_discountsPage,
    Order_infoPage,
    Order_placedPage,
    Ordered_itemsPage,
    PaymentPage,
    RegisterPage,
    Select_locationPage,
    Sign_inPage,
    VerificationPage,
    Vt_popupPage,
    ManagelanguagePage,
    BuyAppAlertPage,
    SettingsPage,
    OrderTypePage,
    DeliveryPage,
    StorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,InAppBrowser,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    
    PizzaDetailsProvider,
    ProvidersCustomerDataProvider
  ]
})
export class AppModule { }
