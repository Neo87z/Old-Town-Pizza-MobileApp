import { Component, Inject } from '@angular/core';
import { Events, App } from 'ionic-angular';
import { Constants } from '../../models/constants.models';
import { APP_CONFIG, AppConfig } from '../../app/app.config'; 
import { Helper } from '../../models/helper.models';
import { Sign_inPage } from '../sign_in/sign_in';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private defaultLanguageCode;
  darkModeStatus: string | boolean;

  constructor(@Inject(APP_CONFIG) private config: AppConfig, private events: Events, private app: App) {
    this.darkModeStatus = Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK;
    this.defaultLanguageCode = this.config.availableLanguages[0].code;
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
    if (defaultLang) this.defaultLanguageCode = defaultLang;
  }

  onLanguageClick(language) {
    this.defaultLanguageCode = language.code;
  }

  languageConfirm() {
    this.events.publish('language:selection', this.defaultLanguageCode);
    window.localStorage.setItem(Constants.KEY_DEFAULT_LANGUAGE, this.defaultLanguageCode);
    this.app.getRootNav().setRoot(Sign_inPage);
  }

  onDarkMode() {
    document.body.setAttribute('class', this.darkModeStatus ? 'dark-theme' : 'light-theme');
    Helper.seThemeMode(this.darkModeStatus ? Constants.THEME_MODE_DARK : Constants.THEME_MODE_LIGHT);
  }

}
