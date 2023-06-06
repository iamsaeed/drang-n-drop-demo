<template>
    <div class="grid md:grid-cols-5 flex items-center min-h-full bg-white">
      <img src="/images/user-login.png" alt="" class="hidden md:block md:col-span-3 w-full max-h-screen object-cover">

      <div class="md:col-span-2 bg-white md:px-20">
        <div class="flex justify-center">
          <img class="w-32 h-auto" src="/images/logo.png" alt="Demo App">
        </div>
       <router-view></router-view>
      </div>
    </div>
</template>
