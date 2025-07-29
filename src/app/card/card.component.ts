import { Component, Input } from '@angular/core';
import { TaskListComponent } from '../Tasks/task-list/task-list.component';
import { TaskItemComponent } from '../Tasks/task-item/task-item.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() item: any;

}
