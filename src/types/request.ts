export interface ApiError {
  code: string;
  message: string;
  status: string;
}
export interface NetworkRequest {
  searchQuery?: string;
  locale?: string
}

