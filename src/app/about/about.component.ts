import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { Value, Benefit } from '../interfaces/content.interface';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, TopbarComponentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  values: Value[] = [];
  benefits: Benefit[] = [];

  constructor(
    private translationService: TranslationService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.language$.subscribe(() => {
      // Update translations when language changes
      this.updateTranslations();
    });

    // Initial translation update
    this.updateTranslations();
  }

  private updateTranslations() {
    // Update values
    this.values = [
      {
        title: this.getTranslation('values.quality'),
        icon: 'fa fa-check-circle'
      },
      {
        title: this.getTranslation('values.integrity'),
        icon: 'fa fa-shield-alt'
      },
      {
        title: this.getTranslation('values.innovation'),
        icon: 'fa fa-lightbulb'
      },
      {
        title: this.getTranslation('values.customer'),
        icon: 'fa fa-users'
      },
      {
        title: this.getTranslation('values.reliability'),
        icon: 'fa fa-clock'
      }
    ];

    // Update benefits
    this.benefits = [
      {
        title: this.getTranslation('benefits.priority'),
        icon: 'fa fa-star'
      },
      {
        title: this.getTranslation('benefits.discounts'),
        icon: 'fa fa-percentage'
      },
      {
        title: this.getTranslation('benefits.inspection'),
        icon: 'fa fa-clipboard-check'
      },
      {
        title: this.getTranslation('benefits.support'),
        icon: 'fa fa-headset'
      },
      {
        title: this.getTranslation('benefits.offers'),
        icon: 'fa fa-gift'
      }
    ];
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
