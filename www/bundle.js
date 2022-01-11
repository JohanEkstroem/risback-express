/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMovieAPI\": () => (/* binding */ loadMovieAPI)\n/* harmony export */ });\nconst loadMovieAPI = async () => {\r\n  try {\r\n    const response = await fetch(\"./src/data.json\");\r\n    const data = await response.json();\r\n    return data.movies;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/api.js?");

/***/ }),

/***/ "./src/js/availableMovies.js":
/*!***********************************!*\
  !*** ./src/js/availableMovies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"availableMovies\": () => (/* binding */ availableMovies)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n/* harmony import */ var _commercial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commercial */ \"./src/js/commercial.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n\r\n\r\n\r\n\r\nconst availableMovies = async () => {\r\n  const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.loadMovieAPI)();\r\n  let date = new Date();\r\n  //get tomorrow\r\n  let getTomorrow = date;\r\n  getTomorrow.setDate(getTomorrow.getDate() + 1);\r\n  let tomorrow = formatDateToString(getTomorrow);\r\n\r\n  let availableForToday = (0,_filter__WEBPACK_IMPORTED_MODULE_2__.filterToday)(data);\r\n  let availableForTomorrow = data.filter((item) =>\r\n    item.date.includes(tomorrow)\r\n  );\r\n  //sort start time of movie\r\n  sortFunc(availableForToday);\r\n  sortFunc(availableForTomorrow);\r\n\r\n  //make lists in today\r\n  availableForToday.forEach((item) => {\r\n    createLists(item, \"today\");\r\n  });\r\n\r\n  //make lists in tomorrow\r\n  availableForTomorrow.forEach((item) => {\r\n    createLists(item, \"tomorrow\");\r\n  });\r\n  if (availableForTomorrow.length === 0) {\r\n    let warning = document.querySelector(\".tomorrow\");\r\n    let span = (0,_commercial__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"span\", \"warning\");\r\n    span.innerText = `There is no available movies`;\r\n    span.style.fontFamily = \"anton\";\r\n    span.style.color = \"grey\";\r\n    warning.appendChild(span);\r\n  }\r\n};\r\n\r\n//when current day is 31, then it sets to 1 for the next day I suppose..\r\nfunction formatDateToString(date) {\r\n  let dd = (date.getDate() < 10 ? \"0\" : \"\") + date.getDate();\r\n  let MM = (date.getMonth() + 1 < 10 ? \"0\" : \"\") + (date.getMonth() + 1);\r\n  let year = date.getFullYear();\r\n  return year + \"-\" + MM + \"-\" + dd;\r\n}\r\n\r\n//create lists\r\nconst createLists = (item, className) => {\r\n  const todayContainer = document.querySelector(`.${className}`);\r\n  const ul = (0,_commercial__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"ul\", \"movieListUi\");\r\n  const li = (0,_commercial__WEBPACK_IMPORTED_MODULE_1__.createElement)(\"li\", \"movieListLi\");\r\n  li.innerHTML = `${item.time}:00 <i class=\"fas fa-ticket-alt ticketIcon\"></i> ${item.title} 99:-`;\r\n  ul.appendChild(li);\r\n  todayContainer.appendChild(ul);\r\n};\r\n\r\n//sorting time\r\nconst sortFunc = (item) => {\r\n  item.sort(function (a, b) {\r\n    return a.time - b.time;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/availableMovies.js?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nfunction carousel() {\r\n  let carousel = document.querySelector(\".carousel\");\r\n  let flkty = new Flickity(carousel, {\r\n    imagesLoaded: true,\r\n    percentPosition: false,\r\n    wrapAround: true,\r\n    autoPlay: true,\r\n  });\r\n\r\n  let imgs = carousel.querySelectorAll(\".carousel-cell img\");\r\n  let docStyle = document.documentElement.style;\r\n  let transformProp =\r\n    typeof docStyle.transform == \"string\" ? \"transform\" : \"WebkitTransform\";\r\n\r\n  flkty.on(\"scroll\", function () {\r\n    flkty.slides.forEach(function (slide, i) {\r\n      let img = imgs[i];\r\n      let x = ((slide.target + flkty.x) * -1) / 3;\r\n      img.style[transformProp] = \"translateX(\" + x + \"px)\";\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/commercial.js":
