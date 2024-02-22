import ky from 'ky';
import { BASE_URL } from '~/config/constants.ts';

export const api = ky.create({
    prefixUrl: BASE_URL,
    mode: 'cors',
    credentials: 'include',
    throwHttpErrors: false,
    timeout: false,
});
