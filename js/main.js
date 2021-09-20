import {
    setSearchFocus,
    showClearTextButton,
    clearSearchText,
    clearPushListener
  } from "./searchBar.js";
  import {
    deleteSearchResults,
    buildSearchResults,
    clearStatsLine,
    setStatsLine
  } from "./searchResults.js";
  import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";
  
  document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
      initApp();
    }
  });
  
  const initApp = () => {
    setSearchFocus();
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener);
    const form = document.getElementById("search-bar");
    form.addEventListener("submit", submitTheSearch);
  };
  
  // Procedural "workflow" function
  const submitTheSearch = (event) => {
    event.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setSearchFocus();
  };
  
  // Procedural
  const processTheSearch = async () => {
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return; //TODO:
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);
  };

// import { searchFocus } from './searchBar'
// import { buildSearchResults } from './searchResults'
// import { getSearchTerm } from './dataFuctions'
// import { retriveSearchResults } from './dataFuctions'

// document.addEventListener("readystatechange", (event) => {
//     if(event.target.readystate === "complete"){
//         initApp()
//     }
// } )

// const initApp = () =>{
//     //set the focus
//     searchFocus()

//     TODO://event listeners for the search (3)

//     const form = document.querySelector("#search-bar")
//     form.addEventListener("submit", submitTheSearch())
// }
// //submit the search 
// const submitTheSearch = (event) =>{
//     event.preventDefault()
    
//     //delete search results
//     //process the search
//     processTheSearch()
//     //focus the search
//     searchFocus()
// }

// //process the search
// const processTheSearch = async () =>{
//     TODO://clear the stats line
//     const searchTerm = getSearchTerm()
//     if(searchTerm === "") return
//     const resultArray = await retriveSearchResults(searchTerm)
//     if(resultArray.length) buildSearchResults(resultArray)
//     TODO://Set stats line
// }