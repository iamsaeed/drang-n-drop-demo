<template>
    <div class="p-5 h-full flex-col items-center">
        <h4  class="mb-3 text-center">Register an Account</h4>
        <form @submit.prevent="auth.register()">
            <div class="mb-5">
                <label>Name</label>
                <input type="name" v-model="auth.user.name" placeholder="Name..." class="form-control mt-1">
                <span class="text-danger" v-if="e.errors && e.errors.name">{{ e.errors.name }}</span>
            </div>
            <div class="mb-5">
                <label>Email</label>
                <input type="email" v-model="auth.user.email" placeholder="email@email.com" class="form-control mt-1">
                <span class="text-danger" v-if="e.errors && e.errors.email">{{ e.errors.email }}</span>
            </div>
            <div class="mb-5">
                <label>Password</label>
                <input type="password" v-model="auth.user.password" placeholder="************" class="form-control mt-1">
                <span class="text-danger" v-if="e.errors && e.errors.password">{{ e.errors.password }}</span>
            </div>
            <div class="mb-5">
                <label>Confirm Password</label>
                <input type="password" v-model="auth.user.password_confirmation" placeholder="************" class="form-control mt-1">
                <span class="text-danger" v-if="e.errors && e.errors.password_confirmation">{{ e.errors.password_confirmation }}</span>
            </div>
            <div class="mb-5">
                <button type="submit" class="btn btn-primary w-full">Login</button>
            </div>

            <div class="mb-5 items-center space-x-5 text-center">
                <span>Already registered? <router-link :to="{name:'login'}">Go to Login Page</router-link></span>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/authStore";
import { useErrorStore } from "../../stores/errorsStore";
import { useTitleStore } from "../../stores/titleStore";

const auth = useAuthStore();
const e = useErrorStore();
const title = useTitleStore();

title.set('Register')

</script>
