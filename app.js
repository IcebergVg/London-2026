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

            <button class="menu-card" onclick="comingSoon('Karta')">
                <span>🗺️</span>
                <strong>Karta</strong>
                <small>Mjesta i navigacija</small>
            </button>

            <button class="menu-card" onclick="comingSoon('Ploče')">
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

            <button class="menu-card" onclick="comingSoon('Budžet')">
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

                <div class="places">
        `;

        day.places.forEach((place, placeIndex) => {

            const id = `day-${dayIndex}-place-${placeIndex}`;
            const checked = localStorage.getItem(id) === "true";

            html += `
                <div class="place ${checked ? "visited" : ""}">

                    <button
                        class="check-button"
                        onclick="toggleVisited('${id}', this)">
                        ${checked ? "✓" : "○"}
                    </button>

                    <div class="place-icon">${place[3]}</div>

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
} else if (index === 9) {
    showNotes();
} else {
    comingSoon(card.querySelector("strong").textContent);
}

        });

    });

});
