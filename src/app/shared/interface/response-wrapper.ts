export interface ResponseWrapper<T> {
  result: T;
  error?: string;
  status: number;
}
