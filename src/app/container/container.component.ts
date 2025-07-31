import { Component, Output } from '@angular/core';
import { TaskListComponent } from '../Tasks/task-list/task-list.component';
import { AddTaskComponent } from '../Tasks/add-task/add-task.component';
import { DescCardComponent } from '../desc-card/desc-card.component';
import { TaskService } from '../_services/task.service';
import { AccountService } from '../_services/account.service';
import { CurrencyPipe } from '@angular/common';
import { User } from '../_models/user';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TaskListComponent, AddTaskComponent, DescCardComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  isLoading = false;
  isTaskClicked = false;
  taskDescription = '';
  userName = '';

  constructor(private taskService: TaskService, private accountService: AccountService) {}

  addTask() {
    this.isLoading = true;
  }

  closeAddTask(isLoading: boolean) {
    this.isLoading = isLoading;

  }

  ngOnInit() {
    this.isTaskClicked = this.taskService.isTaskClicked;

      const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user: User = JSON.parse(currentUser);
      this.userName = user.name;
    }
   
    if(this.isTaskClicked) {
      this.taskDescription = this.taskService.taskDescription;
    }
  }
}
