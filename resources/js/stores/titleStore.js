import { defineStore } from 'pinia'

export const useTitleStore = defineStore({
    id : 'titleStoreId',
    state : () => ({
        name : ''
    }),

    actions : {
        set(string){
            this.name = string
            document.title = string + ' | User Panel'
        },
    }
})
