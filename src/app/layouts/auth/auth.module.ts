import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from 'src/app/modules/signin/signin.component';
import { SignupComponent } from 'src/app/modules/signup/signup.component';
import { PaymentComponent } from 'src/app/modules/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
