import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-booking',
  imports: [TopbarComponentComponent, NavbarComponent, FooterComponent, PageHeaderComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

}
