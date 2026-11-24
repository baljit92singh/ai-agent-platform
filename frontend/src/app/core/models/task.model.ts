
export interface TaskInput {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  required: boolean;
  options?: string[];
}

export interface AgentTask {
  id: string;
  name: string;
  description: string;
  inputs: TaskInput[];
}

export interface TaskCategory {
  id: string;
  name: string;
  description: string;
  tasks: AgentTask[];
}

export interface TaskCatalogResponse {
  success: boolean;
  data: TaskCategory[];
}

export interface CategoryResponse {
  success: boolean;
  data: TaskCategory;
}

export interface AgentRequest {
  category: string;
  task: string;
  inputs: Record<string, string>;
}

export interface AgentResponse {
  success: boolean;
  data: {
    response: string;
  };
}
