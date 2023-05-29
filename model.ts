class Blog {
  uid: string;
  constructor(
    public blogTitle: string,
    public subTitle: string,
    public blogText: string, // public date: Function
    public imgUrl: string
  ) {
    this.uid = uid();
  }
}
const blog: Blog[] = [];

class User {
  uid: string;
  constructor(
    public userName: string,
    private password: string,
    public email: string
  ) {
    this.uid = uid();
  }
}
const users: User[] = [];
