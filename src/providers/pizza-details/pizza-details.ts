import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviorments/enviorment';
import { Observable } from 'rxjs';
/*
  Generated class for the PizzaDetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.


*/


export interface ApiResult {
  results: any;
  PizzaID: string;
  PizzaName: string;
  SelectedPizzaSize: string;
  ImageURL: string;
  Description: string;
  SoloPrice: string;
  SmallPrice: string;
  MediumPrice: string;
  LargePrice: string;
  JumboPrice: string;
  CrustType: boolean;
  MozerallCheese: boolean;
  MozerallCheese30: boolean;
  MozerallCheese50: boolean;
  MozerallCheese100: boolean;
  GoatCheese: boolean;
  FetaCheese: boolean;
  Ham: boolean;
  Salami: boolean;
  CrumbleBeacon: boolean;
  SlicedBeacon: boolean;
  Peporoni: boolean;
  ItalianSausge: boolean;
  GoundBeef: boolean;
  SeasonedChicken: boolean;
  FreshMushRooms: boolean;
  RedOnions: boolean;
  GreenPepper: boolean;
  Tomatoe: boolean;
  Olives: boolean;
  HotPepper: boolean;
  Jalapeno: boolean;
  PineApple: boolean;
  BBqsauce: boolean;
  DonairSauce: boolean;
  PizzaSauce: boolean;
  Chorizo: boolean;
  MozerallCheeseSide: String;
  GoatCheeseSide: String;
  FetaCheeseSide: String;
  HamSide: String;
  SalamiSide: String;
  CrumbleBeaconSide: String;
  SlicedBeaconSide: String;
  PeporoniSide: String;
  ItalianSausgeSide: String;
  GoundBeefSide: String;
  SeasonedChickenSide: String;
  FreshMushRoomsSide: String;
  RedOnionsSide: String;
  GreenPepperSide: String;
  TomatoeSide: String;
  OlivesSide: String;
  HotPepperSide: String;
  JalapenoSide: String;
  PineAppleSide: String;
  BBqsauceSide: String;
  DonairSauceSide: String;
  PizzaSauceSide: String;
  ChorizoSide: String;
  FianlOrderPrice: String;

  __v: number;
}
@Injectable()
export class PizzaDetailsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PizzaDetailsProvider Provider');
  }
  getPizzaDetails(): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.BaseAPiURL}/pizza/get-all-pizza-data`);

  }
  getPizzaDetailsById(id: any) {
    console.log(id)
    return this.http.get(`${environment.BaseAPiURL}/pizza/get-pizza-data-by-ID/${id}`)


  }

  getCartDetailsById(id: any) {
    console.log(id)
    return this.http.get(`${environment.BaseAPiURL}/pizza/get-user-cart/${id}`)


  }
  async AddToCart(CartDetails: any) {
    console.log(CartDetails, "Hereeeeeeeeeee")
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');


    await this.http.post(`${environment.BaseAPiURL}/pizza/update-cart`, CartDetails)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  async RemoveItemFromCart(Data: any) {

    console.log(Data, "Hereeeeeeeeeee")
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');


    await this.http.post(`${environment.BaseAPiURL}/pizza/remove-item/${Data}`, Data)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }



}
