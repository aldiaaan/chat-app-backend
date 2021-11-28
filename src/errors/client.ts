export interface ErrorField {
  path: string;
  detail: string;
}

export interface ClientErrorConstructorArgs {
  message?: string;
  code?: string | number;
  status?: number;
  errors?: ErrorField[];
}

export class ClientError extends Error {
  public code: string | number;

  public status: number;

  public message: string;

  public errors: ErrorField[];

  public constructor({ message, code, status, errors }: ClientErrorConstructorArgs) {
    super();

    this.message = message || 'Something went wrong.';
    this.code = code || 'INTERNAL_ERROR';
    this.status = status || 500;
    this.errors = errors || [];
  }

  public toJSON() {
    return {
      message: this.message,
      code: this.code,
      errors: this.errors,
    };
  }
}

export class RouteNotFoundError extends ClientError {
  public constructor(url?: string) {
    super({ message: `Unknown route ${url}`, status: 404, code: 'UNKNOWN_ROUTE' });
  }
}
