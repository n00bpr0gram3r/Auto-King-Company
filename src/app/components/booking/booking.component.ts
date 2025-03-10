import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-booking-special',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-6 py-5">
            <div class="py-5">
              <h1 class="text-white mb-4">{{ getTranslation('booking.title') }}</h1>
              <p class="text-white mb-0">{{ getTranslation('booking.description') }}</p>
              
              <!-- Service Features -->
              <div class="row g-4 mt-4">
                <div *ngFor="let feature of bookingFeatures" class="col-md-6">
                  <div class="d-flex align-items-center">
                    <i class="fa" [class]="feature.icon + ' fa-2x text-primary me-3'"></i>
                    <div>
                      <h5 class="text-white">{{ getTranslation(feature.titleKey) }}</h5>
                      <p class="text-white mb-0">{{ getTranslation(feature.descriptionKey) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
              <h1 class="text-white mb-4">{{ getTranslation('booking.formTitle') }}</h1>
              <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()">
                <div class="row g-3">
                  <div class="col-12 col-sm-6">
                    <input 
                      type="text" 
                      class="form-control border-0" 
                      [placeholder]="getTranslation('booking.form.name')"
                      formControlName="name"
                      [class.is-invalid]="isFieldInvalid('name')"
                    >
                    <div *ngIf="isFieldInvalid('name')" class="invalid-feedback">
                      {{ getTranslation('errors.required') }}
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <input 
                      type="email" 
                      class="form-control border-0" 
                      [placeholder]="getTranslation('booking.form.email')"
                      formControlName="email"
                      [class.is-invalid]="isFieldInvalid('email')"
                    >
                    <div *ngIf="isFieldInvalid('email')" class="invalid-feedback">
                      {{ getTranslation('errors.email') }}
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <input 
                      type="tel" 
                      class="form-control border-0" 
                      [placeholder]="getTranslation('booking.form.phone')"
                      formControlName="phone"
                      [class.is-invalid]="isFieldInvalid('phone')"
                    >
                    <div *ngIf="isFieldInvalid('phone')" class="invalid-feedback">
                      {{ getTranslation('errors.phone') }}
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <select 
                      class="form-select border-0" 
                      formControlName="service"
                      [class.is-invalid]="isFieldInvalid('service')"
                    >
                      <option value="">{{ getTranslation('booking.form.selectService') }}</option>
                      <option *ngFor="let service of services" [value]="service.value">
                        {{ getTranslation(service.labelKey) }}
                      </option>
                    </select>
                    <div *ngIf="isFieldInvalid('service')" class="invalid-feedback">
                      {{ getTranslation('errors.required') }}
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <input 
                      type="date" 
                      class="form-control border-0" 
                      formControlName="date"
                      [class.is-invalid]="isFieldInvalid('date')"
                    >
                    <div *ngIf="isFieldInvalid('date')" class="invalid-feedback">
                      {{ getTranslation('errors.invalidDate') }}
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <select 
                      class="form-select border-0" 
                      formControlName="time"
                      [class.is-invalid]="isFieldInvalid('time')"
                    >
                      <option value="">{{ getTranslation('booking.form.selectTime') }}</option>
                      <option *ngFor="let slot of timeSlots" [value]="slot.value">
                        {{ getTranslation(slot.labelKey) }}
                      </option>
                    </select>
                    <div *ngIf="isFieldInvalid('time')" class="invalid-feedback">
                      {{ getTranslation('errors.invalidTime') }}
                    </div>
                  </div>
                  <div class="col-12">
                    <textarea 
                      class="form-control border-0" 
                      rows="5"
                      [placeholder]="getTranslation('booking.form.message')"
                      formControlName="message"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button 
                      class="btn btn-secondary w-100 py-3" 
                      type="submit"
                      [disabled]="bookingForm.invalid || isSubmitting"
                    >
                      {{ getTranslation('booking.form.submit') }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .booking {
      background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(../../../assets/img/carousel-bg-2.jpg) center center no-repeat;
      background-size: cover;
    }
    
    .form-control, .form-select {
      height: 45px;
    }
    
    .form-control:focus,
    .form-select:focus {
      box-shadow: none;
      border-color: var(--primary);
    }
    
    textarea.form-control {
      height: auto;
    }
    
    .is-invalid {
      border-color: #dc3545 !important;
    }

    .invalid-feedback {
      display: block;
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }
  `]
})
export class BookingComponent {
  bookingForm: FormGroup;
  isSubmitting = false;

  bookingFeatures = [
    {
      icon: 'fa-check-circle',
      titleKey: 'booking.features.professional.title',
      descriptionKey: 'booking.features.professional.description'
    },
    {
      icon: 'fa-clock',
      titleKey: 'booking.features.schedule.title',
      descriptionKey: 'booking.features.schedule.description'
    },
    {
      icon: 'fa-tools',
      titleKey: 'booking.features.experts.title',
      descriptionKey: 'booking.features.experts.description'
    },
    {
      icon: 'fa-shield-alt',
      titleKey: 'booking.features.warranty.title',
      descriptionKey: 'booking.features.warranty.description'
    }
  ];

  services = [
    { value: 'diagnostic', labelKey: 'booking.services.diagnostic' },
    { value: 'ac', labelKey: 'booking.services.ac' },
    { value: 'mechanical', labelKey: 'booking.services.mechanical' },
    { value: 'electrical', labelKey: 'booking.services.electrical' },
    { value: 'computer', labelKey: 'booking.services.computer' },
    { value: 'gearbox', labelKey: 'booking.services.gearbox' },
    { value: 'engine', labelKey: 'booking.services.engine' },
    { value: 'periodic', labelKey: 'booking.services.periodic' },
    { value: 'fahas', labelKey: 'booking.services.fahas' },
    { value: 'suspension', labelKey: 'booking.services.suspension' },
    { value: 'brake', labelKey: 'booking.services.brake' },
    { value: 'oil', labelKey: 'booking.services.oil' },
    { value: 'battery', labelKey: 'booking.services.battery' },
    { value: 'steering', labelKey: 'booking.services.steering' },
    { value: 'exhaust', labelKey: 'booking.services.exhaust' },
    { value: 'cooling', labelKey: 'booking.services.cooling' },
    { value: 'transmission', labelKey: 'booking.services.transmission' },
    { value: 'alignment', labelKey: 'booking.services.alignment' },
    { value: 'fuel', labelKey: 'booking.services.fuel' },
    { value: 'clutch', labelKey: 'booking.services.clutch' },
    { value: 'radiator', labelKey: 'booking.services.radiator' },
    { value: 'timing', labelKey: 'booking.services.timing' },
    { value: 'inspection', labelKey: 'booking.services.inspection' }
  ];

  timeSlots = [
    { value: '09:00', labelKey: 'booking.timeSlots.slot_09_00' },
    { value: '10:00', labelKey: 'booking.timeSlots.slot_10_00' },
    { value: '11:00', labelKey: 'booking.timeSlots.slot_11_00' },
    { value: '12:00', labelKey: 'booking.timeSlots.slot_12_00' },
    { value: '14:00', labelKey: 'booking.timeSlots.slot_14_00' },
    { value: '15:00', labelKey: 'booking.timeSlots.slot_15_00' },
    { value: '16:00', labelKey: 'booking.timeSlots.slot_16_00' },
    { value: '17:00', labelKey: 'booking.timeSlots.slot_17_00' },
    { value: '18:00', labelKey: 'booking.timeSlots.slot_18_00' },
    { value: '19:00', labelKey: 'booking.timeSlots.slot_19_00' },
    { value: '20:00', labelKey: 'booking.timeSlots.slot_20_00' }
  ];

  constructor(
    private fb: FormBuilder,
    private translationService: TranslationService
  ) {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.bookingForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.isSubmitting = true;
      // Here you would typically make an API call to submit the booking
      console.log('Booking form submitted:', this.bookingForm.value);
      // Reset form after submission
      setTimeout(() => {
        this.bookingForm.reset();
        this.isSubmitting = false;
      }, 1500);
    } else {
      Object.keys(this.bookingForm.controls).forEach(key => {
        const control = this.bookingForm.get(key);
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