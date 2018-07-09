var ShowAuthorsUI = function() {
  Library.call(this);
};



ShowAuthorsUI.prototype = Object.create(Library.prototype);

ShowAuthorsUI.prototype.init = function () {

  this._bindEvents();
};

ShowAuthorsUI.prototype._bindEvents = function () {
  $('#show-all-authors-modal').on('click', $.proxy(this._handleModalOpenAuth, this));
  $('#show-all-authors-modal').on('click', $.proxy(this._handleShowAuthors, this));

  return false;
};

AddBooksUI.prototype._handleModalOpenAuth = function () {
  this.$container.modal('show');
};

ShowAuthorsUI.prototype.handleShowAuthors = function () {
 var authorArray = this.removeDuplicates(allAuthors);


};


$(function(){
  window.gShowAuthorsUI = new ShowAuthorsUI();
  window.gShowAuthorsUI.init();
});


$(document).ready( function() {
    	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
		});

		$('.btn-file :file').on('fileselect', function(event, label) {

		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;

		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }

		});
		function readURL(input) {
		    if (input.files && input.files[0]) {
		        var reader = new FileReader();

		        reader.onload = function (e) {
		            $('#img-upload').attr('src', e.target.result);
		        }

		        reader.readAsDataURL(input.files[0]);
		    }
		}

		$("#imgInp").change(function(){
		    readURL(this);
		});
	});
