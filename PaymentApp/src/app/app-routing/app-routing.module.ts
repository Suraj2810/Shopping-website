import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../component/cart/cart.component';
import { ProductComponent } from '../component/product/product.component';
import { PaymentDetailFormComponent } from '../payment-details/payment-detail-form/payment-detail-form.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

const routes: Routes = [
  {path:'', redirectTo:'product',pathMatch:'full'},
  {path:'product', component: ProductComponent},
  {path:'cart', component: CartComponent},
  {path:'payment-details',component:PaymentDetailsComponent},
  {path:'payment-detail-form',component:PaymentDetailFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }