import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  expandedSections: { [key: string]: boolean } = {
    'quality': false,
    'expert': false,
    'equipment': false
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
