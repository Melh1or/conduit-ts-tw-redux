export interface SignUpInDto {
  user: User;
}

interface User {
  username: string;
  email: string;
  token: string;
  image: string
  bio: string
}
