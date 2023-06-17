$(document).ready(function () {
    $(".accordion_rate .star").click(function () {
        const idCart = $(this).closest(".accordion_rate").attr("id");
        const rating = parseInt($(this).attr("name"));
        const accordion = $(this).closest(".accordion")

        $.ajax({
            type: "POST",
            url: "./src/update_rating.php",
            data: {idCart, rating},
            success: function (response) {
                $.ajax({
                    type: "GET", url: "./src/get_carts.php", success: function (response) {
                        accordion.html(response);
                    }
                });
            }, error: function () {
                console.log("Ошибка")
            }
        });
    });
    bindEventHandlers()
});
