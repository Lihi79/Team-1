class Blog {
  uid: string;
  constructor(
    public title: string,
    public subtitle: string,
    public username: string,
    public text: string,
    public date: Function
  ) {
    this.uid = uid();
  }
}
const blog: Blog[] = [];

function uid(): string {
  return `id- ${Math.random()}`;
}
