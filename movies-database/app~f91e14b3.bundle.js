/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 13984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AL": () => (/* binding */ listTemplate),
/* harmony export */   "MX": () => (/* binding */ detailMovieOrTvTemplate),
/* harmony export */   "Nt": () => (/* binding */ latestTemplate),
/* harmony export */   "OP": () => (/* binding */ cardTemplate),
/* harmony export */   "Qi": () => (/* binding */ headerTemplateCreator),
/* harmony export */   "cJ": () => (/* binding */ suggesionsTemplate),
/* harmony export */   "jB": () => (/* binding */ seasonTemplate),
/* harmony export */   "tE": () => (/* binding */ sliderSplideListItem),
/* harmony export */   "xo": () => (/* binding */ detailPerson)
/* harmony export */ });
/* unused harmony export traillerTemplate */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */

/* eslint-disable max-len */
var headerTemplateCreator = function headerTemplateCreator() {
  return "\n        <nav class=\"text-slate-50 flex justify-between items-center w-full h-16 px-3 md:px-5 bg-slate-800 shadow-md shadow-slate-900\">\n            <div class=\"start relative\">\n                <div class=\"flex items-center\">\n                    <a class=\"text-2xl font-bold ml-1\" href=\"\">RTH</a>\n                </div>\n            </div>\n            <div class=\"end relative flex items-center justify-end w-[300px] lg:w-[600px]\">\n\n                <div class=\"container-menu text-sm md:text-base mr-2 md:mr-10\">\n                    <ul class=\"flex items-center md:gap-2\">\n                        <li><a class=\"flex items-center justify-start h-[44px] w-full hover:bg-slate-700 py-1 px-2 transition-all ease-in-out whitespace-nowrap rounded\" href=\"movies-database/#/trending/\">Trending</a></li>\n                        <li><a class=\"flex items-center justify-start h-[44px] w-full hover:bg-slate-700 py-1 px-2 transition-all ease-in-out whitespace-nowrap rounded\" href=\"movies-database/#/upcomming/\">Upcomming</a></li>\n                        <li><a class=\"flex items-center justify-start h-[44px] w-full hover:bg-slate-700 py-1 px-2 transition-all ease-in-out whitespace-nowrap rounded\" href=\"movies-database/#/tvshow/\">Tv Show</a></li>\n                    </ul>\n                </div>\n\n                <div class=\"button-container\">\n                    <button class=\"buttonTrigger button-search w-[44px] aspect-square flex items-center justify-center hover:bg-slate-700\" title=\"Button search\"><i class=\"bi bi-search icon-search w-full h-full flex items-center justify-center\"></i></button>\n                </div>\n                <div class=\"container-search bg-slate-800 min-h-[200px] absolute top-[54px] overflow-hidden w-0 transition-all ease-in-out duration-500 z-10  shadow-md shadow-slate-900\">\n                    <div class=\"search-bar w-auto flex items-center justify-center relative m-3\">\n                        <input class=\"search-input h-[44px] w-full text-slate-900 p-3 text-sm\" type=\"search\" placeholder=\"Search\">\n                        <!--- <button class=\"searching bg-red-600 hover:bg-red-700 transition-all w-[40px] aspect-square absolute right-[2px] \"><i class=\"bi bi-search\"></i></button> --->\n                    </div>\n                    <div class=\"text-center text-xs p-2\">\n                        <p class=\"text-slate-50 mb-3\">Results</p>\n                        <div class=\"result h-[300px] overflow-y-scroll scrollbar-custom\">\n                        \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </nav>\n    ";
};
// const headerTemplateCreator = () => `
//         <nav class="text-slate-50 flex justify-between items-center w-full h-16 px-3 md:px-5 bg-slate-800 shadow-md shadow-slate-900">
//             <div class="start relative">
//                 <div class="button-container flex items-center">
//                     <button class="hidden buttonTrigger button-menu items-center justify-center w-[44px] aspect-square text-2xl hover:bg-slate-700" title="Button menu"><i class="bi bi-list icon-menu w-full h-full flex items-center justify-center"></i></button>
//                     <a class="text-2xl font-bold ml-1" href="">RTH</a>
//                 </div>
//                 <div class="container-menu bg-slate-800 overflow-hidden absolute top-[54px] w-0 transition-all ease-in-out duration-500 z-10">
//                     <ul class="">
//                         <li><a class="flex items-center justify-start h-[44px] w-full hover:bg-slate-700 p-3 transition-all ease-in-out whitespace-nowrap" href="/#/trending/">Trending</a></li>
//                         <li><a class="flex items-center justify-start h-[44px] w-full hover:bg-slate-700 p-3 transition-all ease-in-out whitespace-nowrap" href="/#/upcomming/">Upcomming</a></li>
//                         <li><a class="flex items-center justify-start h-[44px] w-full hover:bg-slate-700 p-3 transition-all ease-in-out whitespace-nowrap" href="/#/tvshow/">Tv Show</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div class="end relative flex items-center justify-end w-[300px] lg:w-[600px]">

