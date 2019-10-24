export interface AuthUser {
    username: string;
    image: string;
    email: string;
    token: string;
    bio: string;
}

export interface ApiUser{
    user: AuthUser
}
export interface SignUpUser{
    username: string;
    email: string;
    password: string;
}

export interface SignInUser{
    email: string;
    password: string;
}