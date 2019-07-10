$(function () {

	/*
     * Contact Form Validation Code
     */
    function checkEmpty(selector) {
        if (selector.val()=="" || selector.val()==selector.prop("placeholder")) {
          selector.addClass('formFieldError',500);
          return false;
        } else {
          selector.removeClass('formFieldError',500); 
          return true;
        }
    }
    function validateEmail(email) {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (!regex.test(email.val())) {
          email.addClass('formFieldError',500); 
          return false;
        } else {
          email.removeClass('formFieldError',500); 
          return true;
        }
    }

    $('.contact-form').submit(function () {
      var $this = $(this),
          result = true;

      if(!checkEmpty($this.find('#fname'))){
        result=false;
      }
      if(!validateEmail($this.find('#email'))) {
        result=false;
      }
      if(!checkEmpty($this.find('#mssg'))) {
        result=false;
      }
      
      if(result==false) {
        return false;
      }

      var $btn = $("#send").button('loading');

      var data = $this.serialize();

      $.ajax({
          url: "sender.php", 
          type: "POST",        
          data: data,     
          cache: false,
          success: function (html) {
          	console.log(html);
              if (html==1) {
                  $('#result-message').addClass('alert alert-success').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Muy bien!</strong> El mensaje ha sido enviado. Te contactaremos pronto.').delay(500).slideDown(500).delay(10000).slideUp('slow');

                  $btn.button('reset');
                  
              } else {
                  $('#result-message').addClass('alert alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> Hubo un error en el envio del mensaje, intentalo de nuevo.').delay(500).slideDown(500).delay(10000).slideUp('slow');
                  $btn.button('reset');
              }
          },
          error: function (a, b) {
            if (b == 'error') {
              $('#result-message').addClass('alert alert-danger').html('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> Message Sending Error! Please try again').delay(500).slideDown(500).delay(10000).slideUp('slow');
            };
            $btn.button('reset');
          }
      });

      return false;
    });
   
    


});
