<template>
    <div class="flex flex-wrap -mx-4">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded shadow">
                <h2 class="text-lg font-semibold mb-4">Cities</h2>
                <ul class="space-y-2">
                    <li
                        @dragstart="dragStart($event, city)"
                        v-if="locations.cities"
                        class="bg-white dark:bg-gray-800 dark:text-gray-400 p-2 rounded shadow cursor-move capitalize"
                        v-for="city in locations.cities"
                        draggable="true"
                    >{{city.name }}</li>
                </ul>
            </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" v-for="country in locations.countries">
            <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded shadow">
                <h2 class="text-lg font-semibold mb-4 uppercase">{{ country.name }}</h2>
                <ul class="space-y-2">
                    <li
                        v-if="country.cities.length"
                        class="bg-white dark:bg-gray-800 dark:text-gray-400 p-2 rounded shadow capitalize"
                        v-for="city in country.cities"
                        @drop="onDrop($event, country)"
                        @dragenter.prevent @dragover.prevent
                    >{{country.cities.length ? city.name : 'No Cities Found' }}</li>

                    <li
                        v-else
                        class="bg-white dark:bg-gray-800 dark:text-gray-400 p-2 rounded shadow capitalize"
                        @drop="onDrop($event, country)"
                        @dragenter.prevent @dragover.prevent
                    >No Cities Found</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { useTitleStore } from "../stores/titleStore";
import { useLocationStore } from "../stores/locationsStore";
import { useNotificationStore } from "../stores/notificationStore";

export default {
    setup(){
    const title = useTitleStore();
    const locations = useLocationStore();
    const notification = useNotificationStore();
      return {
          title, locations, notification
      }
    },
    data(){
        return {
            dragOptions: {
                group: 'kanban',
                animation: 150,
                handle: '.drag-handle',
            },
            city : null
        }
    },
    created() {
        this.title.set('Dashboard')
        this.locations.get()
    },
    methods : {
        dragStart(event, city){
            this.city = city;
        },
        onDrop(event, country){
            this.locations.countries.forEach(c => {
                if(c.id === country.id && this.city.parent_id === c.id){
                    c.cities.push(this.city)
                    this.locations.cities.splice(this.locations.cities.indexOf(this.city), 1)
                }
                if(c.id === country.id && this.city.parent_id !== c.id){
                    this.notification.setMessage('Move to the correct country', 'error')
                }
            })
        }
    }
}

</script>

