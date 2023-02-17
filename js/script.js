// Configurazione Vue
const app = Vue.createApp({
    data: function () {
        return {
            emails: [],


        }

    },

    methods: {
        generatEmails() {
            const emailsCopy = [];
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        console.log(response.data.response);
                        let generatedEmail = response.data.response;
                        this.emails.push(generatedEmail);
                    });

            }
        }


    },

});
app.mount("#app");