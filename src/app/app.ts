import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user/user';
import { Caluclator } from '../math/caluclator/caluclator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent,Caluclator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
