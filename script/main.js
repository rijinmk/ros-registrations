$(document).ready(function(){
  $('.focus').focus();
});

function validate(){
  var f=0;

  var uni = $('#uni_inp').val();
  var full = $('#full_inp').val();
  var mob = $('#mob_inp').val();
  var email = $('#em_inp').val();

  if(uni=='' || full=='' || mob=='' || email==''){
    f = 0;
  }else{
    f = 1;
  }

  if(f==0){
    //$('.error_message').fadeIn();
    alert('Please fill all the fields');
    return false;
  }else{
    return true;
  }
}
