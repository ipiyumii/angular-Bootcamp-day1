import { Component, effect, Input } from '@angular/core';
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
    currentUser: any;

    constructor(private taskService: TaskService) {
      effect(() => {
        const newTask = taskService.isNewTaskAdded();
        if(newTask) {
          this.getUserTask();
          this.taskService.isNewTaskAdded.set(false);
        }
      })
    }

    ngOnInit() {
      this.dummy_items = this.taskService.dummy_tasks;


      this.currentUser = localStorage.getItem('currentUser');
      if (this.currentUser) {
        const user = JSON.parse(this.currentUser);
        this.dummy_items = this.dummy_items.filter(item => item.userId === user.userId);
      }

      // this.getUserTask();
    }

    getUserTask(){
      this.taskService.getUserTasks(this.currentUser).subscribe({
        next: (response) => {
          this.dummy_items = response;
          
        },
        error: error => console.log("error getting tasks")
      })
    }

}

