export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
  company: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}