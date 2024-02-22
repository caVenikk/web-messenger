<script setup lang="ts">
// TODO: REDO

import { ref } from 'vue';

const email = ref('');
const password = ref('');

const emailRules = [
    (v: string) => !!v || 'E-mail is required',
    (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

const passwordRules = [
    (v: string) => !!v || 'Password is required',
    (v: string) => v.length >= 8 || 'Password must be at least 8 characters',
];

const onSubmit = async () => {
    if (email.value && password.value) {
        console.log('You have successfully signed in');
    }
};
</script>

<template>
    <q-page-container>
        <q-page padding>
            <q-form @submit="onSubmit">
                <q-input v-model="email" label="Email" type="email" outlined lazy-rules :rules="emailRules" />
                <q-input
                    v-model="password"
                    label="Password"
                    type="password"
                    outlined
                    lazy-rules
                    :rules="passwordRules"
                />
                <q-btn type="submit" label="Sign In" color="primary" class="q-mt-md" />
            </q-form>
        </q-page>
    </q-page-container>
</template>

<style scoped></style>
