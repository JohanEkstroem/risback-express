export const renderCinemaCommercial = () => {
    console.log("cinema commercial loaded");
    //description for events
    const cEventDescription = [
        "Come and check out the christmas theme of our cinema!(will change all texts to swedish later)",
        "share the link of this event and get discount until this year!",
        "For the customers who wear a mask, we offer 20% discount!",
    ];
    for (let i = 1; i <= 3; i++) {
        const eventContainer = document.querySelector(".cinemaEvent");
        //create div, img and span in cinemaEvent
        const cinemaEvents = createElement("div", "cEvents right");
        const eventImg = createElement("img", "cImg");
        eventImg.src = `src/img/cinema${i}.jpg`;
        const emptyDiv = createElement("div", "emptyDiv");
        const eventDesc = createElement("span", "cEventDesc");
        //give description
        eventDesc.innerText = cEventDescription[i - 1];
        //append
        cinemaEvents.appendChild(eventImg);
        cinemaEvents.appendChild(emptyDiv);
        emptyDiv.appendChild(eventDesc);
        eventContainer.appendChild(cinemaEvents);
    }
};

//function to create element
export function createElement(type, name) {
    const element = document.createElement(type);
    element.setAttribute("class", name);
    return element;
}

export const renderCinemaCommercialDiscount = () => {
    console.log('renderSnacksCommercial loaded')
    const EventDescriptionArray = [
        "Dela på Facebook och få 10% rabatt på popcorn",
        "Betala med Mastercard och få 5% rabatt på läsk",
        "Rabattkod: jul2021"
    ]
    for (let i = 1; i <= 3; i++) {
        const snacksEvent = document.querySelector('.snacksEvent');
        //create div, img and span in movieEvent
        const cinemaEvents = createElement('div', 'cEvents right');
        const eventImg = createElement('img', 'cImg');
        eventImg.src = `src/img/cinema-discount${i}.jpg`;
        const emptyDiv = createElement('div', 'emptyDiv');
        const eventDesc = createElement('span', 'cEventDesc');
        //give description
        eventDesc.innerText = EventDescriptionArray[i - 1];
        //append
        cinemaEvents.appendChild(eventImg);
        cinemaEvents.appendChild(emptyDiv);
        emptyDiv.appendChild(eventDesc);
        snacksEvent.appendChild(cinemaEvents);
    }
}


export const renderCinemaCommercialEvents = () => {
    console.log('renderSnacksCommercial loaded')
    const EventDescriptionArray = [
        "Under vissa utvalda dagar visar vi Pirates of the Caribbean och då använder vi pirat - tema i hela salongen.Yaarrr",
        "Under maj månad visar vi Star Wars och har därmed Star Wars-tema i hela salongen. May the fourth be with you.",
        "Under vissa utvalda dagar visar vi Rocky-serien och då använder vi Rocky-tema i hela salongen. Aaadriaaaaan"
    ]
    for (let i = 1; i <= 3; i++) {
        const movieEvent = document.querySelector('.movieEvent');
        //create div, img and span in movieEvent
        const cinemaEvents = createElement('div', 'cEvents right');
        const eventImg = createElement('img', 'cImg');
        eventImg.src = `src/img/cinema-event${i}.jpg`;
        const emptyDiv = createElement('div', 'emptyDiv');
        const eventDesc = createElement('span', 'cEventDesc');
        //give description
        eventDesc.innerText = EventDescriptionArray[i - 1];
        //append
        cinemaEvents.appendChild(eventImg);
        cinemaEvents.appendChild(emptyDiv);
        emptyDiv.appendChild(eventDesc);
        movieEvent.appendChild(cinemaEvents);
    }
}