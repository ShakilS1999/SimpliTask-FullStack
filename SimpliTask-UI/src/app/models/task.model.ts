export interface TaskItem {
  id: number;
  title: string;
  description?: string;
  createdAt: Date;
  isCompleted: boolean;
}