/*!******************************!*\
  !*** ./src/js/commercial.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCinemaCommercial\": () => (/* binding */ renderCinemaCommercial),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"renderCinemaCommercialDiscount\": () => (/* binding */ renderCinemaCommercialDiscount),\n/* harmony export */   \"renderCinemaCommercialEvents\": () => (/* binding */ renderCinemaCommercialEvents)\n/* harmony export */ });\nconst renderCinemaCommercial = () => {\r\n    console.log(\"cinema commercial loaded\");\r\n    //description for events\r\n    const cEventDescription = [\r\n        \"Come and check out the christmas theme of our cinema!(will change all texts to swedish later)\",\r\n        \"share the link of this event and get discount until this year!\",\r\n        \"For the customers who wear a mask, we offer 20% discount!\",\r\n    ];\r\n    for (let i = 1; i <= 3; i++) {\r\n        const eventContainer = document.querySelector(\".cinemaEvent\");\r\n        //create div, img and span in cinemaEvent\r\n        const cinemaEvents = createElement(\"div\", \"cEvents right\");\r\n        const eventImg = createElement(\"img\", \"cImg\");\r\n        eventImg.src = `src/img/cinema${i}.jpg`;\r\n        const emptyDiv = createElement(\"div\", \"emptyDiv\");\r\n        const eventDesc = createElement(\"span\", \"cEventDesc\");\r\n        //give description\r\n        eventDesc.innerText = cEventDescription[i - 1];\r\n        //append\r\n        cinemaEvents.appendChild(eventImg);\r\n        cinemaEvents.appendChild(emptyDiv);\r\n        emptyDiv.appendChild(eventDesc);\r\n        eventContainer.appendChild(cinemaEvents);\r\n    }\r\n};\r\n\r\n//function to create element\r\nfunction createElement(type, name) {\r\n    const element = document.createElement(type);\r\n    element.setAttribute(\"class\", name);\r\n    return element;\r\n}\r\n\r\nconst renderCinemaCommercialDiscount = () => {\r\n    console.log('renderSnacksCommercial loaded')\r\n    const EventDescriptionArray = [\r\n        \"Dela på Facebook och få 10% rabatt på popcorn\",\r\n        \"Betala med Mastercard och få 5% rabatt på läsk\",\r\n        \"Rabattkod: jul2021\"\r\n    ]\r\n    for (let i = 1; i <= 3; i++) {\r\n        const snacksEvent = document.querySelector('.snacksEvent');\r\n        //create div, img and span in movieEvent\r\n        const cinemaEvents = createElement('div', 'cEvents right');\r\n        const eventImg = createElement('img', 'cImg');\r\n        eventImg.src = `src/img/cinema-discount${i}.jpg`;\r\n        const emptyDiv = createElement('div', 'emptyDiv');\r\n        const eventDesc = createElement('span', 'cEventDesc');\r\n        //give description\r\n        eventDesc.innerText = EventDescriptionArray[i - 1];\r\n        //append\r\n        cinemaEvents.appendChild(eventImg);\r\n        cinemaEvents.appendChild(emptyDiv);\r\n        emptyDiv.appendChild(eventDesc);\r\n        snacksEvent.appendChild(cinemaEvents);\r\n    }\r\n}\r\n\r\n\r\nconst renderCinemaCommercialEvents = () => {\r\n    console.log('renderSnacksCommercial loaded')\r\n    const EventDescriptionArray = [\r\n        \"Under vissa utvalda dagar visar vi Pirates of the Caribbean och då använder vi pirat - tema i hela salongen.Yaarrr\",\r\n        \"Under maj månad visar vi Star Wars och har därmed Star Wars-tema i hela salongen. May the fourth be with you.\",\r\n        \"Under vissa utvalda dagar visar vi Rocky-serien och då använder vi Rocky-tema i hela salongen. Aaadriaaaaan\"\r\n    ]\r\n    for (let i = 1; i <= 3; i++) {\r\n        const movieEvent = document.querySelector('.movieEvent');\r\n        //create div, img and span in movieEvent\r\n        const cinemaEvents = createElement('div', 'cEvents right');\r\n        const eventImg = createElement('img', 'cImg');\r\n        eventImg.src = `src/img/cinema-event${i}.jpg`;\r\n        const emptyDiv = createElement('div', 'emptyDiv');\r\n        const eventDesc = createElement('span', 'cEventDesc');\r\n        //give description\r\n        eventDesc.innerText = EventDescriptionArray[i - 1];\r\n        //append\r\n        cinemaEvents.appendChild(eventImg);\r\n        cinemaEvents.appendChild(emptyDiv);\r\n        emptyDiv.appendChild(eventDesc);\r\n        movieEvent.appendChild(cinemaEvents);\r\n    }\r\n}\n\n//# sourceURL=webpack://grupp-d/./src/js/commercial.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterToday\": () => (/* binding */ filterToday),\n/* harmony export */   \"filterUpcoming\": () => (/* binding */ filterUpcoming),\n/* harmony export */   \"filterChildCinema\": () => (/* binding */ filterChildCinema)\n/* harmony export */ });\nconst currentDay = `${new Date().getFullYear()}-${\r\n  new Date().getMonth() + 1\r\n}-${new Date().getDate()}`;\r\n\r\nconst filterToday = (movies) =>\r\n  movies.filter((movie) => movie.date.includes(currentDay));\r\n\r\nconst filterUpcoming = (movies) =>\r\n  movies.filter((movie) => !movie.date.includes(currentDay));\r\n\r\nconst filterChildCinema = (movies) =>\r\n  movies.filter((movie) => movie.age < 11);\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ \"./src/js/carousel.js\");\n/* harmony import */ var _commercial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commercial */ \"./src/js/commercial.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _availableMovies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./availableMovies */ \"./src/js/availableMovies.js\");\n/* harmony import */ var _pages_movieBanners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/movieBanners */ \"./src/js/pages/movieBanners.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navbar__WEBPACK_IMPORTED_MODULE_2__]);\n_navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(() => {\r\n    (0,_carousel__WEBPACK_IMPORTED_MODULE_0__.carousel)();\r\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_2__.navbarResponsive)();\r\n    (0,_commercial__WEBPACK_IMPORTED_MODULE_1__.renderCinemaCommercial)();\r\n    (0,_commercial__WEBPACK_IMPORTED_MODULE_1__.renderCinemaCommercialDiscount)();\r\n    (0,_commercial__WEBPACK_IMPORTED_MODULE_1__.renderCinemaCommercialEvents)();\r\n    (0,_availableMovies__WEBPACK_IMPORTED_MODULE_3__.availableMovies)();\r\n    (0,_pages_movieBanners__WEBPACK_IMPORTED_MODULE_4__.renderBanners)();\r\n})();\n});\n\n//# sourceURL=webpack://grupp-d/./src/js/main.js?");

