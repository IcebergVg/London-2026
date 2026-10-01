const itinerary = [
    {
        date: "PET 09.10.",
        title: "Dolazak u London",
        icon: "✈️",
        places: [
            ["15:20", "Heathrow Airport", "Dolazak u London", "✈️"],
            ["poslijepodne", "Elizabeth Line", "Heathrow → centralni London", "🚆"],
            ["večer", "Soho", "Lagano upoznavanje s centrom Londona", "📍"],
            ["večer", "Chinatown", "Obavezna stanica 😁", "🍜"],
            ["večer", "Piccadilly Circus", "Kratka šetnja i atmosfera", "📍"],
            ["večer", "Neal's Yard", "Ako bude vremena i energije", "📍"]
        ]
    },

    {
        date: "SUB 10.10.",
        title: "Portobello & Notting Hill",
        icon: "🛍️",
        places: [
            ["09:00", "Portobello Road Market", "Glavni cilj dana – subota je pravi dan za Portobello", "🛍️"],
            ["prijepodne", "Notting Hill", "Šetnja ulicama i razgledavanje", "🏘️"],
            ["po želji", "Holland Park", "Mogući dodatak ako bude vremena", "🌳"],
            ["večer", "Soho / pub", "Slobodna večer", "🍺"]
        ]
    },

    {
        date: "NED 11.10.",
        title: "Brighton",
        icon: "🌊",
        places: [
            ["jutro", "London → Brighton", "Jednodnevni izlet", "🚆"],
            ["dan", "Brighton Pier", "More, šetnja i poznati Brighton Pier", "🌊"],
            ["dan", "The Lanes", "Stari dio grada, trgovine i atmosfera", "🏘️"],
            ["poslijepodne", "Brighton Seafront", "Šetnja uz more", "🏖️"],
            ["večer", "Brighton → London", "Povratak u London", "🚆"]
        ]
    },

    {
        date: "PON 12.10.",
        title: "Muzeji + Harry Potter + Camden",
        icon: "🏛️",
        places: [
            ["jutro", "Natural History Museum", "Glavni muzejski cilj", "🏛️"],
            ["kasnije", "Science Museum", "Odmah preko puta", "🔬"],
            ["poslijepodne", "King's Cross", "Platform 9¾ – obavezna fotografija", "🧙"],
            ["poslijepodne", "St Pancras", "Kratko razgledavanje", "🚉"],
            ["kasnije", "Camden Market", "Tržnica i večernja atmosfera", "🛍️"]
        ]
    },

    {
        date: "UTO 13.10.",
        title: "City + Sky Garden + ploče",
        icon: "🌇",
        places: [
            ["jutro", "Tower of London", "Vani ili unutra, ovisno o vremenu", "🏰"],
            ["jutro", "Tower Bridge", "Šetnja preko mosta", "🌉"],
            ["prijepodne", "Leadenhall Market", "Harry Potter lokacija", "🧙"],
            ["podne", "St Paul's Cathedral", "Razgledavanje izvana", "⛪"],
            ["podne", "Millennium Bridge", "Još jedna Harry Potter lokacija", "🧙"],
            ["kasno poslijepodne", "Sky Garden", "Pogled na London – idealno pred zalazak", "🌇"],
            ["večer", "Sister Ray", "Record shop", "🎵"],
            ["večer", "Reckless Records", "Record shop", "🎵"],
            ["večer", "St Martins Models", "Modeli autića – Cecil Court", "🚗"],
            ["večer", "Chinatown / Soho", "Zadnja večer u Londonu", "🍜"]
        ]
    },

    {
        date: "SRI 14.10.",
        title: "Povratak",
        icon: "✈️",
        places: [
            ["rano jutro", "London → Heathrow", "Let u 08:40", "🚆"],
            ["08:40", "Heathrow Airport", "✈️ Povratak kući", "✈️"]
        ]
    }
];


// -------------------------
// POČETNI EKRAN
// -------------------------

