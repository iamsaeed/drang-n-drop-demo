<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                        <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-primary pt-5 pb-4">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                                <div class="absolute top-0 right-0 -mr-12 pt-2">
                                    <button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div class="flex flex-shrink-0 items-center px-4">
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300" alt="Your Company" />
                            </div>
                            <div class="mt-5 h-0 flex-1 overflow-y-auto">
                                <nav class="space-y-1 px-2">
                                    <router-link v-for="item in navigation" :key="item.name" :to="{name:item.href}" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-base rounded-md']">
                                        <component :is="item.icon" class="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                                        {{ item.name }}
                                    </router-link>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                    <div class="w-14 flex-shrink-0" aria-hidden="true">
                        <!-- Dummy element to force sidebar to shrink to fit close icon -->
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex flex-grow flex-col overflow-y-auto bg-primary pt-5">
                <div class="flex flex-shrink-0 items-center px-4">
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300" alt="Your Company" />
                </div>
                <div class="mt-5 flex flex-1 flex-col">
                    <nav class="flex-1 space-y-1 px-2 pb-4">
                        <router-link v-for="item in navigation" :key="item.name" :to="{name:item.href}" :class="[item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600', 'group flex items-center px-2 py-2 text-sm rounded-md']">
                            <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                            {{ item.name }}
                        </router-link>
                    </nav>
                </div>
            </div>
        </div>
        <div class="flex flex-1 flex-col md:pl-64">
            <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-gray-700 shadow">
                <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden" @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <div class="flex flex-1 justify-between px-4">
                    <div class="flex items-center mr-3 space-x-2">
                        <tool-tip direction="tooltip-bottom" label="Go Back">
                            <ArrowLeftIcon @click="back" class="h-5 w-5 text-primary cursor-pointer font-extrabold" />
                        </tool-tip>
                        <tool-tip direction="tooltip-bottom" label="Go Forward">
                        <ArrowRightIcon @click="next" class="h-5 w-5 text-primary cursor-pointer font-extrabold" />
                        </tool-tip>
                    </div>
                    <div class="flex flex-1 items-center">
                        <h3>{{title.name}}</h3>
                    </div>
                    <div class="ml-4 flex items-center md:ml-6">

                        <div v-if="auth.dark_mode">
                            <tool-tip label="light mode" direction="tooltip-bottom">
                                <SunIcon @click="auth.toggleDarkModel()" class="w-6 h-6 text-indigo-200 cursor-pointer" />
                            </tool-tip>
                        </div>
                        <div v-else>
                            <tool-tip label="dark mode" direction="tooltip-bottom">
                                <MoonIcon @click="auth.toggleDarkModel()" class="w-6 h-6 text-indigo-200 cursor-pointer"/>
                            </tool-tip>
                        </div>
                        <div class="ml-5">
                            <tool-tip label="Logout" direction="tooltip-bottom">
                                <ArrowRightOnRectangleIcon @click="auth.logout()" class="w-6 h-6 text-indigo-200 cursor-pointer"/>
                            </tool-tip>
                        </div>

                    </div>
                </div>
            </div>

            <main>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <!-- Replace with your content -->
                    <div class="py-2">
                        <router-view />
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import router from "../router";
import { useTitleStore } from "../stores/titleStore";
import { useAuthStore } from "../stores/authStore";
import ToolTip from "../components/Ui/ToolTip.vue";
const auth = useAuthStore();

const title = useTitleStore();
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
    Bars3BottomLeftIcon, HomeIcon, MoonIcon, SunIcon, XMarkIcon,
    ArrowLeftIcon, ArrowRightIcon, DocumentDuplicateIcon, ArrowRightOnRectangleIcon} from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Dashboard', href: 'dashboard', icon: HomeIcon, current: false },
]

const sidebarOpen = ref(false)

if(auth.dark_mode){
    document.getElementById("html").classList.add('dark');
}

function next(){
    router.go(1)
}
function back(){
    router.go(-1)
}
</script>