/***/ }),

/***/ "./src/js/movieCards.js":
/*!******************************!*\
  !*** ./src/js/movieCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieCards\": () => (/* binding */ movieCards)\n/* harmony export */ });\nconst movieCards = (data) => {\r\n  const container = document.querySelector(\".card-ctn\");\r\n  const body = document.querySelector(\"body\");\r\n\r\n  const card = document.createElement(\"div\");\r\n  card.setAttribute(\"class\", \"card\");\r\n  container.append(card);\r\n  card.addEventListener(\"click\", function(){\r\n  movieInformation();\r\n  });\r\n  \r\n  const visuals = document.createElement(\"div\");\r\n  visuals.setAttribute(\"class\", \"visuals\");\r\n  card.append(visuals);\r\n\r\n  const thumbnail = document.createElement(\"img\");\r\n  thumbnail.setAttribute(\"class\", \"thumbnail\");\r\n  thumbnail.src = data.coverImg;\r\n  visuals.append(thumbnail);\r\n\r\n  const openVideo = () => {\r\n    const videoModal = document.createElement(\"div\");\r\n    videoModal.setAttribute(\"class\", \"videoModal\");\r\n    const closeTrailerWindow = (e) => {\r\n      e.target.className.includes(\"videoModal\") ? e.target.remove() : null;\r\n    };\r\n    window.addEventListener(\"touchstart\", closeTrailerWindow);\r\n    window.addEventListener(\"click\", closeTrailerWindow);\r\n\r\n    const video = document.createElement(\"iframe\");\r\n    video.setAttribute(\"class\", \"video-trailer\");\r\n    video.setAttribute(\"target\", \"_parent\");\r\n    video.setAttribute(\"allowfullscreen\", \"true\");\r\n    video.src = `${data.trailer}`;\r\n    videoModal.append(video);\r\n    body.append(videoModal);\r\n  };\r\n\r\n  const trailer = document.createElement(\"a\");\r\n  trailer.setAttribute(\"id\", \"trailer\");\r\n  trailer.setAttribute(\"class\", \"fas fa-play-circle\");\r\n  trailer.addEventListener(\"click\", () => {\r\n    openVideo();\r\n  });\r\n  visuals.append(trailer);\r\n\r\n  const info = document.createElement(\"div\");\r\n  info.setAttribute(\"class\", \"info\");\r\n  card.append(info);\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.setAttribute(\"class\", \"title\");\r\n  title.innerText = data.title;\r\n  info.append(title);\r\n\r\n  const specInfo = document.createElement(\"p\");\r\n  specInfo.setAttribute(\"class\", \"specInfo\");\r\n  specInfo.innerText = `${data.genres} | ${data.length} | ${data.age} år`;\r\n  info.append(specInfo);\r\n\r\n  \r\n  /*   const rating = document.createElement(\"span\");\r\n  rating.setAttribute(\"class\", \"rating\");\r\n  rating.innerText = data.rating;\r\n  info.append(rating); */\r\n  \r\nconst mainContent = document.getElementById(\"movies\");\r\n  \r\nfunction movieInformation() {\r\n     mainContent.innerText =\"\";\r\n     document.getElementById(\"carousel\").innerHTML= \"\";\r\n\r\n  const movieInfoModal = document.createElement(\"div\");\r\n  movieInfoModal.setAttribute(\"id\", \"movieInfoWrapper\");\r\n  movieInfoModal.style.display = \"block\";\r\n  mainContent.append(movieInfoModal);\r\n\r\n  const movieTitle = document.createElement(\"h1\");\r\n  movieTitle.setAttribute(\"id\", \"movieTitel\");\r\n  movieTitle.innerText = `${data.title}`;\r\n  movieInfoModal.append(movieTitle);\r\n  \r\n  const movieBackgroundImage = document.createElement(\"img\");\r\n  movieBackgroundImage.setAttribute(\"id\", \"backgroundImg\");\r\n  movieBackgroundImage.src=`${data.backgroundImg}`;\r\n  movieBackgroundImage.innerText=`${data.backgroundImg}`;\r\n  movieInfoModal.append(movieBackgroundImage);\r\n\r\n  const movieCoverInfo = document.createElement(\"img\");\r\n  movieCoverInfo.setAttribute(\"id\", \"movieImgInfo\");\r\n  movieCoverInfo.src =`${data.coverImg}`;\r\n  movieCoverInfo.innerText =`${data.coverImg}`;\r\n  movieInfoModal.append(movieCoverInfo);\r\n  \r\n  const movieThumbOne = document.createElement(\"img\");\r\n  movieThumbOne.setAttribute(\"id\", \"movieThumbOne\");\r\n  movieThumbOne.src = `${data.img1}`;\r\n  movieThumbOne.innerText = `${data.img1}`;\r\n  movieInfoModal.append(movieThumbOne);\r\n\r\n  const movieThumbTwo = document.createElement(\"img\");\r\n  movieThumbTwo.setAttribute(\"id\", \"movieThumbTwo\");\r\n  movieThumbTwo.src = `${data.img2}`;\r\n  movieThumbTwo.innerText = `${data.img2}`;\r\n  movieInfoModal.append(movieThumbTwo);\r\n\r\n  const movieThumbThree = document.createElement(\"img\");\r\n  movieThumbThree.setAttribute(\"id\", \"movieThumbThree\");\r\n  movieThumbThree.src = `${data.img3}`;\r\n  movieThumbThree.innerText = `${data.img3}`;\r\n  movieInfoModal.append(movieThumbThree);\r\n\r\n  const movieSmallText = document.createElement(\"p\");\r\n  movieSmallText.setAttribute(\"id\", \"smallText\");\r\n  movieSmallText.textContent = `|Genre: ${data.genres}| Längd: ${data.length}| Rek Ålder: ${data.age}| Betyg: ${data.rating}|`;\r\n  movieInfoModal.append(movieSmallText);\r\n  \r\n  const movieInfoText= document.createElement(\"p\");\r\n  movieInfoText.setAttribute(\"id\",\"movieInfoText\");\r\n  movieInfoText.innerText= `${data.description}`;\r\n  movieInfoModal.append(movieInfoText);\r\n\r\n  const regiActors= document.createElement(\"p\");\r\n  regiActors.setAttribute(\"id\",\"regiActors\");\r\n  regiActors.innerText= `${data.regiActors}`;\r\n  movieInfoModal.append(regiActors);\r\n\r\n  const bookMovie = document.createElement(\"button\");\r\n  bookMovie.setAttribute(\"id\", \"movieBooking-cta\");\r\n  bookMovie.innerText =`Biljetter`;\r\n  movieInfoModal.append(bookMovie);\r\n};\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/movieCards.js?");

/***/ }),

