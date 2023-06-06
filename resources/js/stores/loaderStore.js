import { defineStore } from 'pinia'

export const useLoaderStore = defineStore({
    id : 'loaderStoreId',
    state : () => ({
        loader : false
    }),

    getters : {

    },

    actions : {
        setLoader(payload){
            this.loader = payload
        }
    }
})
