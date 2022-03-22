import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndividualFamilyComponent } from 'src/app/modules/individual-family/individual-family.component';
import { CorporateComponent } from 'src/app/modules/corporate/corporate.component';
import { SmallBusinessComponent } from 'src/app/modules/small-business/small-business.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { AppDownloadComponent } from 'src/app/modules/app-download/app-download.component';
import { ProviderComponent } from 'src/app/modules/provider/provider.component';
import { CartSummaryComponent } from 'src/app/modules/cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    IndividualFamilyComponent,
    CorporateComponent,
    SmallBusinessComponent,
    AboutComponent,
    ContactComponent,
    AppDownloadComponent,
    ProviderComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DefaultModule { }
