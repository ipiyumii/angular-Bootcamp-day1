import { Component, Output } from '@angular/core';
import { TaskListComponent } from '../Tasks/task-list/task-list.component';
import { AddTaskComponent } from '../Tasks/add-task/add-task.component';
import { DescCardComponent } from '../desc-card/desc-card.component';
import { TaskService } from '../_services/task.service';

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

  constructor(private taskService: TaskService) {}

  addTask() {
    this.isLoading = true;
  }

  closeAddTask(isLoading: boolean) {
    this.isLoading = isLoading;

  }

  ngOnInit() {
    this.isTaskClicked = this.taskService.isTaskClicked;
   
    if(this.isTaskClicked) {
      this.taskDescription = this.taskService.taskDescription;
    }
  }
}