function showHome() {

    const container = document.querySelector(".container");

    container.innerHTML = `
        <section class="welcome">
            <h2>London calling! 🎸</h2>
            <p>
                Naš plan puta, mjesta koja želimo vidjeti,
                ploče koje želimo pronaći i sve ostalo što
                nas čeka u Londonu.
            </p>
        </section>

        <section class="menu">

            <button class="menu-card" onclick="showPlan()">
                <span>📅</span>
                <strong>Plan puta</strong>
                <small>Plan po danima</small>
            </button>

            
           <button class="menu-card" onclick="showRecords()">
                <span>🎵</span>
                <strong>Ploče</strong>
                <small>Record shopovi</small>
            </button>

            <button class="menu-card" onclick="comingSoon('Tržnice')">
                <span>🛍️</span>
                <strong>Tržnice</strong>
                <small>Portobello, Camden...</small>
            </button>

            <button class="menu-card" onclick="comingSoon('Harry Potter')">
                <span>🧙</span>
                <strong>Harry Potter</strong>
                <small>Lokacije i Platform 9¾</small>
            </button>

            <button class="menu-card" onclick="comingSoon('Muzeji')">
                <span>🏛️</span>
                <strong>Muzeji</strong>
                <small>Natural History, Science...</small>
            </button>

            <button class="menu-card" onclick="comingSoon('Modeli autića')">
                <span>🚗</span>
                <strong>Modeli autića</strong>
                <small>Shopovi i modeli</small>
            </button>

            <button class="menu-card" onclick="comingSoon('Izleti')">
                <span>✈️</span>
                <strong>Izleti</strong>
                <small>Brighton, Windsor...</small>
            </button>

            <button class="menu-card" onclick="showBudget()">
                <span>💷</span>
                <strong>Budžet</strong>
                <small>Troškovi putovanja</small>
            </button>

            <button class="menu-card" onclick="showNotes()">
                <span>📝</span>
                <strong>Bilješke</strong>
                <small>Naše bilješke</small>
            </button>

        </section>
    `;

    window.scrollTo({ top: 0, behavior: "smooth" });
}


// -------------------------
// PLAN PUTA
// -------------------------

