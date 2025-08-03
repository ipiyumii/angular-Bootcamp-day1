import { Component, Input, Signal, signal } from '@angular/core';
import { TaskItemComponent } from '../Tasks/task-item/task-item.component';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() item: any;
    // isClicked = false;
    description = '';

    clickedItem = '';
    
    constructor(private taskService: TaskService) {}


    onClickCard() {
        this.taskService.onClickTask();
        this.clickedItem = this.item.id;
        localStorage.setItem('clickedItem', JSON.stringify(this.clickedItem));

    }
}
