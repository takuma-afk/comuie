$(function () {

    let km_a = function () {
        $('.l-mv__kumo01').velocity({
            marginLeft: 1400,
        }, {
            duration: 65000,

        })
    }

    km_a();
    let km_b = function () {
        $('.l-mv__kumo02').velocity({
            marginLeft: 1400,
        }, {
            duration: 70000,

        })
    }

    km_b();

});