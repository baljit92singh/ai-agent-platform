
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  TaskCatalogResponse,
  CategoryResponse,
  AgentRequest,
  AgentResponse
} from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:3000/api/tasks';

  getCategories(): Observable<TaskCatalogResponse> {
    return this.http.get<TaskCatalogResponse>(
      this.API_URL
    );
  }

  getTasksByCategory(categoryId: string): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(
      `${this.API_URL}?category=${categoryId}`
    );
  }

  runAgent(payload: AgentRequest) {
  return this.http.post<AgentResponse>(
    'http://localhost:3000/api/agent/chat',
    payload
  );
}
}

