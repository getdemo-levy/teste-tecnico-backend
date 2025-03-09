export class Response<T> {
  statusCode: number;
  message: string;
  data?: T;
  error?: string;
}
