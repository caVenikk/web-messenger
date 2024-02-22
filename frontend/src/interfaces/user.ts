import { v4 as uuid } from 'uuid/index';

export interface User {
    id: uuid;
    username: string;
    email: string;
}
