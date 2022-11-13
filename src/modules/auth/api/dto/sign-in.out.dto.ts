export interface SignInOutDto {
  user: User;
}

interface User {
  email: string;
  password: string;
}
