import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { IndividualFamilyComponent } from './modules/individual-family/individual-family.component';

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
        path: 'plan',
        component: IndividualFamilyComponent,
        data: {
          title: 'Plan',
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
