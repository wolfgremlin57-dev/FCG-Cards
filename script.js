function render() {
    const container = document.getElementById("results");
    container.innerHTML = "";

    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const pageCards = filteredCards.slice(start, end);

    pageCards.forEach(card => {
        // Create card...
    });


    const totalPages = Math.max(1, Math.ceil(filteredCards.length / cardsPerPage));

    document.getElementById("pageInfo").textContent =
        `Page ${currentPage} of ${totalPages}`;

    renderPagination();
} 

            const cardsPerPage = 75;
        let currentPage = 1;
let filteredCards = [];

window.onload = () => {
    filteredCards = [...cards];
    render();
};
            function render(list) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    const pageCards = filteredCards.slice(start, end);

                pageCards.forEach(card => {
                    container.innerHTML += `
        <div class="card">
          <div class="image-container">
    <img src="${card.image}" class="card-image">
</div>

    <div class="card-body" hidden>
                <h3>${card.name?.replace(/\(\?\)/g, "<mark class = 'smallqm'>(\?\)</mark>").replace(/VIRUS/g, "<mark class = 'mediocrepurple'>VIRUS</mark>").replace(/Giga Monty/g, "<mark class = 'malharegreen'>Giga Monty</mark>") || " "}</h3>
                ${card.origin ? `<p>Origin: ${card.origin.replace(/{Other}/g, "")}</p>` : ""}
                ${card.set ? `<p>Set/ID: ${card.set}</p>` : ""}
                ${card.credit ? `<p>Artist's Name: ${card.credit}</p>` : ""}
                ${card.rarity ? `<p>Rarity: ${card.rarity}</p>` : ""}
                ${card.power ? `<p>Power: ${card.power.replace(/_Null/g, "Null").replace(/H100/g, "100")}</p>` : ""}
                ${card.Jp ? `<p>JP: ${card.Jp}</p>` : ""}
                ${card.design ? `<p>Design: ${card.design}</p>` : ""}
                ${card.type ? `<p>Type: ${card.type}</p>` : ""}
                ${card.Map ? `<p>Map: ${card.Map.replace(/_/g, " ").replace(/OfficeLR/g, "Office").replace(/Front/g, "Front Row")}</p>` : ""}
                <p>Effect: ${card.effect?.replace(/AGGRESSIVE. /g, "<br><i>Aggressive.</i><br>").replace(/aGGRESSIVE. /g, "<i>Aggressive.</i><br>").replace(/aGGRESSIVe/g, "<i>Aggressive</i>").replace(/AGGRESSIVe. /g, "<br><i>Aggressive.</i> ")
                             .replace(/DEFENDER. /g, "<br><i>Defender.</i><br>").replace(/dEFENDER. /g, "<i>Defender.</i><br>").replace(/dEFENDEr/g, "<i>Defender</i>").replace(/DEFENDEr. /g, "<br><i>Defender.</i> ")
                             .replace(/UNSTOPPABLE. /g, "<br><i>Unstoppable.</i><br>").replace(/uNSTOPPABLE. /g, "<i>Unstoppable.</i><br>").replace(/uNSTOPPABLe/g, "<i>Unstoppable</i>").replace(/UNSTOPPABLe. /g, "<br><i>Unstoppable.</i> ")
                             .replace(/RETIRED. /g, "<br><i>Retired.</i><br>").replace(/rETIRED/g, "<i>Retired.</i><br>").replace(/rETIREd/g, "<i>Retired</i>").replace(/RETIREd. /g, "<br><i>Retired.</i> ").replace(/\{\ReTiRed\}/g, "<i>{Retired}</i>")
                             .replace(/SCRAP/g, "<i>Scrap</i>").replace(/ PERSISTENT. /g, "<br><i>Persistent.</i><br>").replace(/ pERSISTENT. /g, "<i>Persistent.</i><br>").replace(/pERSISTENt/g, "<i>Persistent</i>").replace(/ PERSISTENt. /g, "<br><i>Persistent.</i> ")
                             .replace(/ARCHIVE/g, "<i>Archive</i>").replace(/ BIZARRE. /g, "<br><i>Bizarre.</i><br>").replace(/bIZARRE. /g, "<i>Bizarre.</i><br>").replace(/bIZARRe/g, "<i>Bizarre</i>").replace(/BIZARRe. /g, "<br><i>Bizarre.</i> ").replace(/{BIzaRRE}/g, "<i>{Bizarre}</i>")
                             .replace(/GIANT. /g, "<br><i>Giant.</i><br>").replace(/gIANT. /g, "<i>Giant.</i><br>").replace(/gIANt/g, "<i>Giant</i>").replace(/GIANt. /g, "<br><i>Giant.</i> ")
                             .replace(/AUGMENTED/g, "<i>Augmented</i>").replace(/AUGMENT/g, "<i>Augment</i>").replace(/REQUIREMENT:/g, "<b>Requirement:</b>").replace(/STACK/g, "<i>Stack</i>")
                             .replace(/MASTER/g, "<i>Master</i>").replace(/ AGONY:/g, "<br><i><mark class = 'agony'>AGONY:</mark></i>").replace(/ AGONy:/g, "<br><i><mark class = 'agony'>AGONY:</mark></i><br>").replace(/ aGONY:/g, "<i><mark class = 'agony'> AGONY:</mark></i>").replace(/{AGONY}/g, "{<i><mark class = 'agony'>AGONY</mark></i>}").replace(/ aGONY:/g, "<i><mark class = 'agony'> AGONY:</mark></i>").replace(/ HOAX./g, "<br><i>Hoax.</i><br>")
                             .replace(/ ONCE PER TURN:/g, "<br><mark>Once Per Turn:</mark>").replace(/Once PER TURN/g, "<br><mark class = 'altyellow'>Once Per Turn</mark>").replace(/ ONCE per TURN/g, "<br><mark class = 'agony'>Once Per Turn</mark>").replace(/ ONCE PER Turn:/g, "<br><mark class = 'green'>Once Per Turn:</mark>").replace(/ ONCE PER TurN/g, "<br><mark class = 'malharegreen'>Once Per Turn</mark>").replace(/ OnCe pEr tURn:/g, "<br><mark class = 'orange'>Once Per Turn:</mark>").replace(/ Once per turn/g, "<br><mark class = 'mediocrepurple'>Once Per Turn</mark>").replace(/ OncE PER TURN:/g, "<br><mark class = 'purple'>Once Per Turn:</mark>").replace(/ oNCe PeR TuRN/g, "<br><mark class = 'altblue'>Once Per Turn</mark>").replace(/ONce per turn:/g, "<mark class = 'graftedorange'>Once Per Turn:</mark>").replace(/once per turn:/g, "<mark>Once Per Turn:</mark>").replace(/ oNCE peR TUrN:/g, "<br><mark class = 'pastelpink'>Once Per Turn:</mark>")
                             .replace(/ ONCE PER EVERY OTHER TURN:/g, "<br><mark>Once Per Every Other Turn:</mark>").replace(/ ONCE PER EITHER TURN:/g, "<br><mark>Once Per Either Turn:</mark>").replace(/ Once PER EITHER TURN:/g, "<br><mark class = 'green'>Once Per Either Turn:</mark>")
                             .replace(/ TWICE PER TURN:/g, "<br><mark>Twice Per Turn:</mark>").replace(/ tWice PEr TURN/g, "<br><mark class = retroorange>Twice </mark><mark class = altblue>Per </mark><mark class = agony>Turn</mark>").replace(/ THRICE PER TURN:/g, "<br><mark class='orange'>Thrice Per Turn:</mark>")
                             .replace(/ ONCE PER EFFECT A TURN:/g, "<br><mark>Once Per Effect a Turn:</mark>").replace(/ ONCE PER OPPONENT'S TURN:/g, "<br><mark>Once Per Opponent's Turn:</mark>")
                             .replace(/ START OF YOUR TURN:/g, "<br><mark>Start of Your Turn:</mark>").replace(/ Start OF YOUR TURN:/g, "<br><mark class = 'blue'>Start of Your Turn:</mark>").replace(/ START of YOUR TURN/g, "<br><mark class = 'altblue'>Start of Your Turn</mark>").replace(/ START OF Your TURN:/g, "<br><mark class = 'red'>Start of Your Turn:</mark>").replace(/ Start oF YoUR TURN/g, "<br><mark class = 'altyellow'>Start of Your Turn</mark>").replace(/ START OF YOUR Turn:/g, "<br><mark class = 'green'>Start of Your Turn:</mark>")
                             .replace(/ START OF EITHER TURN:/g, "<br><mark class = 'red'>Start of Either Turn:</mark>").replace(/ START OF CARD OWNER'S TURN:/g, "<br><mark>Start of Card Owner's Turn:</mark>").replace(/ START AND END OF YOUR TURN:/g, "<br><mark>Start/End Of Your Turn</mark>")
                             .replace(/ END OF YOUR TURN:/g, "<br><mark>End of Your Turn:</mark>").replace(/ END OF EITHER TURN:/g, "<br><mark>End of Either Turn:</mark>").replace(/ End OF EITHER TURN:/g, "<br><mark class = 'pink'>End of Either Turn:</mark>").replace(/ END of EITHER TURN/g, "<br><mark class = 'altpink'>End of Either Turn</mark>")
                             .replace(/ START OF YOUR OPPONENT'S TURN:/g, "<br><mark>Start of Your Opponent's Turn:</mark>").replace(/ WHEN PLAYED:/g, "<br><mark>When Played:</mark>").replace(/ When PLAYED/g, "<br><mark class = 'altyellow'>When Played</mark>").replace(/ WHEN Played:/g, "<br><mark class = 'red'>When Played:</mark>").replace(/ When PlayeD:/g, "<br><mark>Wh</mark><mark class = 'orange'>en Pl</mark><mark class = 'pastelpink'>ayed:</mark>").replace(/ whEn played/g, "<br><mark class = 'graftedorange'>When </mark><mark class = 'altyellow'>Played</mark>").replace(/ WHEn pLAYED:/g, "<br><mark class = 'green'>When Played:</mark>")
                             .replace(/ WHEN KILLED:/g, "<br><mark>When Killed:</mark>").replace(/ WHEN KILLED BY FIGHTING:/g, "<br><mark>When Killed By Fighting:</mark>").replace(/ When KILLED BY FIGHTING:/g, "<br><mark class = 'red'>When Killed By Fighting:</mark>").replace(/ WHEN THIS CARD DEACTIVATES OR IS KILLED:/g, "<br><mark>When This Card Deactivates or Is Killed:</mark>").replace(/ WHEN ATTACKING:/g, "<br><mark>When Attacking:</mark>").replace(/ When ATTACKING:/g, "<br><mark class = 'red'>When Attacking:</mark>").replace(/ BEFORE ATTACKING:/g, "<br><mark>Before Attacking:</mark>").replace(/ AFTER ATTACKING:/g, "<br><mark>After Attacking:</mark>").replace(/ WHEN BLOCKING:/g, "<br><mark>When Blocking:</mark>").replace(/ AFTER ATTACKING OR BLOCKING:/g, "<br><mark>After Attacking/Blocking:</mark>").replace(/ WHEN FIGHTING:/g, "<br><mark>When Fighting:</mark>").replace(/ UPON VIRUS:/g, "<br><mark class = viruspurple>>UPON_{VIRUS}:</mark>").replace(/ UPON LIGHT:/g, "<br><mark class = lightyellow>>UPON_{LIGHT}:</mark>").replace(/ WITH LIGHT:/g, "<br><mark class = lightyellow>>WITH_{LIGHT}:</mark>").replace(/Fabulous!/g, "<mark class = 'mediocrepurple'>Fabulous!</mark>").replace(/\(\MUST\)/g, "<u>must</u>").replace(/GET RID OF IT./g, "<b><i><mark class = 'idbearpurple'><mark class = 'idunder'>GET RID OF IT.</mark></mark></i></b>") || " "}</p>
            </div>
        </div>
        `;
                });
document.querySelectorAll(".card-image").forEach(img => {
    img.onclick = function () {
        const body = this.closest(".card").querySelector(".card-body");
        body.hidden = !body.hidden;
    };
});
            
                const totalPages = Math.max(1, Math.ceil(filteredCards.length / cardsPerPage));
                document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages}`;
            
    document.getElementById("pageInfo").textContent =
        `Page ${currentPage} of ${totalPages}`;

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
    const pagination = document.getElementById("pagination");

    pagination.innerHTML = "";

    const go = (page) => {
        currentPage = Math.min(Math.max(1, page), totalPages);
        render();
    };

    // First
    pagination.appendChild(makeBtn("First", () => go(1), currentPage === 1));

    // Prev
    pagination.appendChild(makeBtn("Prev", () => go(currentPage - 1), currentPage === 1));

    // Pages
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 4);

    for (let i = startPage; i <= endPage; i++) {
        pagination.appendChild(
            makeBtn(i, () => go(i), i === currentPage)
        );
    }

    // Next
    pagination.appendChild(makeBtn("Next", () => go(currentPage + 1), currentPage === totalPages));

    // Last
    pagination.appendChild(makeBtn("Last", () => go(totalPages), currentPage === totalPages));
}

function makeBtn(text, onClick, disabled) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.disabled = disabled;
    btn.onclick = onClick;
    return btn;
}

            function update() {
                filteredCards = [...cards];

                const search = document.getElementById("search").value.toLowerCase();
                const effect = document.getElementById("effect").value.toLowerCase();
                const set = document.getElementById("Set").value;
                const credit = document.getElementById("credit").value;
                const rarity = document.getElementById("Rarity").value;
                const type = document.getElementById("typeFilter").value;
                const typeinclusivity = document.getElementById("Typing_Options").value;
                const design = document.getElementById("Design").value;
                const designinclusivity = document.getElementById("Design_Options").value;
                const map = document.getElementById("Map").value;
                const mapinclusivity = document.getElementById("Map_Options").value;
                const power = document.getElementById("Power").value;
                const Jp = document.getElementById("Jp").value;
                const origin = document.getElementById("Origin").value;
                const sorting = document.getElementById("Sort").value;
                const aliasMap = {
                    Uber: ["Uber", "Omni"],
                    Right_Side: ["Right_Side", "Uber", "Omni"],
                    Left_Side: ["Left_Side", "Uber", "Omni"],
                    Front: ["Front", "Omni"],
                    Halls: ["Halls", "Front", "Omni"],
                    Right_Hall: ["Right_Hall", "Halls", "Front", "Right_Side", "Uber", "Omni"],
                    Vent: ["Vent", "Front", "Omni"],
                    Left_Hall: ["Left_Hall", "Halls", "Front", "Left_Side", "Uber", "Omni"],
                    OfficeLR: ["OfficeLR", "Uber", "Omni"],
                    Right_Office: ["Right_Office", "OfficeLR", "Right_Side", "Uber", "Omni"],
                    Left_Office: ["Left_Office", "OfficeLR", "Left_Side", "Uber", "Omni"],
                };

                if (search) {
                    filteredCards = filteredCards.filter(c => c.name.toLowerCase().includes(search));
                }

                if (effect) {
                    filteredCards = filteredCards.filter(c => c.effect && c.effect.toLowerCase().includes(effect));
                }

                if (set) {
                    filteredCards = filteredCards.filter(c => c.set && c.set.includes(set));
                }

                if (rarity) {
                    filteredCards = filteredCards.filter(c => c.rarity === rarity);
                }

               if (credit) {
                    filteredCards = filteredCards.filter(c => c.credit && c.credit.includes(credit));
                }

                if (typeinclusivity === "Exact") {
                    if (type) {
                        filteredCards = filteredCards.filter(c => c.type === type);
                    }
                } else if (typeinclusivity === "Inclusive") {
                    if (type) {
                        filteredCards = filteredCards.filter(c => c.type.includes(type));
                    }
                } else if (typeinclusivity === "Exclusive") {
                    if (type) {
                        filteredCards = filteredCards.filter(c => !c.type.includes(type));
                    }
                }

                if (designinclusivity === "Exact") {
                    if (design) {
                        const designValues = design.split(",");
                        filteredCards = filteredCards.filter(c => c.design === design);
                    }
                }
                if (designinclusivity === "Inclusive") {
                    if (design) {
                        const designValues = design.split(",");
                        filteredCards = filteredCards.filter(c => c.design && designValues.some(v => c.design.includes(v)));
                    }
                }
                if (designinclusivity === "Exclusive") {
                    if (design) {
                        const designValues = design.split(",");
                        filteredCards = filteredCards.filter(c => c.design && !designValues.some(v => c.design.includes(v)));
                    }
                }

                if (mapinclusivity === "Exact") {
                    if (map) {
                        filteredCards = filteredCards.filter(c => c.Map === map);
                    }
                } else if (mapinclusivity === "Inclusive") {
                    if (map) {
                        const aliases = aliasMap[map] || [];
                        const mapValues = [map, ...aliases];
                        filteredCards = filteredCards.filter(c => c.Map && mapValues.some(v => c.Map.includes(v)));
                    }
                } else if (mapinclusivity === "Exclusive") {
                    if (map) {
                        const aliases = aliasMap[map] || [];
                        const mapValues = [map, ...aliases];
                        filteredCards = filteredCards.filter(c => c.Map && !mapValues.some(v => c.Map.includes(v)));
                    }
                }

                if (power) {
                    filteredCards = filteredCards.filter(c => c.power === power);
                }

                if (Jp) {
                    filteredCards = filteredCards.filter(c => c.Jp === Jp);
                }

                if (origin) {
                    filteredCards = filteredCards.filter(c => c.origin && c.origin.includes(origin));
                }
                if (credit) {
                    filteredCards = filteredCards.filter(c => c.credit && c.credit.includes(credit));
                }


                if (sorting === "ID") {//Nothing happens
                } else if (sorting === "Alphabetically") {
                    filteredCards.sort( (a, b) => a.name.localeCompare(b.name));
                } else if (sorting === "Alphabetically Reversed") {
                    filteredCards.sort( (a, b) => b.name.localeCompare(a.name));
                } else if (sorting === "Rarity") {
                    filteredCards.sort( (a, b) => a.rarity.localeCompare(b.rarity));
                } else if (sorting === "Rarity Reversed") {
                    filteredCards.sort( (a, b) => b.rarity.localeCompare(a.rarity));
                } else if (sorting === "Power") {
                    filteredCards.sort( (a, b) => a.power.localeCompare(b.power));
                } else if (sorting === "Power Reversed") {
                    filteredCards.sort( (a, b) => b.power.localeCompare(a.power));
                } else if (sorting === "JP") {
                    filteredCards.sort( (a, b) => {
                        const A = (a.Jp || "");
                        const B = (b.Jp || "");
                        return A.localeCompare(B);
                    }
                    );
                } else if (sorting === "JP Reversed") {
                    filteredCards.sort( (a, b) => {
                        const A = (a.Jp || "");
                        const B = (b.Jp || "");
                        return B.localeCompare(A);
                    }
                    );
                }

                currentPage = 1;
                render(filteredCards);
            }
document.getElementById("clearFilters").addEventListener("click", () => {

    // Clear search boxes
    document.getElementById("search").value = "";
    document.getElementById("effect").value = "";

    // Reset every dropdown
    document.getElementById("typeFilter").selectedIndex = 0;
    document.getElementById("Design").selectedIndex = 0;
    document.getElementById("Rarity").selectedIndex = 0;
    document.getElementById("Set").selectedIndex = 0;
    document.getElementById("Map").selectedIndex = 0;
    document.getElementById("Power").selectedIndex = 0;
    document.getElementById("Jp").selectedIndex = 0;
    document.getElementById("Origin").selectedIndex = 0;
    document.getElementById("Map_Options").selectedIndex = 0;
    document.getElementById("Typing_Options").selectedIndex = 0;
    document.getElementById("Design_Options").selectedIndex = 0;
    document.getElementById("credit").selectedIndex = 0; // if this is a <select>
    document.getElementById("Sort").selectedIndex = 0;

    currentPage = 1;
    update();
});

            // Search/Filter Events
            document.getElementById("search").addEventListener("input", update);
            document.getElementById("effect").addEventListener("input", update);
            document.getElementById("typeFilter").addEventListener("change", update);
            document.getElementById("Design").addEventListener("change", update);
            document.getElementById("Rarity").addEventListener("change", update);
            document.getElementById("Set").addEventListener("change", update);
            document.getElementById("Map").addEventListener("change", update);
            document.getElementById("Power").addEventListener("change", update);
            document.getElementById("Jp").addEventListener("change", update);
            document.getElementById("Origin").addEventListener("change", update);
            document.getElementById("Map_Options").addEventListener("change", update);
            document.getElementById("Typing_Options").addEventListener("change", update);
            document.getElementById("Design_Options").addEventListener("change", update);
            document.getElementById("Sort").addEventListener("change", update);
            document.getElementById("credit").addEventListener("change", update);

   // Initial render
            render(filteredCards);
