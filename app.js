const itinerary = [
    {
        date: "PET 09.10.",
        title: "Dolazak u London",
        icon: "✈️",
        places: [
            {
                time: "15:20",
                name: "Heathrow Airport",
                desc: "Dolazak u London",
                type: "✈️"
            },
            {
                time: "poslijepodne",
                name: "Elizabeth Line",
                desc: "Heathrow → centralni London",
                type: "🚆"
            },
            {
                time: "večer",
                name: "Soho",
                desc: "Lagano upoznavanje s centrom Londona",
                type: "📍"
            },
            {
                time: "večer",
                name: "Chinatown",
                desc: "Obavezna stanica 😁",
                type: "🍜"
            },
            {
                time: "večer",
                name: "Piccadilly Circus",
                desc: "Kratka šetnja i atmosfera",
                type: "📍"
            },
            {
                time: "večer",
                name: "Neal's Yard",
                desc: "Ako bude vremena i energije",
                type: "📍"
            }
        ]
    },

    {
        date: "SUB 10.10.",
        title: "Portobello & Notting Hill",
        icon: "🛍️",
        places: [
            {
                time: "09:00",
                name: "Portobello Road Market",
                desc: "Glavni cilj dana – subota je pravi dan za Portobello",
                type: "🛍️"
            },
            {
                time: "prijepodne",
                name: "Notting Hill",
                desc: "Šetnja ulicama i razgledavanje",
                type: "🏘️"
            },
            {
                time: "po želji",
                name: "Holland Park",
                desc: "Mogući dodatak ako bude vremena",
                type: "🌳"
            },
            {
                time: "večer",
                name: "Soho / pub",
                desc: "Slobodna večer",
                type: "🍺"
            }
        ]
    },

    {
        date: "NED 11.10.",
        title: "Brighton",
        icon: "🌊",
        places: [
            {
                time: "jutro",
                name: "London → Brighton",
                desc: "Jednodnevni izlet",
                type: "🚆"
            },
            {
                time: "dan",
                name: "Brighton Pier",
                desc: "More, šetnja i poznati Brighton Pier",
                type: "🌊"
            },
            {
                time: "dan",
                name: "The Lanes",
                desc: "Stari dio grada, trgovine i atmosfera",
                type: "🏘️"
            },
            {
                time: "poslijepodne",
                name: "Brighton Seafront",
                desc: "Šetnja uz more",
                type: "🏖️"
            },
            {
                time: "večer",
                name: "Brighton → London",
                desc: "Povratak u London",
                type: "🚆"
            }
        ]
    },

    {
        date: "PON 12.10.",
        title: "Muzeji + Harry Potter + Camden",
        icon: "🏛️",
        places: [
            {
                time: "jutro",
                name: "Natural History Museum",
                desc: "Glavni muzejski cilj",
                type: "🏛️"
            },
            {
                time: "kasnije",
                name: "Science Museum",
                desc: "Odmah preko puta",
                type: "🔬"
            },
            {
                time: "poslijepodne",
                name: "King's Cross",
                desc: "Platform 9¾ – obavezna fotografija",
                type: "🧙"
            },
            {
                time: "poslijepodne",
                name: "St Pancras",
                desc: "Kratko razgledavanje",
                type: "🚉"
            },
            {
                time: "kasnije",
                name: "Camden Market",
                desc: "Tržnica i večernja atmosfera",
                type: "🛍️"
            }
        ]
    },

    {
        date: "UTO 13.10.",
        title: "City + Sky Garden + ploče",
        icon: "🌇",
        places: [
            {
                time: "jutro",
                name: "Tower of London",
                desc: "Vani ili unutra, ovisno o vremenu",
                type: "🏰"
            },
            {
                time: "jutro",
                name: "Tower Bridge",
                desc: "Šetnja preko mosta",
                type: "🌉"
            },
            {
                time: "prijepodne",
                name: "Leadenhall Market",
                desc: "Harry Potter lokacija",
                type: "🧙"
            },
            {
                time: "podne",
                name: "St Paul's Cathedral",
                desc: "Razgledavanje izvana",
                type: "⛪"
            },
            {
                time: "podne",
                name: "Millennium Bridge",
                desc: "Još jedna Harry Potter lokacija",
                type: "🧙"
            },
            {
                time: "kasno poslijepodne",
                name: "Sky Garden",
                desc: "Pogled na London – idealno pred zalazak",
                type: "🌇"
            },
            {
                time: "večer",
                name: "Sister Ray",
                desc: "Record shop",
                type: "🎵"
            },
            {
                time: "večer",
                name: "Reckless Records",
                desc: "Record shop",
                type: "🎵"
            },
            {
                time: "večer",
                name: "St Martins Models",
                desc: "Modeli autića – Cecil Court",
                type: "🚗"
            },
            {
                time: "večer",
                name: "Chinatown / Soho",
                desc: "Zadnja večer u Londonu",
                type: "🍜"
            }
        ]
    },

    {
        date: "SRI 14.10.",
        title: "Povratak",
        icon: "✈️",
        places: [
            {
                time: "rano jutro",
                name: "London → Heathrow",
                desc: "Let u 08:40",
                type: "🚆"
            },
            {
                time: "08:40",
                name: "Heathrow Airport",
                desc: "✈️ Povratak kući",
                type: "✈️"
            }
        ]
    }
];


function showPlan() {

   function showPlan() {

    const container = document.querySelector(".container");

    let html = `
        <div class="page-header">
            <button class="back-button" onclick="goHome()">← Početna</button>
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

                <div class="places">
        `;

        day.places.forEach((place, placeIndex) => {

            const key = `visited-${dayIndex}-${placeIndex}`;
            const visited = localStorage.getItem(key) === "true";

            html += `
                <div class="place ${visited ? "visited" : ""}">

                    <button
                        class="check-button"
                        onclick="toggleVisited(${dayIndex}, ${placeIndex})">
                        ${visited ? "✓" : ""}
                    </button>

                    <div class="place-icon">
                        ${place.type}
                    </div>

                    <div class="place-info">

                        <div class="place-time">
                            ${place.time}
                        </div>

                        <strong>
                            ${place.name}
                        </strong>

                        <p>
                            ${place.desc}
                        </p>

                    </div>

                    <button
                        class="map-button"
                        onclick="openMaps('${place.name}, London')">
                        🗺️
                    </button>

                </div>
            `;
        });

        html += `
                </div>
            </section>
        `;
    });

    container.innerHTML = html;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function toggleVisited(dayIndex, placeIndex) {

    const key = `visited-${dayIndex}-${placeIndex}`;
    const current = localStorage.getItem(key) === "true";

    localStorage.setItem(key, !current);

    showPlan();
}

function goHome() {
    location.reload();
}


function openMaps(place) {

    const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(place);

    window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", () => {

    const menuCards =
        document.querySelectorAll(".menu-card");

    menuCards.forEach((card, index) => {

        card.addEventListener("click", () => {

            if (index === 0) {

                showPlan();

            } else {

                alert(
                    "Ovaj dio aplikacije još slažemo. 😉\n\n" +
                    "Uskoro: karta, ploče, tržnice, Harry Potter, muzeji..."
                );

            }

        });

    });

});
