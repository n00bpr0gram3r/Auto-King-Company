import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-about',
  imports: [TopbarComponentComponent, NavbarComponent, FooterComponent, PageHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
}
