$(document).ready(function() {

    // on the click of go button, take search params, and put them in the route /catalog/item/byartist/:params 
    // then call that route
    // the page will redirect and load within the catalouge section
    $(document).on("click", "#text-enter-button", itemsByArtist);
    //$(document).on("click", "#all-items-btn", allItems);



    function itemsByArtist() {
        console.log("btn clicked");
        id = $("#num-input");

        $.ajax({
            method: "GET",
            url: "/catalog/item/byartist/" + id
        });

    }

    // function allItems() {
    //    $.get("/catalog/all-items");
    //    console.log("btn clicked");
    // }














    // end of document.ready
});