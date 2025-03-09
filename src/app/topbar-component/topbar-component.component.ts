import { Component } from '@angular/core';
import { LanguageToggleComponent } from '../components/language-toggle/language-toggle.component';

@Component({
  selector: 'app-topbar-component',
  standalone: true,
  imports: [ LanguageToggleComponent],
  templateUrl: './topbar-component.component.html',
  styleUrl: './topbar-component.component.css'
})
export class TopbarComponentComponent {}
