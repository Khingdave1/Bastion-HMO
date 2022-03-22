import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { AuthComponent } from './layouts/auth/auth.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
