import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DUMMY_ITEMS } from '../dummy-items';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  dummy_items = DUMMY_ITEMS;
}
