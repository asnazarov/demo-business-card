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