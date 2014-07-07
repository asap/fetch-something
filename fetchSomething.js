fetchSomethingFromURL: function (fetchThisURL, options) {
    defaults = $.extend({
        custom: function () {},
        failOver: function () {},
        success: function () {},
        fail: function () {}
    }, options);

    var self = this;

    console.log("fetching something", fetchThisURL);

    $.get(fetchThisURL, function (data) {
        console.log("data retrieved", data)
    })
    .done(function (data) {

        // Fire failover case instead of custom
        if (data.hasOwnProperty('failOver')) {
            return defaults.failOver();
        }

        // Fire custom function
        defaults.custom();

        // Fire success
        defaults.success();
    })
    .fail(function () {
        defaults.fail();
    });
}
