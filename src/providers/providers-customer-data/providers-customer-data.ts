import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviorments/enviorment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
/*
  Generated class for the ProvidersCustomerDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers

  
  and Angular DI.
*/

export interface ApiResult {
  CustomerID: any,
  CustomerFirstName: any,
  CustomerLastName: any,
  CustomerEmailAdress: any,
  CustomerMobileNumber: any,
  Passwored: any,
  CustomerAdress: any,
  CustomerCity: any,
  __v: number;

}



@Injectable()
export class ProvidersCustomerDataProvider {
  private Logindate: any;

  constructor(public http: HttpClient) {
    console.log('Hello ProvidersCustomerDataProvider Provider');
  }

  async RegisterCustomer(CartDetails: any) {
    console.log(CartDetails, "Hereeeeeeeeeee")
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');


    await this.http.post(`${environment.BaseAPiURL}/customer/add-customer`, CartDetails)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  getPizzaDetails(): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.BaseAPiURL}/pizza/get-all-pizza-data`);

  }

  async LoginVerification(CartDetails: any): Promise<any> {
    console.log(CartDetails, "Hereeeeeeeeeee");
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    try {
      const response = await this.http.post(`${environment.BaseAPiURL}/customer/customer-login`, CartDetails)
        .toPromise();

      console.log(response, "Data here");

      this.Logindate = response;

      return this.Logindate;
    } catch (error) {
      console.log(error);
      this.Logindate = error;
      return this.Logindate;
    }
  }


}
