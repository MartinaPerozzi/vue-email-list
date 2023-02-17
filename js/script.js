// Configurazione Vue
const app = Vue.createApp({
    data: function () {
        return {
            emails: [],


        }

    },

    methods: {
        generatEmails() {
            // Copia array (forse non serve)
            const emailsCopy = [];
            // Per un ciclo di 10 volte ricihedi una email esterna randomica con API Boolean
            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        console.log(response.data.response);
                        // Crea variabile con risultato che ci serve dell'oggettone email prodotto da API Boolean
                        let generatedEmail = response.data.response;
                        // Pushali nell'array in data
                        this.emails.push(generatedEmail);
                    });

            }
        }


    },

});
app.mount("#app");