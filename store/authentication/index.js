import { defineStore } from "pinia";



export const useAuthentication = defineStore('authentication', {
    state: () => {
        return {
            counter: 0,
            name: "Eduardo",
            isAdmin: false,
        }
    }
})