$(document).ready(function() {

    // on the click of go button, take search params, and put them in the route /catalog/item/byartist/:params 
    // then call that route
    // the page will redirect and load within the catalouge section
    $(document).on("click", "#text-enter-button", itemsByArtist);
    $(document).on("click", "#show-all-items", allItems);



    function itemsByArtist() {
        $.get("/catalog/item/by-artist/:artistref")
        console.log("btn clicked");
        window.location.href = "/catalog/item/by-artist/" + id; 
    }

        // id = $("#search-bar");

        // $.ajax({
        //     method: "GET",
        //     url: "/catalog/item/byartist/" + id
        // });

    }

    function allItems() {
       $.get("/catalog/all-items");
       console.log("btn clicked");
       // pulled this from in-class activity 11.04.2017 15.3 cms.js
       window.location.href = "/catalog/all-items"; 
    }
















// end of document.ready
});