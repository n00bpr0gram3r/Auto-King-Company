import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { LanguageService } from '../services/language.service';
import { ServiceFeature } from '../interfaces/content.interface';
import { NewsletterComponent } from '../components/newsletter/newsletter.component';

interface CarouselItem {
  title: string;
  description: string;
  image: string;
}

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NewsletterComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  carouselItems: CarouselItem[] = [];
  expandedSections: { [key: string]: boolean } = {
    'quality': false,
    'expert': false,
    'equipment': false
  };

  qualityServices: ServiceItem[] = [];
  expertServices: ServiceItem[] = [];
  equipmentFeatures: ServiceItem[] = [];

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
    // Update carousel items
    this.carouselItems = [
      {
        title: this.getTranslation('premiumServices'),
        description: this.getTranslation('qualityDesc'),
        image: 'assets/img/carousel-1.jpg'
      },
      {
        title: this.getTranslation('expertRepairs'),
        description: this.getTranslation('expertDesc'),
        image: 'assets/img/carousel-2.jpg'
      },
      {
        title: this.getTranslation('trustedCare'),
        description: this.getTranslation('serviceGuarantee'),
        image: 'assets/img/carousel-3.jpg'
      }
    ];
    
    // Quality Services - Focus on diagnostic and repair capabilities
    this.qualityServices = [
      { 
        icon: 'fa-tools', 
        title: this.getTranslation('services.categories.diagnostic.title'),
        description: this.getTranslation('services.categories.diagnostic.description')
      },
      { 
        icon: 'fa-snowflake', 
        title: this.getTranslation('services.categories.ac.title'),
        description: this.getTranslation('services.categories.ac.description')
      },
      { 
        icon: 'fa-laptop', 
        title: this.getTranslation('serviceDetails.diagnostic.subtitle'),
        description: this.getTranslation('serviceDetails.diagnostic.benefits.0')
      },
      { 
        icon: 'fa-cogs', 
        title: this.getTranslation('services.categories.mechanical.title'),
        description: this.getTranslation('services.categories.mechanical.description')
      },
      { 
        icon: 'fa-truck', 
        title: this.getTranslation('services.process.service'),
        description: this.getTranslation('services.process.serviceDesc')
      }
    ];

    // Expert Services - Focus on specialized expertise
    this.expertServices = [
      { 
        icon: 'fa-search', 
        title: this.getTranslation('serviceDetails.diagnostic.subtitle'),
        description: ` ${this.getTranslation('serviceDetails.diagnostic.benefits.1')} <br> ${this.getTranslation('serviceDetails.diagnostic.benefits.2')}`
      },
      { 
        icon: 'fa-bolt', 
        title: this.getTranslation('serviceDetails.mechanical.subtitle'),
        description: `${this.getTranslation('serviceDetails.mechanical.benefits.0')} <br> ${this.getTranslation('serviceDetails.mechanical.benefits.1')} <br> ${this.getTranslation('serviceDetails.mechanical.benefits.2')}`
      },
      { 
        icon: 'fa-microchip', 
        title: this.getTranslation('serviceDetails.diagnostic.benefits.2'),
        description: ` ${this.getTranslation('serviceDetails.diagnostic.benefits.3')} <br> ${this.getTranslation('serviceDetails.diagnostic.benefits.4')}`
      },
      { 
        icon: 'fa-wrench', 
        title: this.getTranslation('services.categories.mechanical.title'),
        description: `${this.getTranslation('services.categories.mechanical.features.1')} <br> ${this.getTranslation('services.categories.mechanical.features.2')}`
      },
      { 
        icon: 'fa-ambulance', 
        title: this.getTranslation('services.process.service'),
        description: `${this.getTranslation('services.process.serviceDesc')}`
      }
    ];

    // Equipment Features - Focus on modern tools and technology
    this.equipmentFeatures = [
      { 
        icon: 'fa-tools', 
        title: this.getTranslation('serviceDetails.diagnostic.subtitle'),
        description: `${this.getTranslation('serviceDetails.diagnostic.benefits.3')} <br> ${this.getTranslation('serviceDetails.diagnostic.benefits.4')}`
      },
      { 
        icon: 'fa-desktop', 
        title: this.getTranslation('serviceDetails.diagnostic.benefits.2'),
        description: `${this.getTranslation('serviceDetails.diagnostic.benefits.3')} <br> ${this.getTranslation('serviceDetails.diagnostic.benefits.4')}`
      },
      { 
        icon: 'fa-thermometer-half', 
        title: this.getTranslation('services.categories.ac.title'),
        description: `${this.getTranslation('services.categories.ac.features.0')} <br> ${this.getTranslation('services.categories.ac.features.1')} <br> ${this.getTranslation('services.categories.ac.features.2')} <br> ${this.getTranslation('services.categories.ac.features.3')}`
      },
      { 
        icon: 'fa-car', 
        title: this.getTranslation('services.categories.mechanical.title'),
        description: ` ${this.getTranslation('services.categories.mechanical.features.3')} <br> ${this.getTranslation('services.categories.mechanical.features.4')}`
      }
     
    ];
  }

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  isExpanded(section: string): boolean {
    return this.expandedSections[section];
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
