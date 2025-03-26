import { Component } from '@angular/core';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { BookingComponent as BookingComponentSpecial } from '../components/booking/booking.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    TopbarComponentComponent,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent,
    BookingComponentSpecial
  ],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor() { }
}
