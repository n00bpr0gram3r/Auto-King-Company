import { Component } from '@angular/core';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-contact',
  imports: [TopbarComponentComponent, NavbarComponent, FooterComponent, PageHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
