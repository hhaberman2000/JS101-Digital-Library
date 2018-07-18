
//Add book cover to modal
    	$(document).on('change', '.btn-file :file', function() {
		      var input = $(this),
			    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
          console.log(label);
		      input.trigger('fileselect', [label]);
		    });

		$('.btn-file :file').on('fileselect', function(event, label) {
		    var input = $(this).parents('.input-group').find(':text'),log = label;
        console.log(input);
        console.log(log);
        if( input.length ) {
		        input.val(log);
            x = input.val(log);
            console.log(x);
		     } else {
		        if( log ) alert(log);
		    }

		});

		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();

		        reader.onload = function (e) {
              console.log(e);
		            $('#img-upload').attr('src', e.target.result);
		        }

		        reader.readAsDataURL(input.files[0]);
            var covers = input.files[0];
            console.log(covers);
		    }
		}

		$("#imgInp").change(function(){
		      readURL(this);
		      });
          //hover synopsis
    $('.hover').mouseover(function() {
      $('.text').css("visibility","visible");
    });

    $('.hover').mouseout(function() {
      $('.text').css("visibility","hidden");
    });


  $(document).ready( function() {

    });