function showPlan() {

    const container = document.querySelector(".container");

    const itinerary = [

        {
            date: "Petak • 09.10.",
            title: "Soho • Chinatown • Neal's Yard",
            icon: "🌆",
            sections: [

                {
                    title: "🎯 GLAVNO",
                    places: [
                        ["Popodne", "Soho", "Prva lagana šetnja Londonom nakon dolaska.", "🌆"],
                        ["", "Berwick Street", "Poznata ulica u Sohou – usput pogledati što ima.", "🏙️"],
                        ["", "Chinatown", "Prošetati bez žurbe i večera.", "🍜"],
                        ["", "Neal's Yard", "Mali šareni trg kod Covent Gardena.", "🌈"],
                        ["", "Seven Dials", "Nastavak šetnje ako bude vremena i energije.", "📍"]
                    ]
                },

                {
                    title: "🎁 AKO SI VEĆ OVDJE",
                    places: [
                        ["", "Reckless Records", "Rabljene ploče – pogledati ako ima vremena.", "💿"],
                        ["", "Sister Ray", "Ploče, uključujući second-hand ponudu.", "💿"],
                        ["", "Sounds of the Universe", "Glazba i vinili.", "💿"],
                        ["", "Phonica Records", "Vinili i glazba.", "💿"],
                        ["", "Third Man Records London", "Glazbena trgovina.", "🎵"],
                        ["", "Hamleys", "Pogledati Bburago, F1 i eventualno Alfu.", "🚗"],
                        ["", "TK Maxx Charing Cross Road", "Ako se naleti na zanimljiv model – bonus.", "🚗"]
                    ]
                }

            ]
        },

        {
            date: "Subota • 10.10.",
            title: "Portobello • Notting Hill",
            icon: "🛍️",
            sections: [

                {
                    title: "🎯 GLAVNO",
                    places: [
                        ["Jutro", "Portobello Road Market", "Glavni sadržaj dana – market, vintage, antikviteti i atmosfera.", "🛍️"],
                        ["", "Portobello Green", "Kolekcionarske stvari i štandovi.", "🏺"],
                        ["", "Notting Hill", "Šetnja kvartom.", "🏘️"],
                        ["", "Westbourne Grove", "Lagani nastavak šetnje.", "🚶"]
                    ]
                },

                {
                    title: "🎁 AKO SI VEĆ OVDJE",
                    places: [
                        ["", "Honest Jon's", "Record shop – ako ti se gleda po pločama.", "💿"],
                        ["", "Lion Records", "Vinili u Portobello području.", "💿"],
                        ["", "Firebird Records", "Još jedna mogućnost za ploče.", "💿"],
                        ["", "Rough Trade West", "Record shop u Notting Hillu.", "💿"],
                        ["", "Portobello vintage trgovine", "Pogledati kolekcionarske stvari i igračke.", "🚗"]
                    ]
                },

                {
                    title: "☕ PAUZA / AKO OSTANE VREMENA",
                    places: [
                        ["", "Portobello Road", "Street food, kava i nešto pojesti.", "☕"],
                        ["", "Holland Park", "Samo ako ostane energije.", "🌳"]
                    ]
                }

            ]
        },

        {
            date: "Nedjelja • 11.10.",
            title: "Brighton",
            icon: "🌊",
            sections: [

                {
                    title: "🎯 GLAVNO",
                    places: [
                        ["Jutro", "Brighton", "Cijeli dan izlet – bez žurbe.", "🌊"],
                        ["", "Brighton Palace Pier", "Šetnja po Pieru i pogled na more.", "🎡"],
                        ["", "The Lanes", "Uske ulice, trgovine i atmosfera.", "🏘️"],
                        ["", "Royal Pavilion", "Jedna od glavnih znamenitosti Brightona.", "🏛️"],
                        ["", "Pavilion Gardens", "Odmor i šetnja.", "🌳"],
                        ["", "Brighton Seafront", "Šetnja uz more.", "🌊"]
                    ]
                },

                {
                    title: "🎁 AKO SI VEĆ OVDJE",
                    places: [
                        ["", "Rarekind Records", "Pogledati ploče ako se uklapa u šetnju.", "💿"],
                        ["", "Snoopers Paradise", "Vintage i second-hand – bonus.", "🛍️"]
                    ]
                },

                {
                    title: "☕ PAUZA",
                    places: [
                        ["", "The Lanes", "Ručak, kava i malo odmora.", "☕"]
                    ]
                }

            ]
        },

        {
            date: "Ponedjeljak • 12.10.",
            title: "Muzeji • King's Cross • Camden",
            icon: "🏛️",
            sections: [

                {
                    title: "🎯 GLAVNO",
                    places: [
                        ["Jutro", "Natural History Museum", "Jedan od glavnih londonskih muzeja.", "🦖"],
                        ["", "Science Museum", "Znanost, tehnologija i svemir.", "🚀"],
                        ["Popodne", "King's Cross", "Postaja i područje oko nje.", "🚂"],
                        ["", "Platform 9¾", "Obavezna Harry Potter foto-točka.", "🧙"],
                        ["", "St Pancras", "Pogledati prekrasnu postaju.", "🏛️"],
                        ["", "Camden Market", "Market, trgovine, hrana i atmosfera.", "🛍️"]
                    ]
                },

                {
                    title: "🎁 AKO SI VEĆ OVDJE",
                    places: [
                        ["", "Camden High Street", "Pogledati trgovine i street style.", "🛍️"],
                        ["", "UMusic Shop Camden", "Glazba – bonus ako se uklapa.", "💿"],
                        ["", "Camden Market", "Vintage, kolekcionarske stvari i sitnice.", "🎁"]
                    ]
                }

            ]
        },

        {
            date: "Utorak • 13.10.",
            title: "Tower • City • Harry Potter • Sky Garden",
            icon: "🏰",
            sections: [

                {
                    title: "🎯 GLAVNO",
                    places: [
                        ["Jutro", "Tower of London", "Jedna od glavnih londonskih znamenitosti.", "🏰"],
                        ["", "Tower Bridge", "Šetnja preko mosta i pogled na Temzu.", "🌉"],
                        ["", "Leadenhall Market", "Harry Potter lokacija.", "🧙"],
                        ["", "St Paul's Cathedral", "Katedrala i okolica.", "⛪"],
                        ["", "Millennium Bridge", "Harry Potter lokacija i pogled prema St Paul'su.", "🌉"],
                        ["Kasnije", "Sky Garden", "Pogled na London – idealno predvečer.", "🌇"]
                    ]
                },

                {
                    title: "🎁 AKO SI VEĆ OVDJE",
                    places: [
                        ["", "City of London", "Prošetati okolnim ulicama ako ostane vremena.", "🏙️"],
                        ["", "F1 / modeli / kolekcionarske stvari", "Samo ako se nešto zanimljivo pojavi na ruti.", "🏎️"]
                    ]
                }

            ]
        }

    ];


    let html = `
        <div class="page-header">
            <button class="back-button" onclick="showHome()">← Početna</button>
            <h2>📅 Plan puta</h2>
            <p>London • 09.10. – 14.10.2026.</p>
        </div>
    `;


    itinerary.forEach((day, dayIndex) => {

        html += `
            <section class="day-card">

                <div class="day-header">
                    <div>
                        <span class="day-date">${day.date}</span>
                        <h3>${day.icon} ${day.title}</h3>
                    </div>

                    <span class="day-number">${dayIndex + 1}</span>
                </div>
        `;


        day.sections.forEach((section) => {

            html += `
                <div class="plan-section-title">
                    ${section.title}
                </div>

                <div class="places">
            `;


            section.places.forEach((place) => {

                const placeIndex =
                    itinerary
                        .slice(0, dayIndex)
                        .reduce(
                            (sum, d) =>
                                sum +
                                d.sections.reduce(
                                    (s, sec) => s + sec.places.length,
                                    0
                                ),
                            0
                        )
                    +
                    day.sections
                        .slice(0, day.sections.indexOf(section))
                        .reduce(
                            (sum, sec) => sum + sec.places.length,
                            0
                        )
                    +
                    section.places.indexOf(place);

                const id = `day-${dayIndex}-place-${placeIndex}`;

                const checked =
                    localStorage.getItem(id) === "true";


                html += `
                    <div class="place ${checked ? "visited" : ""}">

                        <button
                            class="check-button"
                            onclick="toggleVisited('${id}', this)">
                            ${checked ? "✓" : "○"}
                        </button>

                        <div class="place-icon">
                            ${place[3]}
                        </div>

                        <div class="place-info">

                            <div class="place-time">
                                ${place[0]}
                            </div>

                            <strong>${place[1]}</strong>

                            <p>${place[2]}</p>

                        </div>

                        <button
                            class="map-button"
                            onclick="openMaps('${place[1]}, London')">
                            🗺️
                        </button>

                    </div>
                `;
            });


            html += `
                </div>
            `;
        });


        html += `
            </section>
        `;
    });


    container.innerHTML = html;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// -------------------------
// OBIĐENO
// -------------------------

function toggleVisited(id, button) {

    const place = button.closest(".place");

    const current = localStorage.getItem(id) === "true";
    const newValue = !current;

    localStorage.setItem(id, newValue);

    if (newValue) {

        button.textContent = "✓";
        place.classList.add("visited");

    } else {

        button.textContent = "○";
        place.classList.remove("visited");

    }
}


// -------------------------
// GOOGLE MAPS
// -------------------------

function openMaps(place) {

    const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(place);

    window.open(url, "_blank");

}


// -------------------------
// ZA SEKCIJE KOJE JOŠ RADIMO
// -------------------------

function comingSoon(section) {

    alert(
        section +
        "\n\nOvaj dio aplikacije još slažemo. 😉\n\n" +
        "Korak po korak – bit će unutra!"
    );

}
// -----------------------
// PLOČE
// -----------------------

function showRecords() {

    const container = document.querySelector(".container");

    let html = `
        <div class="page-header">
            <button class="back-button" onclick="showHome()">← Početna</button>
            <h2>🎵 Ploče</h2>
            <p>Record shopovi i mjesta za malo kopanja</p>
        </div>

        <section class="day-card">

            <div class="place">
                <div class="place-icon">💿</div>
                <div class="place-info">
                    <strong>Sister Ray</strong>
                    <p>Soho • Berwick Street</p>
                    <p>Jedna od glavnih stanica za vinile.</p>
                </div>
                <button class="map-button"
                    onclick="openMaps('Sister Ray, London')">
                    📍
                </button>
            </div>

            <div class="place">
                <div class="place-icon">💿</div>
                <div class="place-info">
                    <strong>Reckless Records</strong>
                    <p>Soho • Berwick Street</p>
                    <p>Rabljene ploče i kopanje po katalozima.</p>
                </div>
                <button class="map-button"
                    onclick="openMaps('Reckless Records, London')">
                    📍
                </button>
            </div>

            <div class="place">
                <div class="place-icon">💿</div>
                <div class="place-info">
                    <strong>Flashback Records</strong>
                    <p>Islington • Essex Road</p>
                    <p>Posebno zanimljiv second-hand i podrum.</p>
                </div>
                <button class="map-button"
                    onclick="openMaps('Flashback Records Islington, London')">
                    📍
                </button>
            </div>

            <div class="place">
                <div class="place-icon">💿</div>
                <div class="place-info">
                    <strong>Rarekind Records</strong>
                    <p>Brighton • North Laine</p>
                    <p>Nove i rabljene ploče – stanica za Brighton.</p>
                </div>
                <button class="map-button"
                    onclick="openMaps('Rarekind Records, Brighton')">
                    📍
                </button>
            </div>
function showTrips() {

    const container = document.querySelector(".container");

    const trips = [

        {
            title: "Brighton",
            icon: "🌊",
            subtitle: "Nedjelja • 11.10.2026. • cijeli dan",

            sections: [

                {
                    title: "🎯 GLAVNO",
                    places: [
                        ["", "Brighton Palace Pier", "Šetnja po Pieru i pogled na more.", "🎡"],
                        ["", "Brighton Seafront", "Lagano uz more, plaža i atmosfera Brightona.", "🌊"],
                        ["", "The Lanes", "Uske ulice, trgovine, kafići i atmosfera.", "🏘️"],
                        ["", "Royal Pavilion", "Jedna od glavnih znamenitosti Brightona.", "🏛️"],
                        ["", "Pavilion Gardens", "Lijepa pauza i šetnja oko Royal Paviliona.", "🌳"],
                        ["", "North Laine", "Retro, vintage, male trgovine i zanimljivi dućani.", "🛍️"]
                    ]
                },

                {
                    title: "🎁 AKO SI VEĆ OVDJE",
                    places: [
                        ["", "Rarekind Records", "Pogledati rabljene ploče ako se uklapa u šetnju.", "💿"],
                        ["", "Resident Music", "Glazba i vinili u North Laine području.", "💿"],
                        ["", "Snoopers Paradise", "Veliki vintage i antique shop – idealno za razgledavanje.", "🕰️"],
                        ["", "North Laine Bazaar", "Vintage, kolekcionarske stvari i razne sitnice.", "🎁"],
                        ["", "Beyond Retro", "Vintage trgovina u blizini North Lainea.", "👕"]
                    ]
                },

                {
                    title: "🍦 PAUZA / NEŠTO FINO",
                    places: [
                        ["", "North Laine", "Kava, nešto pojesti i malo odmora.", "☕"],
                        ["", "Brighton Seafront", "Ako se pojavi dobar sladoled – obavezno. 😄", "🍦"]
                    ]
                }

            ]
        },

        {
            title: "Windsor",
            icon: "🏰",
            subtitle: "Rezervna opcija • oko 5–7 sati",

            sections: [

                {
                    title: "🎯 GLAVNO",
                    places: [
                        ["", "Windsor Castle", "Glavna znamenitost i razlog dolaska.", "🏰"],
                        ["", "Windsor Town Centre", "Šetnja kroz centar i glavne ulice.", "🏘️"],
                        ["", "The Long Walk", "Poznata šetnja prema Windsor Castleu.", "🌳"],
                        ["", "River Thames", "Šetnja uz rijeku ako ostane vremena.", "🌊"]
                    ]
                },

                {
                    title: "🎁 AKO SI VEĆ OVDJE",
                    places: [
                        ["", "Eton", "Preko rijeke – opcija ako imate dovoljno vremena.", "🏫"],
                        ["", "Windsor vintage & antique shops", "Pogledati ako naletimo na nešto zanimljivo.", "🕰️"]
                    ]
                },

                {
                    title: "☕ PAUZA",
                    places: [
                        ["", "Windsor Town Centre", "Kava, ručak ili pub prije povratka u London.", "☕"]
                    ]
                }

            ]
        }

    ];


    let html = `
        <div class="page-header">
            <button class="back-button" onclick="showHome()">← Početna</button>
            <h2>🚌 Izleti</h2>
            <p>Izleti iz Londona • glavno + što je zanimljivo u blizini</p>
        </div>
    `;


    trips.forEach((trip) => {

        html += `
            <section class="day-card">

                <div class="day-header">
                    <div>
                        <h3>${trip.icon} ${trip.title}</h3>
                        <p>${trip.subtitle}</p>
                    </div>
                </div>
        `;


        trip.sections.forEach((section) => {

            html += `
                <div class="plan-section-title">
                    ${section.title}
                </div>

                <div class="places">
            `;


            section.places.forEach((place, placeIndex) => {

                const id =
                    `trip-${trip.title.toLowerCase().replace(/\s+/g, "-")}-${placeIndex}`;

                const checked =
                    localStorage.getItem(id) === "true";


                html += `
                    <div class="place ${checked ? "visited" : ""}">

                        <button
                            class="check-button"
                            onclick="toggleVisited('${id}', this)">
                            ${checked ? "✓" : "○"}
                        </button>

                        <div class="place-icon">
                            ${place[3]}
                        </div>

                        <div class="place-info">

                            <div class="place-time">
                                ${place[0]}
                            </div>

                            <strong>${place[1]}</strong>

                            <p>${place[2]}</p>

                        </div>

                        <button
                            class="map-button"
                            onclick="openMaps('${place[1]}, London')">
                            🗺️
                        </button>

                    </div>
                `;
            });


            html += `
                </div>
            `;
        });


        html += `
            </section>
        `;
    });


    container.innerHTML = html;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
            <div class="place">
                <div class="place-icon">🔎</div>
                <div class="place-info">
                    <strong>Snoopers Paradise</strong>
                    <p>Brighton • North Laine</p>
                    <p>Vintage, kolekcionarske stvari, igračke i svašta nešto.</p>
                </div>
                <button class="map-button"
                    onclick="openMaps('Snoopers Paradise, Brighton')">
                    📍
                </button>
            </div>

        </section>
    `;

    container.innerHTML = html;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// -----------------------
// BUDŽET
// -----------------------

function showBudget() {

    const container = document.querySelector(".container");

    let html = `
        <div class="page-header">
            <button class="back-button" onclick="showHome()">← Početna</button>
            <h2>💷 Budžet</h2>
            <p>London • 09.10. – 14.10.2026.</p>
        </div>

        <section class="day-card">

            <div class="place">
                <div class="place-icon">💷</div>
                <div class="place-info">
                    <strong>Planirani budžet</strong>
                    <p>400 £ po osobi</p>
                    <p>2 osobe • ukupno 800 £</p>
                </div>
            </div>

            <div class="place">
                <div class="place-icon">💿</div>
                <div class="place-info">
                    <strong>Ploče i glazba</strong>
                    <p>Record shopovi, ploče i eventualni ulovi.</p>
                </div>
            </div>

            <div class="place">
                <div class="place-icon">🎁</div>
                <div class="place-info">
                    <strong>Pokloni</strong>
                    <p>Pokloni za obitelj i sitnice iz Londona.</p>
                </div>
            </div>

            <div class="place">
                <div class="place-icon">🚇</div>
                <div class="place-info">
                    <strong>Prijevoz</strong>
                    <p>Tube, bus, vlakovi i izlet u Brighton.</p>
                </div>
            </div>

            <div class="place">
                <div class="place-icon">🎟️</div>
                <div class="place-info">
                    <strong>Ulaznice</strong>
                    <p>Muzeji, atrakcije i eventualne druge ulaznice.</p>
                </div>
            </div>

            <div class="place">
                <div class="place-icon">☕</div>
                <div class="place-info">
                    <strong>Ostalo</strong>
                    <p>Kave, pub, grickalice i neplanirane sitnice.</p>
                </div>
            </div>

        </section>

        <section class="day-card">

            <div class="place">
                <div class="place-icon">📊</div>
                <div class="place-info">
                    <strong>Trenutna potrošnja</strong>
                    <p>0 £</p>
                </div>
            </div>

            <div class="place">
                <div class="place-icon">💰</div>
                <div class="place-info">
                    <strong>Preostalo</strong>
                    <p>800 £</p>
                </div>
            </div>

        </section>
    `;

    container.innerHTML = html;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function showNotes() {

    const container = document.querySelector(".container");

    let notes = JSON.parse(
        localStorage.getItem("londonNotes") || "[]"
    );

    let html = `
        <div class="page-header">
           <button class="back-button" onclick="showHome()">← Početna</button>
            <h2>📝 Podsjetnik</h2>
            <p>Stvari koje ne želimo zaboraviti u Londonu</p>
        </div>

        <section class="day-card notes-card">

            <div class="notes-input">
                <textarea
                    id="noteInput"
                    placeholder="Napiši nešto što ne smijem zaboraviti..."
                    rows="3"></textarea>

                <button
                    id="addNoteButton"
                    class="back-button">
                    ＋ Dodaj podsjetnik
                </button>
            </div>

            <div id="notesList">
    `;

    if (notes.length === 0) {

        html += `
            <div class="place">
                <div class="place-icon">💡</div>
                <div class="place-info">
                    <strong>Još nema podsjetnika</strong>
                    <p>Dodaj nešto što želiš zapamtiti.</p>
                </div>
            </div>
        `;

    } else {

        notes.forEach((note, index) => {

            html += `
                <div class="place note-item">

                    <div class="place-icon">
                        📝
                    </div>

                    <div class="place-info">
                        <strong>${note}</strong>
                    </div>

                    <button
                        class="map-button delete-note"
                        data-index="${index}">
                        ✕
                    </button>

                </div>
            `;
        });
    }

    html += `
            </div>
        </section>
    `;

    container.innerHTML = html;

    document
        .getElementById("addNoteButton")
        .addEventListener("click", () => {

            const input =
                document.getElementById("noteInput");

            const text = input.value.trim();

            if (!text) return;

            notes.push(text);

            localStorage.setItem(
                "londonNotes",
                JSON.stringify(notes)
            );

            showNotes();
        });

    document
        .querySelectorAll(".delete-note")
        .forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                notes.splice(index, 1);

                localStorage.setItem(
                    "londonNotes",
                    JSON.stringify(notes)
                );

                showNotes();
            });

        });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach((card, index) => {

        card.addEventListener("click", () => {

        if (index === 0) {
    showPlan();
} else if (index === 2) {
    showRecords();
} else if (index === 8) {
    showBudget();
} else if (index === 9) {
    showNotes();
} else {
    comingSoon(card.querySelector("strong").textContent);
}

        });

    });

});
