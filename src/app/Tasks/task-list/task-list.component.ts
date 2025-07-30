import { Component, Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../_services/task.service';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent,CardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
    // dummy_items = DUMMY_ITEMS;
    dummy_items: any[] = [];
    
    constructor(private taskService: TaskService) {}

    ngOnInit() {
      this.dummy_items = this.taskService.dummy_tasks;

      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        const user = JSON.parse(currentUser);
        this.dummy_items = this.dummy_items.filter(item => item.userId === user.userId);
      }
    }

}
