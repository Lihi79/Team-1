// model
// --------
class User {
  uid: string;
  constructor(
    public userName: string,
    public email: string,
    public password: string,
    public cpass: string
  ) {
    this.uid = uid();
  }
}

const users: User[] = getUserLocalStorage();
