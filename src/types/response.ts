export interface AppResponse<T = null> {
  status?: boolean;
  data?: T;
  message?: string;
  code?: number;
}
