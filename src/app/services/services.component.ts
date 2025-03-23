import { Component } from '@angular/core';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    TopbarComponentComponent,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private translationService: TranslationService) { }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
