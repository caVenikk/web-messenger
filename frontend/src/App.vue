<script lang="ts" setup>
import AppView from '~/views/AppView.vue';
import TheDesktopNavigation from '~/components/navigation/TheDesktopNavigation.vue';
import TheMobileNavigation from '~/components/navigation/TheMobileNavigation.vue';
import { useScreenStore } from '~/stores/screen.ts';
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { SMALL_SCREEN_WIDTH } from '~/config/constants.ts';

// Common
const route = useRoute();

// Stores
const screenStore = useScreenStore();
const { windowWidth, windowHeight, scrollX, scrollY } = storeToRefs(screenStore);

// Screen actions
const onScrollX = () => {
    scrollX.value = window.scrollX;
};

const onScrollY = () => {
    scrollY.value = window.scrollY;
};

const onChangeWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

const onChangeWindowHeight = () => {
    windowHeight.value = window.innerHeight;
};

// Conditions
const displayHeader = computed(() => {
    return (route.name ?? 'auth') !== 'auth' && windowWidth.value > SMALL_SCREEN_WIDTH;
});

const displayFooter = computed(() => {
    return (route.name ?? 'auth') !== 'auth' && windowWidth.value <= SMALL_SCREEN_WIDTH;
});

// On mounted actions
onMounted(() => {
    onScrollX();
    onScrollY();
    onChangeWindowWidth();
    onChangeWindowHeight();

    window.addEventListener('scroll', onScrollY);
    window.addEventListener('scroll', onScrollX);
    window.addEventListener('resize', onChangeWindowWidth);
    window.addEventListener('resize', onChangeWindowHeight);
});
</script>

<template>
    <AppView>
        <template #header>
            <TheDesktopNavigation v-if="displayHeader" />
        </template>

        <template #main>
            <router-view />
        </template>

        <template #footer>
            <TheMobileNavigation v-if="displayFooter" />
        </template>
    </AppView>
</template>

<style scoped></style>
