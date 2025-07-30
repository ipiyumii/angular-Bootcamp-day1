import { Component, Input } from '@angular/core';
import { TaskService } from '../_services/task.service';

@Component({
  selector: 'app-desc-card',
  standalone: true,
  imports: [],
  templateUrl: './desc-card.component.html',
  styleUrl: './desc-card.component.css'
})
export class DescCardComponent {
  constructor(private taskService: TaskService) {}
  @Input() taskDescription: string = '';
  tasks: any[] = [];

  ngOnInit() {
    this.tasks = this.taskService.dummy_tasks;

    
  }


}