/***/ "./src/js/movieMain.js":
/*!*****************************!*\
  !*** ./src/js/movieMain.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moviePageMain\": () => (/* binding */ moviePageMain)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/js/render.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ \"./src/js/filter.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\r\n\r\n\r\n\r\nconst api = await (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.loadMovieAPI)();\r\n\r\nconst moviePageMain = () => {\r\n  const container = document.querySelector(\".movies\");\r\n\r\n  const pageContainer = document.createElement(\"div\");\r\n  pageContainer.setAttribute(\"class\", \"movieMain-ctn\");\r\n  container.append(pageContainer);\r\n\r\n  const viewOptions = document.createElement(\"div\");\r\n  viewOptions.setAttribute(\"class\", \"viewOptions\");\r\n  pageContainer.append(viewOptions);\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.setAttribute(\"class\", \"page-title\");\r\n  title.innerText = \"Filmer\";\r\n  viewOptions.append(title);\r\n\r\n  /*  const list = document.createElement(\"a\");\r\n  list.setAttribute(\"id\", \"listView-cta\");\r\n  list.setAttribute(\"class\", \"fas fa-th-list\");\r\n  list.innerText = \"Lista\";\r\n  viewOptions.append(list);\r\n\r\n  const poster = document.createElement(\"a\");\r\n  poster.setAttribute(\"id\", \"posterView-cta\");\r\n  poster.setAttribute(\"class\", \"fas fa-grip-horizontal\");\r\n  poster.innerText = \"Posters\";\r\n  viewOptions.append(poster); */\r\n\r\n  const filter = document.createElement(\"div\");\r\n  filter.setAttribute(\"class\", \"filterOptions\");\r\n  pageContainer.append(filter);\r\n\r\n  const today = document.createElement(\"a\");\r\n  today.setAttribute(\"id\", \"movies-today\");\r\n  today.setAttribute(\"class\", \"filter active\");\r\n  today.innerText = \"På bio idag\";\r\n  today.addEventListener(\"click\", () => {\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)((0,_filter_js__WEBPACK_IMPORTED_MODULE_1__.filterToday)(api));\r\n  });\r\n  filter.append(today);\r\n\r\n  const upcoming = document.createElement(\"a\");\r\n  upcoming.setAttribute(\"id\", \"movies-upcoming\");\r\n  upcoming.setAttribute(\"class\", \"filter\");\r\n  upcoming.innerText = \"Kommande filmer\";\r\n  upcoming.addEventListener(\"click\", () => {\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)((0,_filter_js__WEBPACK_IMPORTED_MODULE_1__.filterUpcoming)(api));\r\n  });\r\n  filter.append(upcoming);\r\n\r\n  const children = document.createElement(\"a\");\r\n  children.setAttribute(\"id\", \"movies-children\");\r\n  children.setAttribute(\"class\", \"filter\");\r\n  children.innerText = \"Barn bio\";\r\n  children.addEventListener(\"click\", () => {\r\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)((0,_filter_js__WEBPACK_IMPORTED_MODULE_1__.filterChildCinema)(api));\r\n  });\r\n  filter.append(children);\r\n\r\n  const filterBtn = document.createElement(\"button\");\r\n  filterBtn.setAttribute(\"class\", \"filter-btn\");\r\n  filterBtn.innerText = \"Visa filter\";\r\n  filter.append(filterBtn);\r\n\r\n  const cardCtn = document.createElement(\"div\");\r\n  cardCtn.setAttribute(\"class\", \"card-ctn\");\r\n  container.append(cardCtn);\r\n\r\n  const test = document.querySelectorAll(\".filter\");\r\n  test.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      test.forEach((item) => {\r\n        item.classList.remove(\"active\");\r\n      });\r\n      item.classList.add(\"active\");\r\n    });\r\n  });\r\n};\r\n\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://grupp-d/./src/js/movieMain.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checking\": () => (/* binding */ checking),\n/* harmony export */   \"navbarResponsive\": () => (/* binding */ navbarResponsive)\n/* harmony export */ });\n/* harmony import */ var _pages_moviepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/moviepage */ \"./src/js/pages/moviepage.js\");\n/* harmony import */ var _pages_covidInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/covidInfo */ \"./src/js/pages/covidInfo.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_moviepage__WEBPACK_IMPORTED_MODULE_0__]);\n_pages_moviepage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\nconst checking = () => {\r\n  console.log(\"navbar.js is loaded\");\r\n};\r\nconst movieBtn = document.querySelector(\".menuMovies\");\r\nmovieBtn.addEventListener(\"click\", () => {\r\n  (0,_pages_moviepage__WEBPACK_IMPORTED_MODULE_0__.loadMoviePage)();\r\n});\r\n\r\nconst covidBtn = document.querySelector(\".Covid-info\");\r\ncovidBtn.addEventListener(\"click\", () => {\r\n  (0,_pages_covidInfo__WEBPACK_IMPORTED_MODULE_1__.covidInforation)();\r\n});\r\n\r\n// navbarResponsive toggles adds a class \"responsive\" to the hamburger button in navbar\r\nconst navbarResponsive = () => {\r\n  const hamburger = document.querySelector(\".hamburger\");\r\n  hamburger.addEventListener(\"click\", () => {\r\n    let navbar = document.querySelector(\"#navbar\");\r\n    if (navbar.className === \"topnav\") {\r\n      navbar.className += \" responsive\";\r\n    } else {\r\n      navbar.className = \"topnav\";\r\n    }\r\n  });\r\n};\r\n\n});\n\n//# sourceURL=webpack://grupp-d/./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/pages/covidInfo.js":
