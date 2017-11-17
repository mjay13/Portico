$(document).ready(function() {

    // on the click of go button, take search params, and put them in the route /catalog/item/byartist/:params 
    // then call that route
    // the page will redirect and load within the catalouge section
    $(document).on("click", "#text-enter-button", itemsByArtist);
    $(document).on("click", "#show-all-items", allItems);
    $(document).on("click", "#ref-enter-button", byArtistRef);



    function itemsByArtist(event) {
        event.preventDefault();
        console.log("btn clicked");
        id = $("#num-input").val().trim();
        console.log(id);

        $.ajax({
            method: "GET",
            url: "/catalog/item/by-artist/" + id
        }).done(window.location.href = "/catalog/item/by-artist/" + id);

    }

    function allItems() {
        $.get("/catalog/all-items");
        console.log("btn clicked");
        // pulled this from in-class activity 11.04.2017 15.3 cms.js
        window.location.href = "/catalog/all-items";
    }


    function byArtistRef(event) {
        event.preventDefault();
        console.log("btn clicked");
        id = $("#ref-input").val().trim();
        console.log(id);

        $.ajax({
            method: "GET",
            url: "/artist/ref-num/" + id
        }).done(window.location.href = "/artist/ref-num/" + id);

    }











    // end of document.ready

});