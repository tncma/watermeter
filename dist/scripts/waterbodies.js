/** Water bodies Local Storage functions **/

define([], function () {
    'use strict';

    if (!localStorage) {
        return null;
    }

    var waterbodies = localStorage.getItem('waterbodies');
    waterbodies = JSON.parse(waterbodies);

    if (!waterbodies) {
        waterbodies = [];
    }

    return {

        get: function () {
            return waterbodies;
        },

        add: function (id) {
            if (waterbodies.indexOf(id) === -1) {
                waterbodies.push(id);
                localStorage.setItem('waterbodies', JSON.stringify(waterbodies));
                return true;
            }

            return false;
        },

        remove: function (id) {

            var index = waterbodies.indexOf(id);
            if (index !== -1) {
                waterbodies.splice(index, 1);

                localStorage.setItem('waterbodies', JSON.stringify(waterbodies));
                return true;
            }

            return false;
        },
    };
});