//                 <div class="container-menu text-sm md:text-base mr-2 md:mr-10">
//                     <ul class="flex items-center md:gap-2">
//                         <li><a class="flex items-center justify-start h-[44px] w-full hover:bg-slate-700 py-1 px-2 transition-all ease-in-out whitespace-nowrap rounded" href="/#/trending/">Trending</a></li>
//                         <li><a class="flex items-center justify-start h-[44px] w-full hover:bg-slate-700 py-1 px-2 transition-all ease-in-out whitespace-nowrap rounded" href="/#/upcomming/">Upcomming</a></li>
//                         <li><a class="flex items-center justify-start h-[44px] w-full hover:bg-slate-700 py-1 px-2 transition-all ease-in-out whitespace-nowrap rounded" href="/#/tvshow/">Tv Show</a></li>
//                     </ul>
//                 </div>

//                 <div class="button-container">
//                     <button class="buttonTrigger button-search w-[44px] aspect-square flex items-center justify-center hover:bg-slate-700" title="Button search"><i class="bi bi-search icon-search w-full h-full flex items-center justify-center"></i></button>
//                 </div>
//                 <div class="container-search bg-slate-800 min-h-[200px] absolute top-[54px] overflow-hidden w-0 transition-all ease-in-out duration-500 z-10  shadow-md shadow-slate-900">
//                     <div class="search-bar w-auto flex items-center justify-center relative m-3">
//                         <input class="search-input h-[44px] w-full text-slate-900 pl-2 pr-12 text-sm" type="text" placeholder="Search">
//                         <!--- <button class="searching bg-red-600 hover:bg-red-700 transition-all w-[40px] aspect-square absolute right-[2px] "><i class="bi bi-search"></i></button> --->
//                     </div>
//                     <div class="text-center text-xs p-2">
//                         <p class="text-slate-50 mb-3">Results</p>
//                         <div class="result h-[300px] overflow-y-scroll scrollbar-custom">
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     `;

var sliderSplideListItem = function sliderSplideListItem(data) {
  return "\n    <li class=\"splide__slide relative before:absolute before:w-full before:bg-gradient-to-t before:from-slate-900 before:via-slate-900/80 before:to-slate-900/0 before:h-[100px] before:left-0 before:bottom-0 before:lg:h-[200px]\" title=\"".concat(data.title ? data.title : data.name, "\">\n        <div class=\"poster absolute bottom-4 left-6 flex text-slate-50 md:bottom-10 md:left-16\">\n            <div class=\"image\">\n                <picture>\n                    <source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w185").concat(data.poster_path, "\">\n                    <source media=\"(max-width: 768px)\" srcset=\"https://image.tmdb.org/t/p/w342").concat(data.poster_path, "\">\n                    <source media=\"(max-width: 1024px)\" srcset=\"https://image.tmdb.org/t/p/w500").concat(data.poster_path, "\">\n                    <!--- <source media=\"(max-width: 1444px)\" srcset=\"https://image.tmdb.org/t/p/w780").concat(data.poster_path, "\"> --->\n                    <img class=\"object-cover min-h-[100px] max-h-[150px] md:min-h-[150px] md:max-h-[200px] lg:min-h-[220px] lg:max-h-[300px] rounded shadow-lg shadow-slate-900\" src=\"https://image.tmdb.org/t/p/w780").concat(data.poster_path, "\" alt=\"poster of ").concat(data.title ? data.title : data.name, "\" loading=\"lazy\">\n                </picture>\n            </div>\n            <a class=\"title self-end my-1 mx-3 max-w-[300px] md:my-3 lg:my-5\" href=\"/#/").concat(data.media, "/").concat(data.id, "\">\n                <h1 class=\"text-lg font-bold md:text-2xl\">").concat(data.title ? data.title : data.name, "</h1>\n                <span class=\"slider-genre text-xs bg-red-600 text-slate-50 font-medium py-1 px-2 rounded\">").concat(String(data.vote_average).substring(0, 3), "/10</span>\n            </a>\n        </div>\n        <picture>\n            <!---<source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w300").concat(data.backdrop_path, "\">--->\n            <source media=\"(max-width: 768px)\" srcset=\"https://image.tmdb.org/t/p/w780").concat(data.backdrop_path, "\">\n            <source media=\"(max-width: 1444px)\" srcset=\"https://image.tmdb.org/t/p/w1280").concat(data.backdrop_path, "\">\n            <img class=\"object-cover object-top w-full h-full rounded-[inherit]\" src=\"https://image.tmdb.org/t/p/w1280").concat(data.backdrop_path, "\" alt=\"image of ").concat(data.title ? data.title : data.name, "\" loading=\"lazy\">\n        </picture>\n    </li>\n");
};

// const sliderSplideListItem = (data) => `
//         <li class="splide__slide relative before:absolute before:w-full before:bg-gradient-to-t before:from-slate-900 before:via-slate-900/80 before:to-slate-900/0 before:h-[100px] before:left-0 before:bottom-0 before:lg:h-[200px]" title="${data.title ? data.title : data.name}">
//             <div class="poster absolute bottom-4 left-6 flex text-slate-50 md:bottom-10 md:left-16">
//                 <div class="image w-[100px] h-[150px] md:w-[150px] md:h-[220px]">
//                     <picture>
//                         <source media="(max-width: 600px)" srcset="https://image.tmdb.org/t/p/w185${data.poster_path}">
//                         <source media="(max-width: 768px)" srcset="https://image.tmdb.org/t/p/w342${data.poster_path}">
//                         <source media="(max-width: 1024px)" srcset="https://image.tmdb.org/t/p/w500${data.poster_path}">
//                         <!--- <source media="(max-width: 1444px)" srcset="https://image.tmdb.org/t/p/w780${data.poster_path}"> --->
//                         <img class="object-cover w-full h-full rounded shadow-lg shadow-slate-900" src="https://image.tmdb.org/t/p/w780${data.poster_path}" alt="poster of ${data.title ? data.title : data.name}" loading="lazy">
//                     </picture>
//                 </div>
//                 <a class="title self-end my-1 mx-3 max-w-[300px] md:my-3 lg:my-5" href="/#/${data.media}/${data.id}">
//                     <h1 class="text-lg font-bold md:text-2xl">${data.title ? data.title : data.name}</h1>
//                     <span class="slider-genre text-xs bg-red-600 text-slate-50 font-medium py-1 px-2 rounded">${String(data.vote_average).substring(0, 3)}/10</span>
//                 </a>
//             </div>
//             <picture>
//                 <!---<source media="(max-width: 600px)" srcset="https://image.tmdb.org/t/p/w300${data.backdrop_path}">--->
//                 <source media="(max-width: 768px)" srcset="https://image.tmdb.org/t/p/w780${data.backdrop_path}">
//                 <source media="(max-width: 1444px)" srcset="https://image.tmdb.org/t/p/w1280${data.backdrop_path}">
//                 <img class="object-cover object-top w-full h-full rounded-[inherit]" src="https://image.tmdb.org/t/p/w1280${data.backdrop_path}" alt="image of ${data.title ? data.title : data.name}" loading="lazy">
//             </picture>
//         </li>
//     `;

