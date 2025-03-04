import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopbarComponentComponent } from '../topbar-component/topbar-component.component';

@Component({
  selector: 'app-about',
  imports: [TopbarComponentComponent, NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
