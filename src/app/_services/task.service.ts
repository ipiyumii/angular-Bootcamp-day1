import { inject, Injectable, WritableSignal, signal } from '@angular/core';
import { Task } from '../_models/task';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  isTaskClicked = signal(false);
  taskId = '';
  taskDescription = '';
  http = inject(HttpClient)
  baseUrl = environment.apiUrl;
  dummy_tasks: WritableSignal<any[]> = signal([]);
  isNewTaskAdded = signal(false);

 
  // addTask(task: Task) {
  //   this.taskArray.push({
  //     userId: task.userId, // ***********************
  //     id: task.id,
  //     title: task.title,
  //     description: task.description
  //   })
  // }

  addTask(task: Task) {
    return this.http.post<Task[]>(this.baseUrl + 'Tasks', task);
  }

  onClickTask(){
    this.isTaskClicked.set(true); 
    console.log("clicked");
    // this.getUserTasks().subscribe({
    //   next: (response) => {
    //     this.dummy_tasks.set(response);
        
        // this.taskId = taskId;
        // this.taskDescription = this.taskArray.find(task => task.id === taskId)?.description || '';
        // return this.taskDescription;
    //   },
    //   error: error => console.error("error logging description")
      
    // })
    // this.isTaskClicked = true;
    // this.taskId = taskId;
    // this.taskDescription = this.taskArray.find(task => task.id === taskId)?.description || '';
  }


 
  getUserTasks() {
    return this.http.get<Task[]>(this.baseUrl + 'Tasks');
  }

  updateTask() {
    return this.http.put<Task[]>(this.baseUrl + 'Tasks', localStorage.getItem('clickedItem'));
  }
 

}
