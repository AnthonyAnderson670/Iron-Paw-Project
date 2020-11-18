
// date picker
$( function() {
    $( "#datepicker" ).datepicker();
  } );


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
img.click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//telephone number validation
function validatePhoneNumber(input_str) {
	var phoneExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	return phoneExp.test(input_str);
}

function validatePhone(event) {
    var phone = document.getElementById("quotePhone").value;
    if (!validatePhoneNumber(phone)) {
        document.getElementById('phone_error').classList.remove('hidden');
    } else {
        document.getElementById('phone_error').classList.add('hidden');
    }
    event.preventDefault();
}


// email validation
function validateEmailAddress(input_str) {
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	return emailExp.test(input_str);
}

function validateEmail(event) {
    var email = document.getElementById("quoteEmail").value;
    if (!validateEmailAddress(email)) {
        document.getElementById('email_error').classList.remove('hidden');
    } else {
        document.getElementById('email_error').classList.add('hidden');
    }
    event.preventDefault();
}


