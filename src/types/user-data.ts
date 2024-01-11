export type UserData = {
    id: number;
    login: string;
    token: string;
    avatarUrl: string;
    role: string;
  };

export type ProfileData = {
    username:string;
    description:string;
  };

export type AuthData = {
    login: string,
    password: string,
}

export type RegisterData = {
  login: string,
  password: string,
  role: string,
}