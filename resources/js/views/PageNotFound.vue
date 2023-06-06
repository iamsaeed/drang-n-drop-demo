<template>
<div>Error404 | Page not found</div>
</template>

<script setup>
import { useTitleStore } from "../stores/titleStore";
const title = useTitleStore();
title.set('Page Not Found!')
</script>
