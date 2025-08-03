import { Component, effect, Input } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-desc-card',
  standalone: true,
  imports: [],
  templateUrl: './desc-card.component.html',
  styleUrl: './desc-card.component.css'
})
export class DescCardComponent {
  constructor(private taskService: TaskService, private cardComponent: CardComponent) {}
  // @Input() taskDescription: string = '';
  tasks: any[] = [];
  description = '';

  ngOnInit() {
    // this.tasks = this.taskService.dummy_tasks;
      const clickedItemId = this.cardComponent.clickedItem();

    effect(() => {
      const dummy_tasks = this.taskService.dummy_tasks();
         
        // this.taskId = taskId;
        // this.Description = thmmy_tasks.find(task => task.id === taskId)?.description || '';
        // return this.taskDescription;

        this.description = dummy_tasks.find(task => task.id === clickedItemId)?.description || '';
    }
    )

  }


}
