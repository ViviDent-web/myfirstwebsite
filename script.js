document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const contentArea = document.getElementById('content-area');

    // 1. JavaScript si copia da solo la tua Home reale dall'HTML al primo avvio!
    const homeOriginale = contentArea.innerHTML;

    // 2. Qui scrivi SOLO le altre pagine, senza toccare la Home
    const pagineSecondarie = {
        chisiamo: `
            <h1> Siamo il team ingegneristico della sezione motorsport di bmw</h1>
        <h3>Abbiamo diverse classi e squadre siccome il nostro ingresso nel mondo del motorsport risale al lontano 1920
        </h3>
        <p>al momento bmw corre con 3 team differenti</p>
        <ul>
            <li>BMW Motorsport (oggi BMW M GmbH): Il reparto sportivo ufficiale che gestisce tutte le attività da corsa
                del
                marchio è nato il 1° maggio 1972. </li>
        </ul>
        <ul>
            <li> BMW Sauber F1 Team (Formula 1): Come scuderia costruttrice ufficiale in F1, il team è nato a giugno
                2005,
                quando la BMW ha acquistato la scuderia Sauber, debuttando poi in pista nella stagione 2006.</li>
        </ul>
        <ul>
            <li> BMW M Team WRT / ROWE Racing (Endurance/WEC): Se pensi alle squadre che fanno correre le BMW nei
                prototipi
                o nelle gare GT di oggi (come alla 24 Ore di Le Mans), le partnership ufficiali con questi team sono
                nate in
                anni recenti (ad esempio la collaborazione con il Team WRT è stata annunciata nel 2022 per debuttare poi
                con
                la Hypercar). </li>
        </ul>
        <p>
            attualmente la bmw corre anche nei campionati gt3 e gt4
        </p>

        <ol start="1">
            <li>
                <b>Classe GT3: BMW M4 GT3 </b>
            </li>
        </ol>
        <div class="panel-media">
            <img src="https://racecarsdirect.com/content/UserImages/148709/889406.jpg?v=4" width="700px"> 
        </div>

        <p>
            È l'arma totale di BMW per le corse di livello professionistico. È un'auto stravolta rispetto al modello di
            serie, con una carrozzeria larghissima in fibra di carbonio e un'aerodinamica estrema.
        </p>
        <ul>
            <li>
                Motore: Un 3.0 litri sei cilindri in linea biturbo (sigla P58) che eroga fino a 590 CV (a seconda del
                Balance of Performance del campionato).
            </li>
        </ul>
        <ul>
            <li>
                Cambio: Sequenziale da corsa a 6 marce Xtrac.
            </li>
        </ul>
        <ul>
            <li>
                Dove corre: Nei campionati mondiali e internazionali più importanti, come il WEC (nella classe LMGT3,
                dove
                corre anche alla 24 Ore di Le Mans), il GT World Challenge, il DTM e l'IMSA americano.
            </li>
        </ul>
        <ol start="2">
            <li>
                <b> Classe GT4: BMW M4 GT4 </b>
            </li>
        </ol>
        <div class="panel-media">
            <img src="https://racemarket.net/oc-content/uploads/49/81650.jpg " width="700px"> 
        </div>
        <ul>
            <li>
                Motore: Stesso blocco a sei cilindri della versione stradale, con una potenza che si attira intorno ai
                550
                CV (gestibili elettronicamente in base alle regole della categoria).
            </li>
        </ul>
        <ul>
            <li>
                Componenti di serie: Mantiene molti elementi dell'auto stradale, inclusi il cruscotto digitale di serie
                e
                il controllo di trazione ottimizzato per le gare
            </li>
        </ul>
        <ul>
            <li>
                Dove corre: In campionati continentali e nazionali focalizzati sulla categoria GT4 (come il GT4 European
                Series o la classe GT4 del Campionato Italiano Gran Turismo).
            </li>
        </ul>
        <div class="title-flex"> <h1> <em>Curiosità del passato </em> </h1>  </div>
        <div class="grid-container">
            <div class="row-grid-container">
                <div class="card-container">
                    <ul>
                        <li> <h4> <b> il trionfo della BMW M6 </b> </h4> </li>
                    </ul>
                    <p>
                        Prima dell'arrivo della M4 (avvenuto tra il 2022 e il 2023), BMW correva nella classe
                        GT3
                        con la mastodontica BMW M6 GT3 (mossa da un motore V8) e nella classe GT4 con la precedente
                        generazione di
                        BMW
                        M4 GT4 (F82)
                    </p>
                    <p>
                        Attenzione però: Walkenhorst Motorsport non è un team ufficiale della casa madre (la factory),
                        ma
                        uno
                        storico
                        team clienti tedesco (guidato da Henry Walkenhorst, che tra l'altro gestisce delle
                        concessionarie
                        BMW).
                        Eppure,
                        con la M6 GT3, si sono tolti delle soddisfazioni enormi, entrando di diritto nella leggenda
                        delle
                        corse
                        endurance.
                    </p>
                </div>
                <div class="card-container">
                    <ul>
                        <li> <h4> <b> L'impresa leggendaria: La 24 Ore di Spa 2018 </b> </h4> </li>
                    </ul>
                    <p>Il punto più alto della storia della M6 targata Walkenhorst è stata la clamorosa vittoria
                        assoluta alla
                        24
                        Ore di Spa nel 2018.
                        Fu un'impresa pazzesca: un team privato, che fino a quel momento non aveva mai schierato un'auto
                        nella
                        classe regina dei professionisti (la classe Pro), arrivò in Belgio e batté tutti i giganti del
                        motorsport
                        mondiale. Al volante c'erano piloti del calibro di Philipp Eng, Tom Blomqvist e Christian
                        Krognes. </p>
                </div>
            </div>
            <div class="row-grid-container">
                <div class="card-container">
                    <ul>
                        <li> <h4> <b> Il "Regno" al Nürburgring </h4> </b> </li>
                    </ul>
                    <p>Se c'è un posto dove la M6 di Walkenhorst è diventata un'icona assoluta, è il circuito del
                        Nürburgring
                        Nordschleife (l'Inferno Verde).
                        Hanno corso per anni nella Nürburgring Endurance Series (l'ex VLN), diventando i beniamini del
                        pubblico
                        locale. Quella M6 GT3, enorme, larghissima, con il suo rombo cupo generato dal motore V8 biturbo
                        da 4,4
                        litri, era uno spettacolo da veder viaggiare tra le curve strette e i saliscendi del vecchio
                        Nürburgring,
                        dove ha conquistato svariate vittorie. </p>
                </div>
                <div class="card-container">
                    <ul>
                        <li> <h4> <b> Altri successi di rilievo: </b> </h4> </li>
                    </ul>
                    <p>Nel 2020, in un anno stravolto dalla pandemia, la M6 di Walkenhorst ha continuato a dominare la
                        scena
                        internazionale, conquistando persino una fantastica doppietta (1° e 2° posto) alla 8 Ore di
                        Indianapolis
                        nell'Intercontinental GT Challenge.

                        Oggi Walkenhorst, seguendo il ciclo vitale delle vetture della casa bavarese, è passata alla
                        nuova M4
                        GT3,
                        ma per tutti gli appassionati di ruote coperte, la M6 GT3 blu e bianca numero 34 (o con le sue
                        iconiche
                        livree colorate come quella PlayStation) rimarrà indimenticabile. </p>
                </div>
            </div>
        </div>
        `,
        contatti: `
             <div class="panel-media">
      <img src="https://pbs.twimg.com/media/HKeNlSaWwAQgkvx.jpg" alt="BMW Motorsport Service" width="500px">
    </div>
    <div class="panel-container">
      <h3> Contatti e informazioni </h3>
      <ul>

        <li> <a href="https://www.bmw.it/it/piu-bmw/assistenza-clienti.html ">Aiuto e Contatti</a> </li>
      </ul>

      <ul>

        <li> <a
            href="https://bmw.it/it/s/?language=it&_gl=1*1t2hpde*_gcl_aw*R0NMLjE3ODEyNzY2MTMuRUFJYUlRb2JDaE1JN09mZ3NfeUJsUU1WSnBDREJ4MzFNU1E2RUFBWUFTQUFFZ0xHbnZEX0J3RQ..*_gcl_dc*R0NMLjE3ODEyNzY2MTMuRUFJYUlRb2JDaE1JN09mZ3NfeUJsUU1WSnBDREJ4MzFNU1E2RUFBWUFTQUFFZ0xHbnZEX0J3RQ..*_gcl_au*MTE4NjMyMTc1My4xNzgxMjc2NjEz ">FAQ:
            Domande frequenti</a> </li>
      </ul>

      <ul>

        <li> <a href="https://www.bmw.it/dlo/it-it/bmw/dealer-locator.html ">Concessionarie e Centri Service BMW </a>
        </li>
      </ul>
      <ul>

        <li> <a href="https://www.bmw.it/it/topics/mondo-bmw/mobile-care.html"> BMW Mobile Care </a> </li>
      </ul>

      <ul>

        <li> <a href="https://www.bmw.it/forms/rfo/rfo.html "> Richiedi un'offerta </a> </li>
      </ul>
    </div>
        `
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Gestione dei pulsanti attivi
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetPage = button.getAttribute('data-page');

            // 3. Controllo dinamico:
            if (targetPage === 'home') {
                // Se tocca Home, rimette l'HTML originale che si era salvato all'inizio
                contentArea.innerHTML = homeOriginale;
            } else if (pagineSecondarie[targetPage]) {
                // Se tocca un'altra pagina, inserisce il testo scritto sopra
                contentArea.innerHTML = pagineSecondarie[targetPage];
            }
        });
    });
});