abstract class AppException implements Error {
  constructor(
    public name: string,
    public message: string,
    public stack?: string,
  ) {}
}

export default AppException;
