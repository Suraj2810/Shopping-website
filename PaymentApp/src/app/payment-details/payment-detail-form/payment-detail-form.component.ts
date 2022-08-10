import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import{FormsModule, NgForm}from'@angular/forms'
import { fromEvent } from 'rxjs';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})

export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService,
   private toastr:ToastrService) { }

  ngOnInit(): void {
  }
   onsubmit(form:NgForm){
    if(this.service.formData.pmId ==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
   
  }
  insertRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res =>{ 
        this.resetform(form);
        this.service.refreshlist();
        this.toastr.success('Submitted sucessfully','Payment Detail Register')
      },
      err =>{console.log(err)}
    );

  }
  updateRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res =>{ 
        this.resetform(form);
        this.service.refreshlist();
        this.toastr.info('Updated sucessfully','Payment Detail Register')
      },
      err =>{console.log(err)}
    );
  }
resetform(form:NgForm){
  form.form.reset();
  this.service.formData = new PaymentDetail();
}
  
}