var suggesionsTemplate = function suggesionsTemplate(data) {
  return "\n        <a class=\"list-items flex gap-2 items-center bg-slate-900 rounded mr-2 relative hover:-translate-y-1 transition-all\" href=\"/#/".concat(data.media, "/").concat(data.id, "\" title=\"").concat(data.name ? data.name : data.title, "\">\n            <div class=\"poster\">\n                <img class=\"object-cover w-[90px] rounded-tl rounded-bl\" src=\"https://image.tmdb.org/t/p/w185").concat(data.poster_path, "\" alt=\"image og ").concat(data.name ? data.name : data.title, "\" loading=\"lazy\">\n            </div>\n            <div class=\"title w-full\">\n                <h2 class=\"font-medium\">").concat(data.name ? data.name : data.title, "</h2>\n                <!---<i class=\"text-xs\">").concat(String(data.overview).substring(0, 30), "...</i>--->\n            </div>\n            <div class=\"rating flex items-center mr-5\">\n                <span class=\"text-xs bg-red-600 text-slate-50 py-1 px-2 rounded font-medium\">").concat(String(data.vote_average).substring(0, 3), "/10</span>\n            </div>\n        </a>\n    ");
};
var listTemplate = function listTemplate(judul, pagesName) {
  return "\n            <div class=\"text-slate-50 bg-slate-800 p-2 ".concat(pagesName === 'genre' || pagesName === 'on-air' || pagesName === 'top-rated-tv' || pagesName === 'popular-tv-show' ? '' : 'mt-5', " rounded\">\n                <div class=\"title mb-2 flex items-center justify-between px-2\">\n                    <h2 class=\"font-bold text-lg\">").concat(pagesName === 'genre' ? "Result for ".concat(judul) : judul, "</h2>\n                </div>\n                <div class=\"").concat(judul === 'Now Playing Movies' ? 'overflow-y-scroll h-[500px] scrollbar-custom pt-2 pr-2' : pagesName === 'upcomming' ? 'w-full h-full p-0 m-0' : 'overflow-x-scroll scrollbar-custom scrollbar-hide pt-1 lg:pb-2', "\">\n                    <div class=\"movies-or-tv gap-2 ").concat(judul === 'Now Playing Movies' || pagesName === 'upcomming' || pagesName === 'trending' || pagesName === 'on-air' || pagesName === 'top-rated-tv' || pagesName === 'popular-tv-show' || pagesName === 'genre' ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5' : 'flex', "\">\n    \n                    </div>\n                </div>\n                ").concat(judul === 'Now Playing Movies' || pagesName === 'upcomming' || pagesName === 'trending' || pagesName === 'on-air' || pagesName === 'popular-tv-show' || pagesName === 'top-rated-tv' || pagesName === 'genre' ? "\n                    <div class=\"pagination text-center mt-2 flex items-center justify-center gap-2\">\n                        <button class=\"prev bg-red-600 text-slate-50 hover:bg-red-700 text-sm rounded py-1 px-2\" title=\"Previous Page\">Prev</button>\n                        <input class=\"number-of-page text-slate-50 w-[50px] h-[28px] border-none text-center text-sm rounded\" type=\"text\" name=\"\" id=\"\" value=\"1\" disabled>\n                        <button class=\"next bg-red-600 text-slate-50 hover:bg-red-700 text-sm rounded py-1 px-2\" title=\"Next Page\">Next</button>\n                    </div>\n                " : '', "\n            </div>  \n        ");
};
var cardTemplate = function cardTemplate(data, pagesName) {
  return "\n          <a class=\"card min-w-[150px] max-w-[200px] w-full h-full relative rounded transition-all hover:-translate-y-1\" href=\"/#/".concat(data.media, "/").concat(data.id, "\" title=\"").concat(data.title ? data.title : data.name, "\">\n              <picture>\n                  <source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w185").concat(data.poster_path ? data.poster_path : data.still_path ? data.still_path : data.profile_path, "\">\n                  ").concat(data.still_path ? "\n                    <img class=\"object-cover h-[200px] w-full text-slate-50 rounded\" src=\"https://image.tmdb.org/t/p/w300".concat(data.poster_path ? data.poster_path : data.still_path ? data.still_path : data.profile_path, "\" alt=\"poster of ").concat(data.title ? data.title : data.name, "\" loading=\"lazy\">\n                  ") : "\n                    <img class=\"object-fill w-full min-h-[230px] max-h-[300px] h-full text-slate-50 rounded\" src=\"https://image.tmdb.org/t/p/w342".concat(data.poster_path ? data.poster_path : data.profile_path, "\" alt=\"poster of ").concat(data.title ? data.title : data.name, "\" loading=\"lazy\">\n                  "), "\n              </picture>\n              ").concat(data.media === 'person' ? "\n                <div class=\"name absolute bottom-0 left-0 w-full h-fit overflow-hidden bg-slate-800/50 backdrop-blur-sm flex items-center justify-center lg:h-0\">\n                    ".concat(data.credit_id ? "\n                        <div class=\"text-center py-2 lg:py-0\">\n                            <span class=\"text-xs font-bold block\">".concat(data.character, "</span>\n                            <i class=\"text-xs block\">").concat(data.name, "</i>\n                        </div>\n                    ") : "<span class=\"text-xs font-medium py-2\">".concat(data.name, "</span>"), "\n                </div>\n              ") : pagesName === 'genre' ? "\n                <span class=\"bg-red-600 text-slate-50 font-medium px-2 py-1 absolute top-0 right-0 text-xs rounded-tr-[inherit] rounded-bl-[inherit]\">".concat(String(data.vote_average).substring(0, 3), "/10</span>\n                <span class=\"bg-red-600 text-slate-50 font-medium px-2 py-1 absolute bottom-0 left-0 text-xs rounded-bl-[inherit] rounded-tr-[inherit]\">").concat(data.media.charAt(0).toUpperCase() + data.media.slice(1), "</span>\n              ") : "\n                <span class=\"bg-red-600 text-slate-50 font-medium px-2 py-1 absolute top-0 right-0 text-xs rounded-tr-[inherit] rounded-bl-[inherit]\">".concat(String(data.vote_average).substring(0, 3), "/10</span>\n              "), "\n          </a>\n      ");
};

// const cardTemplate = (data, pagesName) => `
//           <a class="card ${pagesName === 'person' || pagesName === 'cast' || pagesName === 'movie' ? 'w-[150px]' : `${pagesName === 'upcomming' || pagesName === 'trending' ? 'min-w-[100px]' : ''}`} min-w-[150px] h-full relative rounded transition-all hover:-translate-y-1" href="/#/${data.media}/${data.id}" title="${data.title ? data.title : data.name}">
//               <picture>
//                   <source media="(max-width: 600px)" srcset="https://image.tmdb.org/t/p/w185${data.poster_path ? data.poster_path : data.still_path ? data.still_path : data.profile_path}">
//                   ${data.still_path ? `
//                     <img class="object-cover h-[200px] w-full text-slate-50 rounded" src="https://image.tmdb.org/t/p/w300${data.poster_path ? data.poster_path : data.still_path ? data.still_path : data.profile_path}" alt="poster of ${data.title ? data.title : data.name}" loading="lazy">
//                   ` : `
//                     <img class="object-fill w-full h-[230px] text-slate-50 rounded" src="https://image.tmdb.org/t/p/w342${data.poster_path ? data.poster_path : data.profile_path}" alt="poster of ${data.title ? data.title : data.name}" loading="lazy">
//                   `}
//               </picture>
//               ${data.media === 'person' ? `
//                 <div class="name absolute bottom-0 left-0 w-full h-fit overflow-hidden bg-slate-800/50 backdrop-blur-sm flex items-center justify-center lg:h-0">
//                     ${data.credit_id ? `
//                         <div class="text-center py-2 lg:py-0">
//                             <span class="text-xs font-bold block">${data.character}</span>
//                             <i class="text-xs block">${data.name}</i>
//                         </div>
//                     ` : `<span class="text-xs font-medium">${data.name}</span>`}
//                 </div>
//               ` : pagesName === 'genre' ? `
//                 <span class="bg-red-600 text-slate-50 font-medium px-2 py-1 absolute top-0 right-0 text-xs rounded-tr-[inherit] rounded-bl-[inherit]">${String(data.vote_average).substring(0, 3)}/10</span>
//                 <span class="bg-red-600 text-slate-50 font-medium px-2 py-1 absolute bottom-0 left-0 text-xs rounded-bl-[inherit] rounded-tr-[inherit]">${data.media.charAt(0).toUpperCase() + data.media.slice(1)}</span>
//               ` : `
//                 <span class="bg-red-600 text-slate-50 font-medium px-2 py-1 absolute top-0 right-0 text-xs rounded-tr-[inherit] rounded-bl-[inherit]">${String(data.vote_average).substring(0, 3)}/10</span>
//               `}
//           </a>
//       `;

var seasonTemplate = function seasonTemplate(data) {
  return "\n        <div class=\" text-slate-50 p-2 rounded bg-slate-800\">\n            <div class=\"season lg:w-[800px] mx-auto mb-5\">\n                <div class=\"poster relative w-[200px] md:h-[300px] mx-auto mt-5\">\n                    <picture>\n                        <source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w185".concat(data.poster_path ? data.poster_path : data.profile_path, "\">\n                        <img class=\"object-cover w-full h-full text-slate-50\" src=\"https://image.tmdb.org/t/p/w342").concat(data.poster_path ? data.poster_path : data.profile_path, "\" alt=\"poster of ").concat(data.title ? data.title : data.name, "\" loading=\"lazy\">\n                    </picture>\n                    ").concat(data.air_date ? "\n                        <span class=\"absolute top-0 right-0 rounded-tr-[inherit] rounded-bl-[inherit] text-xs bg-red-600 py-1 px-2\">".concat(data.air_date.slice(0, 4), "</span>\n                    ") : '', "\n                </div>\n                <div class=\"title text-center mt-5\">\n                    <h1 class=\"font-bold\">").concat(data.name, "</h1>\n                    <i class=\"text-xs\">Season ").concat(data.season_number, "</i>\n                </div>\n                <div class=\"overview mt-5\">\n                    ").concat(data.overview ? "\n                            <p class=\"text-justify leading-6 indent-5\">".concat(data.overview, "</p>\n                        ") : '<i class="text-center block mx-auto leading-6 font-bold">Sorry!!! we couldnt find an overview for this season</i>', "\n                </div>\n            </div>\n            <div class=\"episode\">\n                <div class=\"title-h2\">\n                    <h1 class=\"font-bold text-lg\">List Episode : ").concat(data.episodes.length, " Episode</h1>\n                </div>\n                <div class=\"list grid grid-cols-2 gap-2 md:grid-cols-3 overflow-y-scroll scrollbar-custom pr-2 h-[700px] md:h-[1000px]\">\n                    ").concat(data.episodes.map(function (episode) {
    return "\n                        <div class=\"bg-slate-700 relative rounded-[inherit]\">\n                            <picture class=\"relative\">\n                                <source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w300".concat(episode.still_path ? episode.still_path : '', "\">\n                                <img class=\"object-cover h-[200px] w-full text-slate-50 rounded\" src=\"https://image.tmdb.org/t/p/original").concat(episode.still_path ? episode.still_path : '', "\" alt=\"poster of ").concat(episode.name, "\" loading=\"lazy\">\n                            </picture>\n                            <span class=\"text-xs absolute top-0 right-0 bg-red-600 py-1 px-2 rounded-tr rounded-bl\">Eps. ").concat(episode.episode_number, "</span>\n                            <div class=\"p-2 text-center\">\n                                <h1 class=\"font-bold\">").concat(episode.name, "</h1>\n                                ").concat(episode.overview ? "\n                                    <p class=\"text-xs lg:text-sm mt-3 text-justify leading-5 indent-5\">".concat(episode.overview, "</p>\n                                ") : '<i class="text-xs mt-3 text-justify">Sorry!!! we couldnt find an overview for this episode</i>', "\n                            </div>\n                        </div>\n                    ");
  }).join(''), "\n                </div>\n                </div>\n            </div>\n        </div>\n    ");
};
var latestTemplate = function latestTemplate(data) {
  return "\n    <div class=\"relative rounded mx-auto\">\n        <picture>\n            <source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w185".concat(data.poster_path ? data.poster_path : data.profile_path, "\">\n            <img class=\"object-cover w-full h-full text-slate-50 rounded\" src=\"https://image.tmdb.org/t/p/w342").concat(data.poster_path ? data.poster_path : data.profile_path, "\" alt=\"poster of ").concat(data.title ? data.title : data.name, "\" loading=\"lazy\">\n        </picture>\n        <span class=\"absolute top-0 right-0 py-1 px-2 rounded-tr-[inherit] rounded-bl-[inherit] bg-red-600 text-xs\">").concat(data.last_episode_to_air.name, "</span>\n    </div>\n");
};
var traillerTemplate = function traillerTemplate(data) {
  return "\n        <iframe class=\"w-[400px] h-[200px] md:w-[500px] md:h-[300px] rounded\" src=\"https://www.youtube.com/embed/".concat(data.key, "\" title=\"").concat(data.name, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen loading=\"lazy\"></iframe>\n    ");
};
var detailMovieOrTvTemplate = function detailMovieOrTvTemplate(data, cast, trailers) {
  return "\n        <div class=\"w-full rounded\">\n            <div class=\"backdrop-image relative overflow-hidden before:absolute before:w-full before:h-[101%] before:bg-gradient-to-b before:from-slate-900 before:via-slate-900/10 before:to-slate-900 before:top-0 before:left-0 before:z-10\">\n                <picture>\n                    <!---<source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w300".concat(data.backdrop_path, "\">--->\n                    <source media=\"(max-width: 768px)\" srcset=\"https://image.tmdb.org/t/p/w780").concat(data.backdrop_path, "\">\n                    <source media=\"(max-width: 1444px)\" srcset=\"https://image.tmdb.org/t/p/w1280").concat(data.backdrop_path, "\">\n                    <img class=\"object-cover w-full min-h-[200px] text-slate-50 rounded-[inherit]\" src=\"https://image.tmdb.org/t/p/w1280").concat(data.backdrop_path, "\" alt=\"image of ").concat(data.title ? data.title : data.name, "\" loading=\"lazy\">\n                </picture>\n                <div class=\"title w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20\">\n                    <h1 class=\"text-slate-50 font-bold text-xl md:text-2xl lg:text-3xl drop-shadow-2xl\">").concat(data.title ? data.title : data.name, "</h1>\n                </div>\n            </div>\n            <div class=\"description bg-slate-800 w-full text-slate-50 p-2\">\n                <div class=\"mt-3\">\n                    <div class=\"title-h2\">\n                        <h2 class=\"text-lg font-bold\">Detail</h2>\n                    </div>\n                    <div class=\"detail text-sm\">\n                        <table class=\"w-full\">\n                            <tr>\n                                <td>Genre</td>\n                                <td>").concat(data.genres.length >= 1 ? data.genres.map(function (genre) {
    return "<a class=\"transition-all hover:text-red-600\" href=\"/#/genre/".concat(genre.id, "\" aria-label=\"").concat(genre.name, "\">").concat(genre.name, "</a>");
  }).join(' | ') : '-', "</td>\n                            </tr>\n                            <tr>\n                                <td>Rating</td>\n                                <td>").concat(data.vote_average ? "".concat(String(data.vote_average).substring(0, 3), "/10") : '-', "</td>\n                            </tr>\n                            ").concat(data.release_date ? "\n                                <tr>\n                                    <td>Date</td>\n                                    <td>".concat(data.release_date ? data.release_date : '-', "</td>\n                                </tr>\n                            ") : "\n                                <tr>\n                                    <td>First Episode On Air</td>\n                                    <td>".concat(data.first_air_date ? data.first_air_date : '-', "</td>\n                                </tr>\n                                <tr>\n                                    <td>Last Episode On Air</td>\n                                    <td>").concat(data.last_air_date ? data.last_air_date : '-', "</td>\n                                </tr>\n                            "), "\n                            <tr>\n                                <td>Duration</td>\n                                <td>").concat(data.runtime > 0 ? data.runtime : data.episode_run_time > 0 ? data.episode_run_time : '-', " min</td>\n                            </tr>\n                            <tr>\n                                <td>Language</td>\n                                <td>").concat(data.spoken_languages ? data.spoken_languages.map(function (lang) {
    return lang.english_name;
  }).join(' | ') : '-', "</td>\n                            </tr>\n                            ").concat(data.number_of_seasons ? "\n                                <tr>\n                                    <td>Season</td>\n                                    <td class=\"grid gap-1 grid-cols-3 lg:grid-cols-9 border-none\">".concat(data.seasons.map(function (season) {
    return "<a class=\"bg-red-600 flex items-center justify-center p-1 text-center rounded hover:bg-red-500 transition-all\" href=\"/#/tv/".concat(data.id, "/season/").concat(season.season_number, "\" title=\"").concat(season.name, "\">").concat(season.name === 'Specials' ? 'Specials' : "Season ".concat(season.season_number), "</a>");
  }).join(''), "</td>\n                                </tr>\n                            ") : '', "\n                            <tr>\n                                <td>Status</td>\n                                <td>").concat(data.status ? data.status : '-', "</td>\n                            </tr>\n                            <tr>\n                                <td>Website</td>\n                                <td>").concat(data.homepage ? "<a class=\"transition-all font-bold hover:text-red-600\" href=\"".concat(data.homepage, "\" rel=\"noopener noreferrer\" target=\"_blank\">").concat(data.title ? data.title : data.name, "</a>") : '-', "</td>\n                            </tr>\n                            <tr>\n                                <td>Synopsis</td>\n                                <td class=\"leading-6\">").concat(data.overview ? data.overview : '-', "</td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"cast mt-5\">\n                    <div class=\"title-h2 flex items-center justify-between\">\n                        <h2 class=\"text-lg font-bold\">Cast</h2>\n                    </div>\n                    <div class=\"overflow-x-scroll scrollbar-custom scrollbar-hide lg:pb-2\">\n                        <div class=\"actor pt-2 flex gap-2\">\n                            ").concat(cast.length >= 1 ? cast.slice(0, 9).map(function (person) {
    return cardTemplate(person, 'cast');
  }).join('') : '<i>Ups !!! We cant find this information. We are sorry!</i>', "\n                        </div>\n                    </div>\n                </div>\n                <div class=\"trailer mt-5\">\n                    <div class=\"title-h2\">\n                        <h2 class=\"text-lg font-bold\">Trailer</h2>\n                    </div>\n                    <div class=\"video overflow-x-scroll scrollbar-custom pb-2\">\n                        <div class=\"w-fit flex items-center gap-2\">\n                            ").concat(trailers.length < 1 ? '<i>Trailer not found in our database. We are sorry!</i>' : trailers.map(function (trailer) {
    return traillerTemplate(trailer);
  }).join(''), "\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
};
var detailPerson = function detailPerson(data) {
  return "\n    <div class=\"bg-slate-800 p-2 mt-5 lg:mt-0 text-slate-50 rounded\">\n        <div class=\"name title-h2\">\n            <h2 class=\"text-lg font-bold\">".concat(data.name, "</h2>\n        </div>\n        <div class=\"lg:flex lg:gap-2 lg:justify-between\">\n            <figure class=\"picture w-full text-center mb-5\">\n                <picture>\n                    <source media=\"(max-width: 600px)\" srcset=\"https://image.tmdb.org/t/p/w185").concat(data.profile_path, "\">\n                    <img class=\"object-cover mx-auto min-w-[150px] max-w-[200px] h-fit text-slate-50 rounded\" src=\"https://image.tmdb.org/t/p/w342").concat(data.profile_path, "\" alt=\"poster of ").concat(data.title, "\" loading=\"lazy\">\n                </picture>\n                <figcaption>\n                    <i class=\"text-xs\">").concat(data.name, "</i>\n                </figcaption>\n            </figure>\n            <div class=\"detail \">\n                <table class=\"xl:min-w-[600px]\">\n                    <tr>\n                        <td>Name</td>\n                        <td>").concat(data.name, "</td>\n                    </tr>\n                    <tr>\n                        <td>Also known as</td>\n                        <td>").concat(data.also_known_as.map(function (name) {
    return name;
  }).join(' | '), "</td>\n                    </tr>\n                    <tr>\n                        <td>Birthday</td>\n                        <td>").concat(data.birthday, "</td>\n                    </tr>\n                    ").concat(data.deathday ? "\n                        <tr>\n                            <td>Death</td>\n                            <td>".concat(data.deathday, "</td>\n                        </tr>\n                        ") : '', "\n                    <tr>\n                        <td>Place of birth</td>\n                        <td>").concat(data.place_of_birth ? data.place_of_birth : '-', "</td>\n                    </tr>\n                    <tr>\n                        <td>Biography</td>\n                        <td class=\"leading-6\">").concat(data.biography, "</td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n    ");
};


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			928: 0,
/******/ 			177: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmovies_detail_app"] = self["webpackChunkmovies_detail_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [169,513,358,703,264,177,0,490,393,402,112,867,87,260,222,812,969,891,59,732,857,431,739,478,167,536,479,839,122,282,696,595,858,877,997,519,655,91,535], () => (__webpack_require__(63755)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app~f91e14b3.bundle.js.map