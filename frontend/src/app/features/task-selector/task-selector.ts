
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { TaskService } from '../../core/services/task.service';
import {
  AgentTask,
  TaskCategory,
  TaskInput
} from '../../core/models/task.model';

@Component({
  selector: 'app-task-selector',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './task-selector.html',
  styleUrl: './task-selector.scss'
})
export class TaskSelectorComponent implements OnInit {

  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);

  categories: TaskCategory[] = [];
  tasks: AgentTask[] = [];
  selectedTask?: AgentTask;

  loading = false;
  errorMessage = '';

  selectionForm = this.fb.group({
    category: ['', Validators.required],
    task: ['', Validators.required]
  });

  dynamicForm = this.fb.group({});
  aiResponse = '';
  isGenerating = false;

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;

    this.taskService.getCategories().subscribe({
      next: response => {
        this.categories = response.data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load categories';
        this.loading = false;
      }
    });
  }

  onCategoryChange(categoryId: string): void {
    this.tasks = [];
    this.selectedTask = undefined;
    this.dynamicForm = this.fb.group({});
    this.selectionForm.patchValue({ task: '' });

    this.taskService.getTasksByCategory(categoryId).subscribe({
      next: response => {
        this.tasks = response.data.tasks;
      },
      error: () => {
        this.errorMessage = 'Unable to load tasks';
      }
    });
  }

  onTaskChange(taskId: string): void {
    this.selectedTask = this.tasks.find(
      task => task.id === taskId
    );

    if (!this.selectedTask) return;

    const controls: Record<string, any> = {};

    this.selectedTask.inputs.forEach((input: TaskInput) => {
      controls[input.name] = [
        '',
        input.required ? Validators.required : []
      ];
    });

    this.dynamicForm = this.fb.group(controls);
  }

  runAgent(): void {

    if (this.selectionForm.invalid || this.dynamicForm.invalid) {
      this.selectionForm.markAllAsTouched();
      this.dynamicForm.markAllAsTouched();
      return;
    }

    this.isGenerating = true;
    this.aiResponse = '';
    this.errorMessage = '';

    const payload = {
      category: this.selectionForm.value.category!,
      task: this.selectionForm.value.task!,
      inputs: this.dynamicForm.getRawValue()
    };

    this.taskService.runAgent(payload).subscribe({

      next: (response) => {
        this.aiResponse = response.data.response;
        this.isGenerating = false;
      },

      error: (error) => {
        console.error('AI Agent Error:', error);

        this.errorMessage =
          error.error?.message || 'Unable to generate AI response';

        this.isGenerating = false;
      }

    });
  }
}
