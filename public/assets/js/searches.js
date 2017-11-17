$(document).ready(function() {

    // on the click of go button, take search params, and put them in the route /catalog/item/byartist/:params 
    // then call that route
    // the page will redirect and load within the catalouge section

    // catalog page all items by artist
    $(document).on("click", "#text-enter-button", itemsByArtist);
    // catalog page all items show
    $(document).on("click", "#show-all-items", allItems);
    // artist page one artist show
    $(document).on("click", "#ref-enter-button", byArtistRef);
    // artist page, create new artist
    $(document).on("click", "#newArtistSubmit", artistCreate);


    // for catalog, get all items
    function allItems() {
        $.get("/catalog/all-items");
        console.log("btn clicked");
        // pulled this from in-class activity 11.04.2017 15.3 cms.js
        window.location.href = "/catalog/all-items";
    }

    // for catalog, get all items from one artist
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

    // for artist page, retrieves one artist by reference number
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

    function artistCreate(req, res) {
        // event.preventDefault();
        console.log("submit button clicked");


        $.ajax({
            type: "POST",
            url: "/artist/create", 
            data: {     
               'artist_reference_number': $("#artistId").val().trim(),
                'name_first': $("#nameFirst").val().trim(),
                'name_last': $("#nameLast").val().trim(),
                'address_street': $("#streetAddress").val().trim(),
                'address_city': $("#inputCity").val().trim(),
                'address_state': $("#state").val().trim(),
                'address_zipcode': $("#inputZip").val().trim(),
                'phone': $("#inputPhone").val().trim(),
                'payable_to': $("#payableTo").val().trim(),
                'consignment_percentage': $("#consignmentPercent").val().trim(),
                'date_contract': $("#dateContract").val().trim()
            }
            // success: function(msg) {
            //     alert("ok");
            //     $('#add-post').modal('hide');
            // },
            // error: function() {
            //     alert("Something went wrong!");
        //     // }
        }).done(window.location.href = "/artist");
    }

function postArtist(data) {
    $.ajax({
      method: "POST",
      url: "/artist/create",
      data: data
    })
    .done(function() {
      window.location.href = "/artist";
    });
  }








    // end of document.ready
});