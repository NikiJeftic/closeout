import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'closeout';
  buttonLabel = 'Notes';
  buttonLink = '/notes';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/notes') {
          this.buttonLabel = 'Home';
          this.buttonLink = '/';
        } else {
          this.buttonLabel = 'Notes';
          this.buttonLink = '/notes';
        }
      }
    });
  }
}
