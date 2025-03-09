import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface ServiceCategory {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="text-primary text-uppercase">{{ getTranslation('services.ourServices') }}</h6>
          <h1 class="mb-5">{{ getTranslation('services.exploreServices') }}</h1>
        </div>

        <div class="row g-4">
          <div *ngFor="let category of serviceCategories; let i = index" 
               class="col-lg-4 col-md-6 wow fadeInUp" 
               [attr.data-wow-delay]="0.1 * (i + 1) + 's'">
            <div class="service-item position-relative overflow-hidden">
              <img [src]="category.image" class="img-fluid" [alt]="category.title">
              <div class="service-overlay">
                <div class="service-content">
                  <div class="d-flex align-items-center mb-3">
                    <i class="fa" [class]="category.icon + ' fa-2x text-primary'"></i>
                    <h5 class="text-white ms-3 mb-0">{{ category.title }}</h5>
                  </div>
                  <p class="text-white mb-3">{{ category.description }}</p>
                  <ul class="list-unstyled text-white">
                    <li *ngFor="let feature of category.features">
                      <i class="fa fa-check text-primary me-2"></i>{{ feature }}
                    </li>
                  </ul>
                  <a class="btn btn-primary py-2 px-4" href="#booking">
                    {{ getTranslation('services.bookNow') }}
                    <i class="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Service Process Section -->
        <div class="text-center mt-5 pt-5 wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="text-primary text-uppercase">{{ getTranslation('services.process') }}</h6>
          <h2 class="mb-5">{{ getTranslation('services.processTitle') }}</h2>
        </div>

        <div class="row g-4 mb-5">
          <div *ngFor="let step of serviceProcess; let i = index" 
               class="col-lg-3 col-md-6 wow fadeInUp" 
               [attr.data-wow-delay]="0.1 * (i + 1) + 's'">
            <div class="process-item text-center">
              <div class="process-icon mb-4">
                <i class="fa" [class]="step.icon + ' fa-3x text-primary'"></i>
                <span class="process-number">{{ i + 1 }}</span>
              </div>
              <h5>{{ step.title }}</h5>
              <p class="mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-item {
      height: 400px;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 45px rgba(0, 0, 0, .07);
    }

    .service-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .5s;
    }

    .service-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, .7);
      transition: .5s;
      opacity: 0;
      padding: 1rem;
    }

    .service-content {
      padding: 1rem;
      color: white;
      max-height: 100%;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--primary) rgba(255, 255, 255, 0.1);
    }

    .service-content::-webkit-scrollbar {
      width: 6px;
    }

    .service-content::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }

    .service-content::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 3px;
    }

    .service-item:hover .service-overlay {
      opacity: 1;
    }

    .service-item:hover img {
      transform: scale(1.1);
    }

    .service-content ul {
      margin-bottom: 1rem;
    }

    .service-content li {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .service-content h5 {
      font-size: 1.1rem;
    }

    .service-content p {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .service-item {
        height: 300px;
      }

      .service-content {
        padding: 0.75rem;
      }

      .service-content h5 {
        font-size: 1rem;
      }

      .service-content p,
      .service-content li {
        font-size: 0.85rem;
      }

      .service-content .btn {
        padding: 0.4rem 1rem;
        font-size: 0.85rem;
      }
    }

    .process-item {
      padding: 2rem;
      background: #fff;
      box-shadow: 0 0 45px rgba(0, 0, 0, .07);
      border-radius: 8px;
      position: relative;
    }

    .process-icon {
      position: relative;
      width: 80px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f6f6f6;
      border-radius: 50%;
    }

    .process-number {
      position: absolute;
      width: 25px;
      height: 25px;
      top: -5px;
      right: -5px;
      background: var(--primary);
      color: #fff;
      border-radius: 50%;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class ServicesComponent {
  serviceCategories: ServiceCategory[] = [
    {
      icon: 'fa-cog',
      title: 'Diagnostic Services',
      description: 'Complete vehicle diagnostics with advanced computerized systems',
      features: [
        'Engine Performance Analysis',
        'Electronic System Check',
        'OBD Scanning',
        'Battery Health Test',
        'Emission Testing'
      ],
      image: './assets/img/service-1.jpg'
    },
    {
      icon: 'fa-snowflake',
      title: 'AC Services',
      description: 'Full AC system maintenance and repair services',
      features: [
        'AC Performance Check',
        'Gas Recharge',
        'Compressor Service',
        'Cooling System Repair',
        'Temperature Control'
      ],
      image: './assets/img/service-2.jpg'
    },
    {
      icon: 'fa-wrench',
      title: 'Mechanical Repairs',
      description: 'Comprehensive mechanical repair and maintenance',
      features: [
        'Engine Overhaul',
        'Transmission Service',
        'Brake System',
        'Suspension Work',
        'Oil Changes'
      ],
      image: './assets/img/service-3.jpg'
    }
  ];

  serviceProcess = [
    {
      icon: 'fa-calendar-check',
      title: 'Book Appointment',
      description: 'Schedule your service online or call us'
    },
    {
      icon: 'fa-car',
      title: 'Bring Vehicle',
      description: 'Drop off your vehicle at our workshop'
    },
    {
      icon: 'fa-tools',
      title: 'Service & Repair',
      description: 'Our experts diagnose and fix issues'
    },
    {
      icon: 'fa-check-circle',
      title: 'Ready to Go',
      description: 'Collect your serviced vehicle'
    }
  ];

  constructor(private translationService: TranslationService) {}

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
} 