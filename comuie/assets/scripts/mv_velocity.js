$(function () {

    let km_a = function () {
        $('.p-mv__kumo01').velocity({
            marginLeft: 1400,
        }, {
            duration: 45000,

        })
    }

    km_a();
    let km_b = function () {
        $('.p-mv__kumo02').velocity({
            marginLeft: 1400,
        }, {
            duration: 50000,

        })
    }

    km_b();

});