export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  auth0: string;
  token: string;
  fbId: number;
  constructor(id: number,
    username: string,
    email: string,
    password: string,
    auth0: string,
    token: string,
    fbId: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.auth0 = auth0;
    this.token = token;
    this.fbId = fbId;
  }
}
