import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import{FormsModule, NgForm}from'@angular/forms';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { Toast, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: []
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService,
    private toastr:ToastrService) { }


  ngOnInit() {
    this.service.refreshlist();
  }
    populateForm(selectedRecord:PaymentDetail){
      this.service.formData =Object.assign({},selectedRecord);
 
   }
   onDelete(pmId:number) {
   if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(pmId)
      .subscribe(
        res => {
          //this.resetform(form);
          this.service.refreshlist();
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            
            console.log(err)
          });

   
        }
        
  }
  
}