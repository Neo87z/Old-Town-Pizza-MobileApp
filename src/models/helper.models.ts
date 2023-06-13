import { Constants } from "./constants.models";

export class Helper {
    static seThemeMode(status: string) {
        window.localStorage.setItem(Constants.KEY_DARK_MODE, status);
        window.localStorage.setItem('USER', 'SHEHAN');
    }
    static getThemeMode(defaultTheme: string) {
        let toReturn = window.localStorage.getItem(Constants.KEY_DARK_MODE);
        console.log(window.localStorage.getItem('USER'))
        if (!toReturn) toReturn = defaultTheme;
        return toReturn;
    }
}