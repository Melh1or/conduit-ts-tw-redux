export interface SignUpOutDto {
  user: User;
}

interface User {
  username: string;
  email: string;
  password: string;
}
