import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container-fluid quote my-5 py-5">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5">
            <div class="bg-primary rounded p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="display-5 text-white mb-5">{{ getTranslation('quote.title') }}</h1>
              <form [formGroup]="quoteForm" (ngSubmit)="onSubmit()">
                <div class="row g-3">
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control border-0"
                      [placeholder]="getTranslation('quote.form.name')"
                      formControlName="name"
                      [class.is-invalid]="isFieldInvalid('name')"
                    >
                  </div>
                  <div class="col-sm-12">
                    <input
                      type="tel"
                      class="form-control border-0"
                      [placeholder]="getTranslation('quote.form.phone')"
                      formControlName="phone"
                      [class.is-invalid]="isFieldInvalid('phone')"
                    >
                  </div>
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control border-0"
                      [placeholder]="getTranslation('quote.form.carModel')"
                      formControlName="carModel"
                      [class.is-invalid]="isFieldInvalid('carModel')"
                    >
                  </div>
                  <div class="col-sm-12">
                    <select
                      class="form-select border-0"
                      formControlName="service"
                      [class.is-invalid]="isFieldInvalid('service')"
                    >
                      <option value="">{{ getTranslation('quote.form.selectService') }}</option>
                      <option *ngFor="let service of services" [value]="service.value">
                        {{ service.label }}
                      </option>
                    </select>
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control border-0"
                      rows="4"
                      [placeholder]="getTranslation('quote.form.description')"
                      formControlName="description"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button 
                      class="btn btn-secondary w-100 py-3" 
                      type="submit"
                      [disabled]="quoteForm.invalid || isSubmitting"
                    >
                      {{ getTranslation('quote.form.submit') }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="wow fadeIn" data-wow-delay="0.1s">
              <h1 class="mb-4">{{ getTranslation('quote.getQuote') }}</h1>
              <p class="mb-4">{{ getTranslation('quote.description') }}</p>
              <div class="row g-4 mb-3 pb-3">
                <div *ngFor="let benefit of quoteBenefits" class="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div class="d-flex">
                    <div class="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style="width: 45px; height: 45px;">
                      <span class="fw-bold text-secondary">0{{ benefit.id }}</span>
                    </div>
                    <div class="ps-3">
                      <h6>{{ benefit.title }}</h6>
                      <span>{{ benefit.description }}</span>
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
    .quote {
      background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(assets/img/carousel-bg-1.jpg) center center no-repeat;
      background-size: cover;
    }

    .form-control, .form-select {
      height: 45px;
    }

    .form-control:focus,
    .form-select:focus {
      box-shadow: none;
      border-color: var(--secondary);
    }

    textarea.form-control {
      height: auto;
    }

    .is-invalid {
      border-color: #dc3545 !important;
    }
  `]
})
export class GetQuoteComponent {
  quoteForm: FormGroup;
  isSubmitting = false;

  services = [
    { value: 'diagnostic', label: 'Diagnostic Service' },
    { value: 'ac', label: 'AC Service' },
    { value: 'mechanical', label: 'Mechanical Repair' },
    { value: 'electrical', label: 'Electrical Service' },
    { value: 'computer', label: 'Computer Scanning' }
  ];

  quoteBenefits = [
    {
      id: 1,
      title: 'Fast Response',
      description: 'Get your quote within 30 minutes'
    },
    {
      id: 2,
      title: 'Competitive Pricing',
      description: 'Best rates in the Eastern Province'
    },
    {
      id: 3,
      title: 'Transparent Pricing',
      description: 'No hidden costs or surprise charges'
    },
    {
      id: 4,
      title: 'Expert Assessment',
      description: 'Professional evaluation by certified technicians'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private translationService: TranslationService
  ) {
    this.quoteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      carModel: ['', Validators.required],
      service: ['', Validators.required],
      description: ['']
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.quoteForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.quoteForm.valid) {
      this.isSubmitting = true;
      // Here you would typically make an API call to submit the quote request
      console.log('Quote form submitted:', this.quoteForm.value);
      // Reset form after submission
      setTimeout(() => {
        this.quoteForm.reset();
        this.isSubmitting = false;
      }, 1500);
    } else {
      Object.keys(this.quoteForm.controls).forEach(key => {
        const control = this.quoteForm.get(key);
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