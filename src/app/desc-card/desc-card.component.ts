import { Component, HostListener, effect, Input, ElementRef } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desc-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desc-card.component.html',
  styleUrl: './desc-card.component.css'
})
export class DescCardComponent {
  constructor(private taskService: TaskService, private elementref: ElementRef) {}
  // @Input() taskDescription: string = '';
  tasks: any[] = [];
  description = '';
  clickedItem = '';
  title = '';
  dueDate = '';

  ngOnInit() {
    // this.tasks = this.taskService.dummy_tasks;

    const clickedItem = localStorage.getItem('clickedItem');
      // const currentUser = this.accountService.currentUser();
      if (clickedItem) {
        this.clickedItem = JSON.parse(clickedItem);
        this.getUserTask();
      }
      
  }

    

  getUserTask() {
    this.taskService.getUserTasks().subscribe({
      next: (response) => {
        const dummy_item = response;

        if(dummy_item) {
          const foundTask = dummy_item.find(task => task.id === this.clickedItem);

          this.description = foundTask ? foundTask.description : '';
          this.title = foundTask ? foundTask.title: '';
          this.dueDate = foundTask ? foundTask.dueDate: '';
          console.log(this.dueDate);
          
        }
          
      }
    })
  }

  onClickClose() {
    this.taskService.isTaskClicked.set(false);
    localStorage.removeItem('clickedItem');
  }
}
