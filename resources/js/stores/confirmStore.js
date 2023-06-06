import { defineStore } from 'pinia'

export const useConfirmStore = defineStore({
    id : 'confirmStoreId',
    state : () => ({
        open : false,
        title : 'Title',
        description : 'Description',
        ok : 'Yes',
        cancel : 'No',
    }),

    actions : {
        show(payload){
            this.open = payload.open
            this.title = payload.title
            this.description = payload.description
            this.ok = payload.ok
            this.cancel = payload.cancel
            if(payload.onOk){
                this.onOk(payload.onOk)
            }
            if(payload.onCancel){
                this.onCancel(payload.onOk)
            }
            this.onOk = payload.onOk
            this.onCancel = payload.onCancel
        },
        onOk(callback = null){
            return new Promise((resolve, reject) => {
                try {
                    if(callback){
                        let response = callback();
                        resolve(response)
                    }
                    this.show({open : false})
                } catch (e){
                    reject(e)
                }
            })
        },
        onCancel(callback = null){
            return new Promise((resolve, reject) => {
                try {
                    if(callback){
                        let response = callback();
                        resolve(response)
                    }
                    this.show({open : false})
                } catch (e){
                    reject(e)
                }
            })
        }
    }
})
