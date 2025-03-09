import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-toggle">
      <button 
        [class.active]="currentLang === 'en'"
        (click)="switchLanguage('en')" 
        class="btn btn-sm">
        EN
      </button>
      <button 
        [class.active]="currentLang === 'ar'"
        (click)="switchLanguage('ar')" 
        class="btn btn-sm">
        عربي
      </button>
    </div>
  `,
  styles: [`
    .language-toggle {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin: 0 1rem;
    }
    .btn {
      padding: 0.25rem 0.75rem;
      border: 1px solid var(--primary);
      background: transparent;
      color: var(--primary);
      transition: all 0.3s ease;
      font-size: 0.875rem;
      border-radius: 4px;
    }
    .btn.active {
      background: var(--primary);
      color: white;
    }
    .btn:hover {
      background: var(--primary);
      color: white;
    }
    @media (max-width: 768px) {
      .language-toggle {
        margin: 0.5rem 0;
      }
    }
  `]
})
export class LanguageToggleComponent {
  currentLang: Language = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
} 