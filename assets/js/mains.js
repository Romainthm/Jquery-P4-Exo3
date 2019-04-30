$(function() {

  var nomPrenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
  var mailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var regexphone = /^0[67][0-9]{8}/
  $('#valid').click(function() {
    //ou var inputs =$('input');
    var nom = $('.nom').val();
    var prenom = $('.prenom').val();
    var email = $('.mail').val();
    var tel = $('.tel').val();
    console.log(nom);
    console.log(nomPrenomValid.test(nom));

    if (nomPrenomValid.test(prenom)==false) {
      alert ("Prénom invalide !");
      $('.prenom').css('border-color', 'red');
    } else {
      $('.prenom').css('border-color', '');
    }

    if (nomPrenomValid.test(nom)==false) {
      alert('Nom Invalide !');
      $('.nom').css('border-color', 'red');
    }else {
      $('.nom').css('border-color', '');
    }

    if (mailValid.test(email)==false) {
      alert ("mail invalide !");
      $('.mail').css('border-color', 'red');
    } else {
      $('.mail').css('border-color', '');
    }

    if (regexphone.test(tel)==false) {
      alert ("Numéro de téléphone invalide !");
      $('.tel').css('border-color', 'red');
    } else {
      $('.tel').css('border-color', '');
    }

  })
})
// corection
// $(function(){
// $('form').submit(function(e){
// $('small').remove();
// var inputs =$('input');
// $.each(inputs, function(){
//  let input = this ;
//   if(input.validity.valid){
//    var small = $('<small></small>');
//    small.addclass('alert alert-danger');
//    small.text(input.validationMessage);
//    $(input).after(small);
//        };
//        e.preventDefault();
//     },false);
//  });
// });
