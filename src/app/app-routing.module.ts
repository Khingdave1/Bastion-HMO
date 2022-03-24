import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { BlogComponent } from './modules/blog/blog.component';
import { CartSummaryComponent } from './modules/cart-summary/cart-summary.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CorporateComponent } from './modules/corporate/corporate.component';
import { HomeComponent } from './modules/home/home.component';
import { IndividualFamilyComponent } from './modules/individual-family/individual-family.component';
import { ProviderComponent } from './modules/provider/provider.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { SmallBusinessComponent } from './modules/small-business/small-business.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'individual',
        component: IndividualFamilyComponent,
        data: {
          title: 'Plan',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'corporate',
        component: CorporateComponent,
        data: {
          title: 'Corporate',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'small-business',
        component: SmallBusinessComponent,
        data: {
          title: 'Small Business',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'blog',
        component: BlogComponent,
        data: {
          title: 'Blog',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'provider',
        component: ProviderComponent,
        data: {
          title: 'Provider',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About us',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact us',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'cart-summary',
        component: CartSummaryComponent,
        data: {
          title: 'Cart summary',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        data: {
          title: 'Sign in',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: 'Sign up',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
