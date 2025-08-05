import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() item: any;
  isComplete = false;

  toogleComplete() {
    this.isComplete = true;
  }
}
