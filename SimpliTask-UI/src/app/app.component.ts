import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItem } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tasks: TaskItem[] = [];
  newTask: any = { title: '', description: '' };
  editMode = false;
  selectedTask: any = { id: 0, title: '', description: '', isCompleted: false };

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  saveTask() {
    if (this.editMode) {
      this.taskService.updateTask(this.selectedTask.id, this.selectedTask).subscribe(() => {
        this.loadTasks();
        this.resetForm();
      });
    } else {
      if (!this.newTask.title) return;
      this.taskService.createTask(this.newTask).subscribe(() => {
        this.loadTasks();
        this.newTask = { title: '', description: '' };
      });
    }
  }

  editTask(task: TaskItem) {
    this.editMode = true;
    this.selectedTask = { ...task };
  }

  deleteTask(id: number) {
    if (confirm("আপনি কি টাস্কটি মুছতে চান?")) {
      this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
    }
  }

  resetForm() {
    this.editMode = false;
    this.selectedTask = { id: 0, title: '', description: '', isCompleted: false };
  }
}
