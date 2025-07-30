import { Injectable } from '@angular/core';
import { Task } from '../_models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  isTaskClicked = false;
  taskId = '';
  taskDescription = '';

  private taskArray = [
      {
        id: 'i1',
        userId: 'u1',
        title: 'Buy Groceries',
        description: 'Buy milk, bread, and eggs from the supermarket.',
      },
      {
        id: 'i2',
        userId: 'u2',
        title: 'finish Project Report',
        description: 'Complete the project report by the end of the week.',
      },
      {
        id: 'i3',
        userId: 'u2',
        title: 'finish Angular Course',
        description: 'Complete the Angular course on Udemy.',
      },
      {
        id: 'i4',
        userId: 'u1',
        title: 'send Email ',
        description: 'Send the project update email to the team.',
      },
      {
        id: 'i5',
        userId: 'u3',
        title: 'go to the Gym',
        description: 'Attend the evening gym session for a workout.',
      },
  ];

  get dummy_tasks() {
    return this.taskArray;
  }

  addTask(task: Task) {
    this.taskArray.push({
      userId: task.userId, // *************************
      id: task.id,
      title: task.title,
      description: task.description
    })
  }

  onClickTask(taskId: string) {
    this.isTaskClicked = true;
    this.taskId = taskId;
    this.taskDescription = this.taskArray.find(task => task.id === taskId)?.description || '';
  }
}
