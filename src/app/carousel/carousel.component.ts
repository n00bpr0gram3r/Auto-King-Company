import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  expandedSections: { [key: string]: boolean } = {
    'quality': false,
    'expert': false,
    'equipment': false
  };

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  isExpanded(section: string): boolean {
    return this.expandedSections[section];
  }
}
