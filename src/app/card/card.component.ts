import { Component, Input } from '@angular/core';
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
    isClicked = false;

    constructor(private taskService: TaskService) {}


    onClick() {
        this.taskService.onClickTask(this.item.id);
    }
}
