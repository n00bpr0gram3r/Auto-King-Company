import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<Language>('en');
  language$ = this.currentLanguage.asObservable();

  constructor() {
    // Try to get the language from localStorage
    const savedLang = localStorage.getItem('preferred_language') as Language;
    if (savedLang) {
      this.currentLanguage.next(savedLang);
    }
  }

  setLanguage(lang: Language) {
    localStorage.setItem('preferred_language', lang);
    this.currentLanguage.next(lang);
    // Update document direction for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }
} 