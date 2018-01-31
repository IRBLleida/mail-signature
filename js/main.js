function downloadHTML(){
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent($("#signature").html()));
  element.setAttribute('download', 'signatura-' + $("#sig-name").text() + '.html');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

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

            if(id == 'other'){
              val = val.split('\n').join('<br/>');
            }

            if(id == 'addr2' || id == 'city' || id == 'postcode' || id == 'country'){
              if($(this).val()) val = ', ' + $(this).val();
            }
            $('#sig-' + id).html(val);
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

        if(check){
            $('#modal_help').modal('show');
            $('#content-webmail').html($('#content-webmail').text() + '<br/><br/><div class="card"><div class="card-body">' + $('#signature').html() + '</div></div><br/>');
            $('#content-gmail').html($('#content-gmail').text() + '<br/><br/><div class="card"><div class="card-body">' + $('#signature').html() + '</div></div><br/>');
        }

        return false;
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
