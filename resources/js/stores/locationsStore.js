import { defineStore } from 'pinia'

export const useLocationStore = defineStore({
    id : 'locationId',
    state : () => ({
        countries : [],
        cities : []
    }),

    actions : {
        get(){
            axios({
                method: "get",
                url: "/api/getAllLocations",
                data : this.user
            }).then(response => {
                this.countries = response.data.countries
                this.cities = response.data.cities
                this.addCityArrayToCountry();
            }).catch(error => {

            })
        },
        addCityArrayToCountry(){
            this.countries.forEach(country => {
                country['cities'] = []
            })
        }
    }
})
