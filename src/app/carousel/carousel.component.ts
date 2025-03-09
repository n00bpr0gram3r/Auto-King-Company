import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { ServiceFeature } from '../interfaces/content.interface';

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
        title: this.translationService.getTranslation('services.diagnostic'),
        description: 'Advanced computerized diagnostics for accurate problem identification'
      },
      { 
        icon: 'fa-snowflake', 
        title: this.translationService.getTranslation('services.ac'),
        description: 'Complete AC system repair, recharge, and maintenance services'
      },
      { 
        icon: 'fa-laptop', 
        title: this.translationService.getTranslation('services.computer'),
        description: 'Professional ECU programming and system diagnostics'
      },
      { 
        icon: 'fa-cogs', 
        title: this.translationService.getTranslation('services.mechanical'),
        description: 'Comprehensive mechanical repairs and maintenance'
      },
      { 
        icon: 'fa-truck', 
        title: this.translationService.getTranslation('services.emergency'),
        description: 'Round-the-clock emergency roadside assistance'
      }
    ];

    // Expert Services - Focus on specialized expertise
    this.expertServices = [
      { 
        icon: 'fa-search', 
        title: 'Engine Diagnostics',
        description: 'Expert engine performance analysis and troubleshooting'
      },
      { 
        icon: 'fa-bolt', 
        title: 'Electrical Systems',
        description: 'Complete electrical system diagnosis and repair'
      },
      { 
        icon: 'fa-microchip', 
        title: 'Software Updates',
        description: 'Latest vehicle software updates and programming'
      },
      { 
        icon: 'fa-wrench', 
        title: 'Transmission Service',
        description: 'Professional transmission repair and maintenance'
      },
      { 
        icon: 'fa-ambulance', 
        title: 'Quick Response',
        description: 'Fast and reliable emergency repair service'
      }
    ];

    // Equipment Features - Focus on modern tools and technology
    this.equipmentFeatures = [
      { 
        icon: 'fa-tools', 
        title: 'Diagnostic Equipment',
        description: 'State-of-the-art diagnostic tools and scanners'
      },
      { 
        icon: 'fa-desktop', 
        title: 'Computer Systems',
        description: 'Advanced computer systems for precise diagnostics'
      },
      { 
        icon: 'fa-thermometer-half', 
        title: 'AC Service Station',
        description: 'Modern AC service and repair equipment'
      },
      { 
        icon: 'fa-car', 
        title: 'Alignment System',
        description: '3D wheel alignment and balancing system'
      },
      { 
        icon: 'fa-phone', 
        title: 'Service Support',
        description: '24/7 customer support and service tracking'
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
