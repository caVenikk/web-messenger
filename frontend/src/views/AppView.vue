<script setup lang="ts"></script>

<template>
    <q-layout view="hHh lpr fFf">
        <q-header bordered class="text-black bg-transparent">
            <slot name="header"></slot>
        </q-header>

        <q-page-container class="q-pa-lg">
            <slot name="main"></slot>
        </q-page-container>

        <q-footer bordered class="text-black bg-transparent">
            <slot name="footer"></slot>
        </q-footer>
    </q-layout>
</template>

<style scoped></style>
