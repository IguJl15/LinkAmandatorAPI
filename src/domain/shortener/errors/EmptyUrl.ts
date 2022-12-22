import Failure from "src/common/errors/Failure";

class EmptyUrl extends Failure {
  constructor() {
    super("Url is empty")
  }
}

export default EmptyUrl;
