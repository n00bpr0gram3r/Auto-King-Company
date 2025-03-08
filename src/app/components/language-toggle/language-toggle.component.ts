import { Component, OnInit } from '@angular/core';
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
    }
    .btn {
      padding: 0.25rem 0.5rem;
      border: 1px solid var(--primary);
      background: transparent;
      color: var(--primary);
      transition: all 0.3s ease;
    }
    .btn.active {
      background: var(--primary);
      color: white;
    }
    .btn:hover {
      background: var(--primary);
      color: white;
    }
  `]
})
export class LanguageToggleComponent implements OnInit {
  currentLang: Language = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
} 