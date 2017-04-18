export const TASK_INBOX = 'TASK_INBOX';
export const TASK_PINNED = 'TASK_PINNED';
export const TASK_SNOOZED = 'TASK_SNOOZED';
export const TASK_ARCHIVED = 'TASK_ARCHIVED';

export type TaskState = TASK_INBOX | TASK_PINNED | TASK_SNOOZED | TASK_ARCHIVED;

export type TaskType = {
  id: string,
  title: string,
  url?: string,
  state: TaskState,
  subtitle?: string
};
