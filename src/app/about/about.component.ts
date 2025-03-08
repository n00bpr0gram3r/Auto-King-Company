import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, TopbarComponentComponent, PageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  expandedSections: { [key: string]: boolean } = {
    'history': false,
    'mission': false,
    'values': false
  };

  translations: any = {};

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.getCurrentTranslations().subscribe(translations => {
      this.translations = translations;
    });
  }

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  isExpanded(section: string): boolean {
    return this.expandedSections[section];
  }

  getTranslation(key: string): string {
    return this.translations[key] || key;
  }
}
