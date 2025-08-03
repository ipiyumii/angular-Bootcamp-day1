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
  enteredDate = '';
  userId = '';


  constructor(private taskService: TaskService, private accountService: AccountService) {}

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser) {
      const user: User = JSON.parse(currentUser);
      this.userId = user.userId;
    }
  }


  addTask() {
    this.taskService.addTask({
      userId: this.userId,
      id: Math.random().toString(),
      title: this.enteredTitle,
      description: this.enteredDescription,
      dueDate: this.enteredDate
    }).subscribe({
      next: (response) => {
        console.log("task added");
        this.taskService.isNewTaskAdded.set(true);
        this.isLoading.emit(false);
      },
      error: error => console.log("error adding tasks")
    })

  }

  onCancel() {
    this.isLoading.emit(false);
  }
}