/*!***********************************!*\
  !*** ./src/js/pages/covidInfo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"covidInforation\": () => (/* binding */ covidInforation)\n/* harmony export */ });\nconst template = document.createElement('template')\r\ntemplate.innerHTML = `\r\n<div id=\"covidInformation\"><h1>Ett tryggt biobesök</h1>\r\n\r\n<p>Från och med den 23 december inför regeringen nya smittskyddsåtgärder. Då behöver du som har fyllt 18 år kunna visa upp ett giltigt vaccinationsbevis för Covid-19 och ID-handling med foto när du besöker oss. \r\nDet gäller samtliga våra biografer och salonger.\r\nFör dig som är vaccinerad med minst två doser, där det har gått minst 2 veckor sedan sista dosen, kan du enkelt och gratis ladda ner ditt bevis på covidbevis.se med din e-legitimation. \r\nÄven vaccinationsbevis utfärdade inom EU går att använda tillsammans med giltig ID-handling. </p>\r\n\r\n<h3>Godkända ID-handlingar</h3>\r\n<p>För att vi ska veta att vaccinbeviset tillhör dig så behöver du också visa upp en ID-handling. En kopia eller foto på din ID-handling godtas ej. \r\nGodkända ID-handlingar är svenskt pass, nationellt ID-kort, svenskt körtkort, Feja eID eller identitetskort för folkbokförda i Sverige.\r\n Vi godtar även utländska ID-kort från länder i Schengenområdet samt utländska EU-pass. </p>\r\n\r\n<h3>Inget vaccinationsbevis eller ID-handing</h3>\r\n<p>Om du inte kan visa upp ett giltigt vaccinationsbevis tillsammans med giltig ID-handling kommer vi tyvärr inte kunna släppa in dig i våra salonger och din biljett återbetalas.\r\nOm du av medicinska skäl inte bör ta vaccinet, eller endast får ta en dos, behöver du visa upp ett läkarintyg (tillsammans med ID-handling) som stödjer detta.</p>\r\n\r\n<h3>Bra att tänka på</h3>\r\n<p>Har du sedan tidigare laddat ner ett vaccinationsbevis är det en bra idé att kontrollera att det fortfarande är giltigt till ditt besök hos oss. Du kan enkelt förnya ditt bevis på covidbevis.se\r\nObservera att så kallade testbevis, negativt test och tillfrisknandebevis inte räknas som vaccinationsbevis och kan ej användas på biografen.\r\nKom gärna i god tid. Ibland kan det bli kö när kontroll av vaccinationsbevis sker i entrén till biografen.</p></div>\r\n`\r\n\r\nconst covidInforation = () => {\r\n    const container = document.querySelector(\".movies\");\r\n    container.innerHTML = \"\";\r\n    container.appendChild(template.content.cloneNode(true));\r\n  \r\n    \r\n  };\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/pages/covidInfo.js?");

/***/ }),

