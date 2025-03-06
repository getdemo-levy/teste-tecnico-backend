export class Response<T> {
  statusCode: number;
  message: string;
  dados?: T;
  error?: string;
}
