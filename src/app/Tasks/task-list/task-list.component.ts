import { Component, effect, Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../_services/task.service';
import { CardComponent } from '../../card/card.component';
import { AccountService } from '../../_services/account.service';

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

    constructor(private taskService: TaskService,  private accountService: AccountService) {
      effect(() => {
        const newTask = taskService.isNewTaskAdded();
        if(newTask) {
          this.getUserTask();
          this.taskService.isNewTaskAdded.set(false);
        }
      })
    }

    ngOnInit() {
      // this.dummy_items = this.taskService.dummy_tasks;


      const currentUser = localStorage.getItem('currentUser');
      // const currentUser = this.accountService.currentUser();
      if (currentUser) {
        this.currentUser = JSON.parse(currentUser);
        // this.dummy_items = this.dummy_items.filter(item => item.userId === user.userId);
        this.getUserTask();
      }

      
    }

    getUserTask(){
      this.taskService.getUserTasks().subscribe({
        next: (response) => {
          const dummy_items = response;

          if(dummy_items) { 
            this.dummy_items = dummy_items.filter(item => item.userId === this.currentUser.userId);
          }
          
        },
        error: error => console.log("error getting tasks")
      })
    }

}

