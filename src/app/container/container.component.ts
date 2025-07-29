import { Component, Output } from '@angular/core';
import { TaskListComponent } from '../Tasks/task-list/task-list.component';
import { AddTaskComponent } from '../Tasks/add-task/add-task.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TaskListComponent, AddTaskComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  isLoading = false;

  addTask() {
    this.isLoading = true;
  }

  closeAddTask(isLoading: boolean) {
    this.isLoading = isLoading;

  }
}
