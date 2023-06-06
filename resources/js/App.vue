<template>
    <router-view></router-view>
    <Notification />
    <LoaderIcon />
</template>

<script setup>
import Notification from "./components/Ui/Notification.vue";
import LoaderIcon from "./components/Ui/LoaderIcon.vue";
</script>
