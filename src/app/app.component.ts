import { Component } from '@angular/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bastion';

  constructor(private seoService: SeoService) {

    // Update the routes Title
    this.seoService.updateTitle();
  }
}
