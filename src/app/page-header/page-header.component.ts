import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-page-header',
  imports: [RouterLink],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  @Input() title: string = ''; // Input property for dynamic title
  @Input() subtitle: string = ''; // Input property for dynamic subtitle
}
