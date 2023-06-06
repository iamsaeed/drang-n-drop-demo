import { defineStore } from 'pinia'

export const useNotificationStore = defineStore({
    id : 'notificationStoreId',
    state : () => ({
        message : '',
        success : true
    }),

    actions : {
        setMessage(payload, status = null){
            this.message = payload;
            this.success = !status;

            setTimeout(() => {
                this.message = '';
            }, 5000)
        }
    }
})
