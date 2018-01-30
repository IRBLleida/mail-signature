
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input3').each(function(){
        $(this).on('keyup', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }

            var id = $(this).attr('id');
            var val = $(this).val();

            if(id == 'email'){
              $('#sig-email').attr('href', 'mailto:' + $(this).val());
            }

            if(id == 'phone'){
              $('#sig-phone').attr('href', 'tel:' + $(this).val());
            }

            if(id == 'addr1' || id == 'addr2' || id == 'city' || id == 'postcode' || id == 'country'){
              val = ', ' + $(this).val();
            }
            $('#sig-' + id).text(val);
        })
    })


    /*==================================================================
    [ Validate ]*/
    var name = $('#name');

    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }

        return check;
    });


    $('.validate-form .input3').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
