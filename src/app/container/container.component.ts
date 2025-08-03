import { Component, effect, ElementRef, HostListener, Output } from '@angular/core';
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

  constructor(private taskService: TaskService, private elementref: ElementRef) {
    effect(() => {
          this.isTaskClicked = this.taskService.isTaskClicked();
    });
  }

  addTask() {
    this.isLoading = true;
  }

  closeAddTask(isLoading: boolean) {
    this.isLoading = isLoading;

  }

  //  @HostListener("document:click", ['$event']) 
  //    handleOutsideClick(event: MouseEvent) {
  //     setTimeout(() => {
  //        if(this.elementref.nativeElement.contains(event.target)) {
  //         this.taskService.isTaskClicked.set(false);
  //           localStorage.removeItem('clickedItem');
  //       }
  //     })        
  //    }

  ngOnInit() {     
    // this.isTaskClicked = this.taskService.isTaskClicked;

    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user: User = JSON.parse(currentUser);
      this.userName = user.name;
    }

    
  
  }
}
