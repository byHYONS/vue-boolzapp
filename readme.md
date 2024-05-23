# ESERCIOZIO: Boolzapp

> [!NOTE]
>
> nome repo: vue-boolzapp

### Descrizione:

#### Milestone 1:
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse.
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.

#### Milestone 2:
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione.
Click sul contatto mostra la conversazione del contatto cliccato.


#### Milestone 3:
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde.
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

#### Milestone 4:
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina).

#### Milestone 5 (opzionale)
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.





 <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_io.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div  class="user__name desktop">
                                                <h2>Marsela</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>09:15</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_1.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Samuele</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>11:11</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_3.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Pietro</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>17:17</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_6.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Paola</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>19:15</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_7.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Achille</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>22:15</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_4.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Otocon</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>23:59</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_6.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Elisa</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>ieri</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_5.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Dante</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>Marted&igrave;</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
                                <!-- LIST ITEM COMPLETO DI FOTO + INFO -->
                                <li class="list__user">
                                    <div class="list__user__content">
                                        <!-- FOTO USER -->
                                        <figure class="user__avatar">
                                            <img src="./img/avatar_7.jpg" alt="avatar_1">
                                            <!-- NOME USER + INFO ACCESSO -->
                                            <div class="user__name desktop">
                                                <h2>Commercial...</h2>
                                                <p class="user__info">Lorem ipsum dolor sit amet</p>
                                            </div>
                                        </figure>
                                        <!-- ORARIO MESSAGGIO -->
                                        <div class="hour-sms desktop mb-15">
                                            <p>9/3/1950</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- fine list item -->
