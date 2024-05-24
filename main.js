// reset
'use strict'

/* *************************
        VARIABILI
************************* */

const contacts = [
    {
        name: 'Jonathan',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Pietro',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Otacon',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Marsela',
        avatar: './img/avatar_io.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Elisa',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Elisa, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Dante',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Paola',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    },
];



/* *************************
    genero una risposta
          random
************************* */
// array di risposte:
const answers = ['ciao, va bene', 'Ok!', 'Ti chiamo dopo, ora ho da fare', 
'Ciao, ok... possiamo parlarne meglio questa sera?', 'Ooh, stavo pensando di chiamarti...', 
'Ciaooo, per me va bene... sentiamoci dopo!', 'Non lo so, ci devo pensare', 'Ok, a più tardi',
'Ciao, ora non posso, me se per te va bene potremmo fare domani... che dici?', 'Ciao, penso proprio di no...'];

console.log(answers.length);

// definisco funzione per generare un numero random:
function genRandom(min, max){
   const n = Math.floor(Math.random() * (max - min +1)) + min;
   return n;
};

// definisco una funzione per pescare random una risposta:
function messageAnswer(){
const answer = answers[genRandom(0, answers.length - 1)];
console.log(answer);
return answer;
};

/* *************************
inizializzo oggetto
vuejs
************************* */

const {createApp} = Vue;

createApp({
    data() {
       return {
        contacts,   // array di oggetti
        messageAnswer,  // messaggi random
        currentContact: 0,  // contatto di defoult
        textArea: '',   // area per scrivere un messaggio
        searchContact: '',  // area per la ricerca contati
        classOpen: false,   // modalità mobile apre lista contatti
        classOn: null,    // per arpire modale messaggi
       }
    },
    methods: {
        // funzione per mostrare la lista contatti, che verrà modificata in caso di ricerca:
        listContacts() {
            // if (this.searchContact) {
                const searchLower = this.searchContact.toLowerCase().trim();
                console.log(searchLower);
                return this.contacts.forEach(element => {
                    if(element.name.toLowerCase().includes(searchLower)) { 
                        element.visible = true
                    } else {
                        element.visible = false
                    }
                });
            // }
        },
        // funzione per determinare il contatto corrente:
        selectedContact(index){
            console.log('contact', index)
            this.currentContact = index
            this.classOn = null;
            this.classOpen = false; // in mobile chiude lista contatti
        },
        // funzione per l'invio e la ricezione dei messaggi:
        messageSent(){
            if (!this.textArea) return;
            this.messageOut();
            this.messageIn();
        },
        // funzione per i messaggi in uscita:
        messageOut(){
            console.log(this.contacts[this.currentContact].messages);
            // valido la textArea prima di fare push dentro l'array:
            if (!this.textArea) return;
            if (typeof this.textArea === 'string' && /\S/.test(this.textArea)){
                this.contacts[this.currentContact].messages.push({
                    date: '10/01/2020 15:50:00',
                    message: this.textArea.trim(),
                    status: 'sent'
                })
            };
            this.textArea = '';    // cencello la textArea:

        },
        // funzione per l'invio random dei messaggi:
        messageIn(){
            setTimeout(() => {
                this.contacts[this.currentContact].messages.push({
                    date: '10/01/2020 15:50:00',
                    message: this.messageAnswer(),
                    status: 'received'
                });
            }, 2_000);
        },
        // aprire modale per info chat e elimina messagge:
        infoChat(index){
            console.log('stai pigiano');
            console.log(index);
            console.log(this.classOn);
            // classOn devo riassegnare il valore uguale all'indice:
            if (this.classOn === index) {
                this.classOn = null;
            } else {
                this.classOn = index;
            }
        },
        deleteMessage(msgIndex){
            this.contacts[this.currentContact].messages.splice(msgIndex, 1);
            this.classOn = null;
        },
        // aprire tendina contatti:
        openContact(){
            this.classOpen = true;
        },      
        
    },
}).mount('#app');

