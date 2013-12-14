/*global define */
//
// It holds main functionality of the application.
//
define(['waterbodies', 'watermeter'], function (waterbodies, watermeter) {
    'use strict';

    $(document).ready( function() {
        // Make sure the spreadsheet is published!
        var published_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AmYzu_s7QHsmdGNzMnkwbXRyVmdyZGdrWVRoMWRKVGc&output=html';

        // Let's get the popup template and compile it using Handlebars
        var source   = $("#popup-template").html();
        var template = Handlebars.compile(source);

        // OK, now let's make the map
        var map = Mapsheet({
          key: published_spreadsheet_url,
          element: "map",
          popupTemplate: template
        });

        //

    });




});