import { defineStore } from 'pinia'
import router from "../router";

export const useAuthStore = defineStore({
    id : 'authStoreId',
    state : () => ({
        auth : JSON.parse(localStorage.getItem('auth')) || null,
        permissions : localStorage.getItem('permissions') || null,
        token : localStorage.getItem('token') || null,
        dark_mode: JSON.parse(window.localStorage.getItem("dark_mode")) || false,
        user : {
            name: '',
            mobile : '',
            email: '',
            password: '',
            device_name : 'web'
        }
    }),

    actions : {
        forgot(){
            axios.post('/api/password/email', {
                email: this.user.email
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        toggleDarkModel(){
            this.dark_mode = !this.dark_mode
            localStorage.setItem('dark_mode',JSON.stringify(this.dark_mode))
            location.reload()
        },
       login(){
           axios({
                method: "post",
                url: "/api/login",
                data : this.user
            }).then(response => {
               this.login_success_action(response)
            }).catch(error => {

            })
        },
        register(){
            axios({
                method: "post",
                url: "/api/register",
                data : this.user
            }).then(response => {
                this.login_success_action(response)
            }).catch(error => {

            })
        },

        login_success_action(response){
            this.auth = response.data.user
            this.token = response.data.token
            localStorage.setItem('auth',JSON.stringify(response.data.user))
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('permissions',JSON.stringify(response.data.permissions))
            localStorage.setItem('dark_mode',JSON.stringify(true))
            router.push({name:'dashboard'});
            location.reload()
        },
        copyCredentials(){
            this.user.email = 'demo@tooeasy.in';
            this.user.password = 'password';
        },
        logout(){
            localStorage.clear()
            router.push({name:'login'});
            location.reload()

        },
        logoutWithoutTokenResetInServer(){
            localStorage.clear()
            router.push({name:'login'});
            location.reload()

        }
    }
})
