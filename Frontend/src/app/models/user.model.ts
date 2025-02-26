export class User {
  id?: number;
  email: string;
  username: string;
  password: string;


  constructor(data: Partial<User> = {}) {
    this.id = data.id;
    this.email = data?.email || '';
    this.username = data?.username || '';
    this.password = data?.password || '';
  }
}