import { api } from '~/utils/api/index.ts';
import { AuthData } from '~/interfaces/auth.ts';

// Post
export const auth = async (data: AuthData) => {
    return api.post('auth/sign_in', { json: data });
};

export const logout = async () => {
    return api.post('auth/logout');
};
