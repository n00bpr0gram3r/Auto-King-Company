import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { Value, Benefit } from '../interfaces/content.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, TopbarComponentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  translations: any = {};
  values: Value[] = [];
  benefits: Benefit[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.getCurrentTranslations().subscribe(translations => {
      this.translations = translations;
      this.initializeLists();
    });
  }

  private initializeLists() {
    // Initialize values list
    this.values = [
      { icon: 'fa-check', title: this.translationService.getTranslation('values.quality') },
      { icon: 'fa-shield-alt', title: this.translationService.getTranslation('values.integrity') },
      { icon: 'fa-lightbulb', title: this.translationService.getTranslation('values.innovation') },
      { icon: 'fa-users', title: this.translationService.getTranslation('values.customer') },
      { icon: 'fa-clock', title: this.translationService.getTranslation('values.reliability') }
    ];

    // Initialize benefits list
    this.benefits = [
      { icon: 'fa-star', title: this.translationService.getTranslation('benefits.priority') },
      { icon: 'fa-tags', title: this.translationService.getTranslation('benefits.discounts') },
      { icon: 'fa-check-circle', title: this.translationService.getTranslation('benefits.inspection') },
      { icon: 'fa-headset', title: this.translationService.getTranslation('benefits.support') },
      { icon: 'fa-gift', title: this.translationService.getTranslation('benefits.offers') }
    ];
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
