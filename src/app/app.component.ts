import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './Tasks/task-list/task-list.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerComponent, HeaderComponent, LoginComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
