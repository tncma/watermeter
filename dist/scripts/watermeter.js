/** Water Meter Local Storage functions **/

define([], function () {
    'use strict';

    if (!localStorage) {
        return null;
    }

    var watermeter = localStorage.getItem('watermeter');
    watermeter = JSON.parse(watermeter);

    if (!watermeter) {
        watermeter = [];
    }

    return {

        get: function () {
            return watermeter;
        },

        add: function (id) {
            if (watermeter.indexOf(id) === -1) {
                watermeter.push(id);
                localStorage.setItem('watermeter', JSON.stringify(watermeter));
                return true;
            }

            return false;
        },

        remove: function (id) {

            var index = watermeter.indexOf(id);
            if (index !== -1) {
                watermeter.splice(index, 1);

                localStorage.setItem('watermeter', JSON.stringify(watermeter));
                return true;
            }

            return false;
        },
    };
});
