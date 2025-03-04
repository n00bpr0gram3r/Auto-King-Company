import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponentComponent } from './topbar-component/topbar-component.component';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, FooterComponent, NavbarComponent, TopbarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Auto-King-Company';
}