import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = new BehaviorSubject<Language>('en');
  language$ = this.language.asObservable();

  constructor(private storageService: StorageService) {
    const storedLang = this.storageService.getItem('selectedLanguage') as Language;
    if (storedLang) {
      this.language.next(storedLang);
    }
  }

  setLanguage(lang: Language) {
    this.language.next(lang);
    this.storageService.setItem('selectedLanguage', lang);
  }

  getCurrentLanguage(): Language {
    return this.language.value;
  }

  isRTL(): boolean {
    return this.language.value === 'ar';
  }
} 