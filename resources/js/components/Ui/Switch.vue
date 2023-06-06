<template>
  <Switch @click.stop="sw.statusChange(props.id, props.table, props.call_back)" v-model="enabled" :class="[enabled ? 'bg-indigo-500' : 'bg-gray-200 dark:bg-gray-500', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent dark:border-gray-500 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500']">
    <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-400 shadow ring-0 transition duration-200 ease-in-out']" />
  </Switch>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

import { useSwitchStoreStore } from "@/stores/switchStore";

const sw = useSwitchStoreStore();

const props = defineProps(['id', 'table', 'status', 'value', 'call_back'])

const enabled = ref(props.status === props.value)

</script>