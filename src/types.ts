export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'article' | 'documentation';
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface DayPlan {
  day: number;
  title: string;
  description: string;
  topics: string[];
  tasks: Task[];
  resources: Resource[];
}

export interface TrainingProgress {
  completedTasks: string[]; // Array of task IDs
}
