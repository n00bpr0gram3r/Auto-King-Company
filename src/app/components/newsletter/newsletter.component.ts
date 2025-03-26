import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <!-- Newsletter Section -->
    <div class="container-fluid bg-secondary py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Newsletter Subscription -->
          <div class="col-lg-6 wow fadeInUp newsLetter" data-wow-delay="0.1s">
            <h1 class="mb-4">{{ getTranslation('newsletter.title') }}</h1>
            <p class="mb-4">{{ getTranslation('newsletter.description') }}</p>
            <form [formGroup]="newsletterForm" (ngSubmit)="onSubmit()">
              <div class="position-relative w-100">
                <input 
                  type="email" 
                  class="form-control bg-transparent w-100 py-3 ps-4 pe-5" 
                  [placeholder]="getTranslation('newsletter.form.email')"
                  formControlName="email"
                  [class.is-invalid]="isFieldInvalid('email')"
                >
                <button 
                  type="submit" 
                  class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  [disabled]="newsletterForm.invalid || isSubmitting"
                >
                  {{ getTranslation('newsletter.form.submit') }}
                </button>
              </div>
            </form>
          </div>

          <!-- Seasonal Tips -->
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="h-100 seasonalTips">
              <h1 class="mb-4">{{ getTranslation('newsletter.seasonalTips.title') }}</h1>
              <div class="accordion" id="seasonalTips">
                <div *ngFor="let tip of seasonalTips; let i = index" class="accordion-item bg-transparent">
                  <h2 class="accordion-header" [id]="'heading' + i">
                    <button 
                      class="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      [attr.data-bs-target]="'#collapse' + i"
                      [attr.aria-expanded]="false" 
                      [attr.aria-controls]="'collapse' + i"
                    >
                      {{ tip.season }}
                    </button>
                  </h2>
                  <div 
                    [id]="'collapse' + i" 
                    class="accordion-collapse collapse" 
                    [attr.aria-labelledby]="'heading' + i" 
                    data-bs-parent="#seasonalTips"
                  >
                    <div class="accordion-body">
                      <ul class="list-unstyled mb-0">
                        <li *ngFor="let maintenance of tip.maintenanceTips" class="mb-2">
                          <i class="fa fa-check text-primary me-2"></i>{{ maintenance }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .newsLetter > h1 {
      color: #D9D9D9;
    }
    .seasonalTips > h1 {
      color: #D9D9D9;
    }
    .accordion-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 10px;
    }

    .accordion-button {
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--light);
    }

    .accordion-button:not(.collapsed) {
      background-color: var(--primary);
      color: var(--light);
    }

    .accordion-button::after {
      filter: brightness(0) invert(1);
    }

    .accordion-body {
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--light);
    }

    .form-control {
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--light);
    }

    .form-control::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .form-control:focus {
      border-color: var(--primary);
      box-shadow: none;
    }

    .is-invalid {
      border-color: #dc3545 !important;
    }
  `]
})
export class NewsletterComponent {
  newsletterForm: FormGroup;
  isSubmitting = false;

  // Seasonal maintenance tips specific to Saudi climate
  seasonalTips = [
    {
      season: 'Summer (May - September)',
      maintenanceTips: [
        'Regular AC system check and cleaning',
        'Battery health inspection (heat affects battery life)',
        'Coolant level and quality check',
        'Tire pressure monitoring (heat increases pressure)',
        'UV protection for car paint and interior',
        'Air filter replacement (increased dust)'
      ]
    },
    {
      season: 'Winter (December - February)',
      maintenanceTips: [
        'Battery performance check',
        'Windshield wipers and washer fluid check',
        'Tire tread depth inspection',
        'Brake system inspection',
        'Engine oil viscosity check'
      ]
    },
    {
      season: 'Sandstorm Season',
      maintenanceTips: [
        'Air filter inspection and replacement',
        'Exterior protective coating',
        'Windshield and wiper maintenance',
        'Door and window seal check',
        'Regular exterior washing',
        'AC filter cleaning'
      ]
    },
    {
      season: 'Year-Round Tips',
      maintenanceTips: [
        'Regular oil changes every 5,000-7,500 km',
        'Monthly tire pressure check',
        'Regular brake inspection',
        'AC system maintenance',
        'Battery terminal cleaning',
        'Regular car washing to prevent sand damage'
      ]
    }
  ];

  constructor(
    private fb: FormBuilder,
    private translationService: TranslationService
  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.newsletterForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      this.isSubmitting = true;
      // Here you would typically make an API call to submit the newsletter subscription
      console.log('Newsletter subscription:', this.newsletterForm.value);
      // Reset form after submission
      setTimeout(() => {
        this.newsletterForm.reset();
        this.isSubmitting = false;
      }, 1500);
    } else {
      Object.keys(this.newsletterForm.controls).forEach(key => {
        const control = this.newsletterForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
} 