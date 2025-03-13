import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { ServiceFeature } from '../interfaces/content.interface';
import { NewsletterComponent } from '../components/newsletter/newsletter.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NewsletterComponent],
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
  qualityServices: ServiceFeature[] = [];
  expertServices: ServiceFeature[] = [];
  equipmentFeatures: ServiceFeature[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.getCurrentTranslations().subscribe(translations => {
      this.translations = translations;
      this.initializeLists();
    });
  }

  private initializeLists() {
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
        description: this.getTranslation('serviceDetails.diagnostic.benefits.0')
      },
      { 
        icon: 'fa-bolt', 
        title: this.getTranslation('serviceDetails.mechanical.subtitle'),
        description: this.getTranslation('serviceDetails.mechanical.benefits.0')
      },
      { 
        icon: 'fa-microchip', 
        title: this.getTranslation('serviceDetails.diagnostic.benefits.2'),
        description: this.getTranslation('serviceDetails.diagnostic.benefits.3')
      },
      { 
        icon: 'fa-wrench', 
        title: this.getTranslation('services.categories.mechanical.title'),
        description: this.getTranslation('services.categories.mechanical.features.1')
      },
      { 
        icon: 'fa-ambulance', 
        title: this.getTranslation('services.process.service'),
        description: this.getTranslation('services.process.serviceDesc')
      }
    ];

    // Equipment Features - Focus on modern tools and technology
    this.equipmentFeatures = [
      { 
        icon: 'fa-tools', 
        title: this.getTranslation('serviceDetails.diagnostic.subtitle'),
        description: this.getTranslation('serviceDetails.diagnostic.benefits.1')
      },
      { 
        icon: 'fa-desktop', 
        title: this.getTranslation('serviceDetails.diagnostic.benefits.2'),
        description: this.getTranslation('serviceDetails.diagnostic.benefits.3')
      },
      { 
        icon: 'fa-thermometer-half', 
        title: this.getTranslation('services.categories.ac.title'),
        description: this.getTranslation('services.categories.ac.features.0')
      },
      { 
        icon: 'fa-car', 
        title: this.getTranslation('services.categories.mechanical.title'),
        description: this.getTranslation('services.categories.mechanical.features.3')
      },
      { 
        icon: 'fa-phone', 
        title: this.getTranslation('quote.benefits.expert.title'),
        description: this.getTranslation('quote.benefits.expert.description')
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
