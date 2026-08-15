export class NetworkError extends Error {
  constructor (message: string) {
    super(message);
    this.name = "NetworkError";
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

export class DataError extends Error {
  constructor (message: string) {
    super(message);
    this.name = "DataError";
    Object.setPrototypeOf(this, DataError.prototype);
  }
}
