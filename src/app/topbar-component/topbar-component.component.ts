import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';
import { LanguageToggleComponent } from '../components/language-toggle/language-toggle.component';

@Component({
  selector: 'app-topbar-component',
  standalone: true,
  imports: [CommonModule, LanguageToggleComponent],
  templateUrl: './topbar-component.component.html',
  styleUrls: ['./topbar-component.component.css']
})
export class TopbarComponentComponent {
  constructor(private translationService: TranslationService) {}

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}
