import { defineStore } from 'pinia';
import type ScreenState from '~/interfaces/store_states/screen';

export const useScreenStore = defineStore('screen', {
    state: (): ScreenState => ({
        windowWidth: 0,
        windowHeight: 0,
        scrollX: 0,
        scrollY: 0,
    }),
});
