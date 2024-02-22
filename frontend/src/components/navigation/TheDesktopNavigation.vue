<script setup lang="ts">
import { APP_NAME } from '~/config/constants.ts';
</script>

<template>
    <q-toolbar class="q-px-lg">
        <q-toolbar-title class="header-logo">
            <q-avatar><img src="src/assets/icons/logo.svg" alt="" /></q-avatar>
            <b>{{ APP_NAME }}</b>
        </q-toolbar-title>

        <q-btn flat round icon="eva-bell-outline" class="q-mr-lg"></q-btn>

        <q-btn flat round>
            <q-avatar>
                <img src="src/assets/icons/logo.svg" alt="" />
            </q-avatar>
        </q-btn>
    </q-toolbar>
</template>

<style lang="scss" scoped>
.q-header {
    @media only screen and (max-width: 639px) {
        display: none;
    }
}

.header-logo {
    cursor: pointer;
    user-select: none;
}
</style>