/***/ "./src/js/pages/movieBanners.js":
/*!**************************************!*\
  !*** ./src/js/pages/movieBanners.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBanners\": () => (/* binding */ renderBanners)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./src/js/api.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter */ \"./src/js/filter.js\");\n/* harmony import */ var _commercial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commercial */ \"./src/js/commercial.js\");\n\r\n\r\n\r\nconst renderBanners = async () => {\r\n  const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.loadMovieAPI)();\r\n  //make upcoming movies in main container\r\n  const upcomingMovies = (0,_filter__WEBPACK_IMPORTED_MODULE_1__.filterUpcoming)(data);\r\n  upcomingMovies.forEach((movie) => {\r\n    bannerElem(movie, \"comingSoon\");\r\n  });\r\n\r\n  //make current movies in main container\r\n  const currentMovies = (0,_filter__WEBPACK_IMPORTED_MODULE_1__.filterToday)(data);\r\n  currentMovies.forEach((movie) => {\r\n    bannerElem(movie, \"onCinemaNow\");\r\n  });\r\n};\r\n\r\n//function to movies\r\nfunction bannerElem(movie, containerName) {\r\n  const container = document.querySelector(`.${containerName}`);\r\n  const movieIndex = (0,_commercial__WEBPACK_IMPORTED_MODULE_2__.createElement)(\"div\", \"movieIndex\");\r\n  const movieTitle = (0,_commercial__WEBPACK_IMPORTED_MODULE_2__.createElement)(\"span\", \"movieBannerTitle\");\r\n  const movieDate = (0,_commercial__WEBPACK_IMPORTED_MODULE_2__.createElement)(\"span\", \"movieBannerDate\");\r\n  movieDate.innerText = `${movie.date[0]}`;\r\n  movieTitle.innerText = `${movie.title}`;\r\n  const img = (0,_commercial__WEBPACK_IMPORTED_MODULE_2__.createElement)(\"img\", \"movieBanner\");\r\n  img.src = movie.bannerImg;\r\n  movieIndex.appendChild(movieDate);\r\n  movieIndex.appendChild(movieTitle);\r\n  movieIndex.appendChild(img);\r\n  container.appendChild(movieIndex);\r\n}\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/pages/movieBanners.js?");

