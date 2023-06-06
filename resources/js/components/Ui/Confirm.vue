<template>
    <TransitionRoot as="template" :show="confirm.open">
        <Dialog as="div" class="relative z-10" @close="confirm.show({open : false})">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500" @click="confirm.show({open : false})">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" class="text-lg leading-6 text-gray-900" v-if="confirm.title"> {{confirm.title}} </DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500" v-html="confirm.description"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between mt-5">
                                <button type="button" class="btn btn-danger w-32" @click="confirm.onOk">{{confirm.cancel}}</button>
                                <button type="button" class="btn btn-primary w-32" @click="confirm.onCancel">{{confirm.ok}}</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { useConfirmStore } from "@/stores/confirmStore";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

export default {
    components : { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, XMarkIcon },
    setup(){
        const confirm = useConfirmStore()
        return {
            confirm
        }
    }
}
</script>
