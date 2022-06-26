// coded by RonnelCodes


//FORM
const form = document.querySelector('.contact-form')
const name = document.querySelector('#form-name')
const email = document.querySelector('#form-email')
const subject = document.querySelector('#form-subject')
const message = document.querySelector('#form-mess')


Email.send({
    name: document.getElementById('form-name').value,
    Host : "smtp.zoho.com",
    Username : "contact@ronnel.codes",
    Password : "!1stWord1!",
    To : 'contact@ronnel.codes',
    From : document.getElementById('form-email').value,
    Subject : document.getElementById('form-subject').value,
    Body : document.getElementById('form-mess').value
  }).then(
    message => alert(message)
    );