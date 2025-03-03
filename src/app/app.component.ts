import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponentComponent } from './topbar-component/topbar-component.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, TopbarComponentComponent, AboutComponent, BookingComponent, CarouselComponent, FooterComponent, ServicesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Auto-King-Company';
}
