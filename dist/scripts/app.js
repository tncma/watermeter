/*global define */
//
// It holds main functionality of the application.
//
define(['waterbodies', 'watermeter'], function (waterbodies, watermeter) {
    'use strict';

    $(document).ready( function() {
        // Make sure the spreadsheet is published!
        // var published_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AmYzu_s7QHsmdGNzMnkwbXRyVmdyZGdrWVRoMWRKVGc&output=html';
        var published_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0An-YEH65Kfo9dFQ2bmhRQzRUbWxIZGxGN2dSNmxtbkE&output=html';

        // Let's get the popup template and compile it using Handlebars
        var source   = $("#popup-template").html();
        var template = Handlebars.compile(source);

        // OK, now let's make the map
        var map = Mapsheet({
          key: published_spreadsheet_url,
          element: "map",
          popupTemplate: template,
        callback: function(mapsheet, tabletop) {
            var waterBodies = [];
            for(var i=0; i < mapsheet.points.length; i++) {
                console.log(mapsheet.points[i].get('latitude'));
                console.log(mapsheet.points[i].get('longitude'));
                console.log(mapsheet.points[i].get('code'));
                console.log(mapsheet.points[i].get('relation'));
                waterBodies.push(mapsheet.points[i].get('relation'));
              }
            }

        });


        function showInfo() {
            $("#add-reading-box").hide();
            $("#view-readings-box").hide();
        }

        function showReadings() {
            $("#add-reading-box").hide();
            $("#view-readings-box").show();
            $("#info-box").hide();

            var source   = $("#list-template").html();
            var template = Handlebars.compile(source);
            var html    = template(watermeter);
            $("#reading-list").html(html);
        }

        function showAddForm() {
            $("#add-reading-box").show();
            $("#view-readings-box").hide();
            $("#info-box").hide();
        }

        // Show app reading
        $("#main-container").on('click', '.add-reading', function(e) {
            showAddForm();
        });

        $("#main-container").on('click', '.view-readings', function(e) {
            showReadings();
        });

        $("#main-container").on('click', '#btn-submit', function(e) {
            e.preventDefault();
            showReadings();
        });


        showInfo();

    });




});