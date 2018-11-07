import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentComponent} from './payment.component';
import {PaymentService} from './payment.service';
import {NgxStripeModule} from 'ngx-stripe';
import {environment} from '../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  exports: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    NgxStripeModule.forRoot(environment.stripe_publishable_key),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
