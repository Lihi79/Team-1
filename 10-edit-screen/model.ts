class Blog {
  uid: string;
  constructor(
    public blogTitle: string,
    public subTitle: string,
    // public username: string,
    // connect to user login
    public blogText: string // public date: Function
  ) {
    this.uid = uid();
  }
}
const blog: Blog[] = [];
