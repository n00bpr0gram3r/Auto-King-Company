import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '../services/translation.service';
import { ApiService } from '../services/api.service';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TopbarComponentComponent,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  bookingForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

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
    private translationService: TranslationService,
    private apiService: ApiService
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
      this.submitSuccess = false;
      this.submitError = false;

      const formData = this.bookingForm.value;

      // Submit to backend
      this.apiService.submitBooking(formData).subscribe({
        next: (response) => {
          // Send WhatsApp notification
          this.apiService.sendWhatsAppNotification(formData).subscribe({
            next: () => {
              this.submitSuccess = true;
              this.bookingForm.reset();
              this.isSubmitting = false;
            },
            error: (error) => {
              console.error('WhatsApp notification error:', error);
              this.submitError = true;
              this.errorMessage = 'Booking saved but WhatsApp notification failed';
              this.isSubmitting = false;
            }
          });
        },
        error: (error) => {
          console.error('Booking submission error:', error);
          this.submitError = true;
          this.errorMessage = 'Failed to submit booking. Please try again.';
          this.isSubmitting = false;
        }
      });
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
