import { User } from '~/interfaces/user.ts';

// TODO: Maybe redo

export default interface UserState {
    user?: User;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
    getMe: (update?: boolean) => Promise<User | undefined>;
}
