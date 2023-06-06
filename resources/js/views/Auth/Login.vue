<template>
    <div class="p-5 h-full flex-col items-center">
      <h4  class="mb-3 text-center">Welcome to Login</h4>
      <form @submit.prevent="auth.login()">
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
        <div class="mb-5 space-x-2">
          <input type="checkbox" name="checkbox" id="checkbox">
          <span>Remember</span>
        </div>
        <div class="mb-5">
          <button type="submit" class="btn btn-primary w-full">Login</button>
        </div>

        <div class="mb-5 items-center space-x-5 text-center">
          <span>New on our platform? <router-link :to="{name:'register'}">Create an account</router-link></span>
        </div>
      </form>

      <div class="text-center space-y-2">
        <hr>
        <h4 class="flex justify-around">
          Demo Account Credentials
          <ClipboardIcon title="Copy" @click="auth.copyCredentials" class="h-6 w-6 cursor-pointer" />
        </h4>
        <p>Username: demo@tooeasy.in</p>
        <p>Password: password</p>
        <hr>
      </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/authStore";
import { useErrorStore } from "../../stores/errorsStore";
import { useTitleStore } from "../../stores/titleStore";
import { ClipboardIcon } from '@heroicons/vue/24/outline'

const auth = useAuthStore();
const e = useErrorStore();
const title = useTitleStore();

title.set('Login')

</script>
