// $(function() {



//     $('select').styler();

//     $('.hero__button').on('click', function() {
//         $('.menu ul').slideToggle();
//     });

// });

jQuery(function($) {
    $("#name").mask("А-я");
    $("#phone").mask("0-9", { placeholder });
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
});

$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});