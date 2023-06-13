import { Component, Inject, ViewChild } from '@angular/core';
import { Events, MenuController, ModalController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Deliveryman_infoPage } from '../pages/deliveryman_info/deliveryman_info';
import { Explore_menuPage } from '../pages/explore_menu/explore_menu';
import { Offers_discountsPage } from '../pages/offers_discounts/offers_discounts';
import { FavoritesPage } from '../pages/favorites/favorites';
import { My_ordersPage } from '../pages/my_orders/my_orders';
import { My_profilePage } from '../pages/my_profile/my_profile';
import { Contact_usPage } from '../pages/contact_us/contact_us';
import { Sign_inPage } from '../pages/sign_in/sign_in';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { ManagelanguagePage } from '../pages/managelanguage/managelanguage';
import { AppConfig, APP_CONFIG } from './app.config';
import { Constants } from '../models/constants.models';
import { Vt_popupPage } from '../pages/vt_popup/vt_popup';
import { SettingsPage } from '../pages/settings/settings';
import { Helper } from '../models/helper.models';

import { BuyAppAlertPage } from '../pages/buyappalert/buyappalert';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  private Login_Status: any;
  private Show_Header : any;
  private Customer_FirstName: any;
  private Customer_LasteName: any;

  rootPage: any = HomePage;
  rtlSide: string = "left"

  pages: Array<{ title: string, component: any }>;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private platform: Platform, private statusBar: StatusBar,
    private splashScreen: SplashScreen, public translate: TranslateService, private modalCtrl: ModalController,
    private menu: MenuController, private events: Events) {
    this.initializeApp();
    events.subscribe('language:selection', (language) => {
      this.globalize(language);
    });
  }

  ngOnInit(): void {

    this.Login_Status = window.localStorage.getItem('Login_Status')
    if (this.Login_Status == "False") {
      this.Customer_FirstName = "false"
      this.Show_Header=false
    } else {
      this.Show_Header=true
      this.Customer_FirstName = window.localStorage.getItem('FIRST_NAME')
      this.Customer_FirstName=this.capitalizeFirstLetter(this.Customer_FirstName);
    }

  }
  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  initializeApp() {
    if (this.config.demoMode && this.platform.is('cordova') && !window.localStorage.getItem(Constants.KEY_IS_DEMO_MODE)) {
      window.localStorage.setItem(Constants.KEY_IS_DEMO_MODE, "true");
      this.rootPage = SettingsPage;
      setTimeout(() => this.presentModal(), 30000);
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
      this.darkModeSetting();
      setTimeout(() => this.splashScreen.hide(), 3000);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }


  setDirectionAccordingly(lang: string) {
    this.rtlSide = "left";
    switch (lang) {
      case 'ar': {
        this.platform.setDir('ltr', false);
        this.platform.setDir('rtl', true);
        this.rtlSide = "right";
        break;
      }
      default: {
        this.platform.setDir('rtl', false);
        this.platform.setDir('ltr', true);
        break;
      }
    }
  }

  getSideOfCurLang() {
    return this.platform.dir() === 'rtl' ? "right" : "left";
  }

  getSuitableLanguage(language) {
    language = language.substring(0, 2).toLowerCase();
    console.log('check for: ' + language);
    return this.config.availableLanguages.some(x => x.code == language) ? language : 'en';
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  home() {
    this.nav.setRoot(HomePage);
  }
  deliveryman_info() {
    this.nav.setRoot(Deliveryman_infoPage);
  }
  explore_menu() {
    this.nav.setRoot(Explore_menuPage);
  }
  offers_discounts() {
    this.nav.setRoot(Offers_discountsPage);
  }
  favorites() {
    this.nav.setRoot(FavoritesPage);
  }
  my_orders() {
    this.nav.setRoot(My_ordersPage);
  }
  my_profile() {
    this.nav.setRoot(My_profilePage);
  }
  contact_us() {
    this.nav.setRoot(Contact_usPage);
  }
  sign_in() {
    this.nav.setRoot(Sign_inPage);
  }
  settings() {
    this.nav.setRoot(SettingsPage);
  }


  async presentModal() {
    let modal = this.modalCtrl.create(Vt_popupPage);
    modal.onDidDismiss((data) => { });
    await modal.present();
  }

  buyThisApp() {
    let modal = this.modalCtrl.create(BuyAppAlertPage);
    modal.present();
  }

  darkModeSetting() {
    document.body.setAttribute('class', (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK ? 'dark-theme' : 'light-theme'));
  }
}
