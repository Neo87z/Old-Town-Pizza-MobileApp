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
  ImageURL: string;
  Description: string;
  SoloPrice: string;
  SmallPrice: string;
  MediumPrice: string;
  LargePrice: string;
  JumboPrice: string;
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
  getPizzaDetailsById(id:any){
    console.log(id)
    return this.http.get(`${environment.BaseAPiURL}/pizza/get-pizza-data-by-ID/${id}`)

    
  }

}
