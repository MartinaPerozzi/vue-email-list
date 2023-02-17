// Configurazione Vue
const app = Vue.createApp({
    data: function () {
        return {


        }

    },

    methods: {
        generatEmails() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(function (response) {
                    console.log(response.data.response);
                });
        }


    },

});
app.mount("#app");