/***/ }),

/***/ "./src/js/pages/moviepage.js":
/*!***********************************!*\
  !*** ./src/js/pages/moviepage.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMoviePage\": () => (/* binding */ loadMoviePage)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ \"./src/js/render.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.js */ \"./src/js/api.js\");\n/* harmony import */ var _movieMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movieMain.js */ \"./src/js/movieMain.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter.js */ \"./src/js/filter.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_movieMain_js__WEBPACK_IMPORTED_MODULE_2__]);\n_movieMain_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\nconst loadMoviePage = async () => {\r\n  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.loadMovieAPI)();\r\n  const container = document.querySelector(\".movies\");\r\n  container.innerHTML = \"\";\r\n  (0,_movieMain_js__WEBPACK_IMPORTED_MODULE_2__.moviePageMain)();\r\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderMovies)((0,_filter_js__WEBPACK_IMPORTED_MODULE_3__.filterToday)(data));\r\n};\r\n\n});\n\n//# sourceURL=webpack://grupp-d/./src/js/pages/moviepage.js?");

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMovies\": () => (/* binding */ renderMovies)\n/* harmony export */ });\n/* harmony import */ var _movieCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCards.js */ \"./src/js/movieCards.js\");\n\r\n\r\nconst renderMovies = (data) => {\r\n  const container = document.querySelector(\".card-ctn\");\r\n  container.innerHTML = \"\";\r\n  data.forEach((item) => {\r\n    (0,_movieCards_js__WEBPACK_IMPORTED_MODULE_0__.movieCards)(item);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://grupp-d/./src/js/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;