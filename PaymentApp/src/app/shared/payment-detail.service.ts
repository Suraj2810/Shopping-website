import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  constructor(private http:HttpClient) { } 

  //readonly baseURL = 'http://localhost:34869/api/PaymentDetail';


  formData: PaymentDetail= new PaymentDetail();
  list :PaymentDetail[];

 
  readonly baseURL = 'http://localhost:34869/api/PaymentDetail'
  postPaymentDetail(){
   return this.http.post(this.baseURL,this.formData);
  }
  putPaymentDetail(){
    return this.http.put('${this.baseURL}/${this.formData.pmId}',this.formData);
   }
   deletePaymentDetail(id:number){
    return this.http.delete('${this.baseURL}/${this.formData.pmId}/${id}');

   }
  refreshlist(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res =>this.list = res as PaymentDetail[]);
  }
}


 