import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../_services/task.service';
import { AccountService } from '../../_services/account.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() isLoading = new EventEmitter<boolean>();
  
  enteredTitle = '';
  enteredDescription = '';

  constructor(private taskService: TaskService, private accountService: AccountService) {}


  addTask() {
    this.taskService.addTask({
      userId: this.accountService.currentUser()?.userId || '',
      id: Math.random().toString(),
      title: this.enteredTitle,
      description: this.enteredDescription
    })

    this.isLoading.emit(false);
  }

  onCancel() {
    this.isLoading.emit(false);
  }
}
