import { Component } from '@angular/core';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { PageHeaderComponent } from '../page-header/page-header.component'; 

@Component({
  selector: 'app-services',
  imports: [TopbarComponentComponent, NavbarComponent, FooterComponent, PageHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
