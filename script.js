const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
  
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const nombreError = document.getElementById("nombre-error");
    const emailError = document.getElementById("email-error");
  
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    function isValidEmail(email) {
        var parts = email.split('@');
        if (parts.length !== 2) {
            return false; 
        }
        var domainParts = parts[1].split('.');
        if (domainParts.length < 2) {
            return false; 
        }
        var domain = domainParts[0];
        return emailRegex.test(email) && /^[a-zA-Z]+$/.test(domain);
    }
  
    function isValidName(nombre) {
      var regex = /^[A-Za-z\s]+$/;
      return regex.test(nombre);
    }
  
    if (nombre === '' || !isValidName(nombre)) {
      nombreError.innerHTML = "Por favor, ingresa solo letras en el campo de nombre.";
      return;
    } else {
      nombreError.innerHTML = "";
    }
  
    if (!isValidEmail(email)) {
      emailError.innerHTML = "Por favor, ingresa un Email válido.";
      return;
    } else {
      emailError.innerHTML = "";
    }
  
    if (mensaje === '') {
      alert('Por favor, ingresa un mensaje.');
      return;
    }
  
    emailjs.init("2ZmHVsAd3EDZlg6BB");
    const templateParams = {
      to_name: 'Destinatario',
      from_name: 'Remitente',
      message: mensaje,
    };
  
    const emailData = {
        service_id: "service_wlpiwds", 
        template_id: "template_q6wacej", 
        user_id: "2ZmHVsAd3EDZlg6BB", 
        template_params: {
            to_name: 'Luca',
            from_name: nombre, 
            from_email: email, 
            message: mensaje,
        },
    };
    emailjs.send(emailData.service_id, emailData.template_id, emailData.template_params)
  .then(function (response) {

    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    const form = document.getElementById('contact-form');

    form.reset();

    setTimeout(function () {
        successMessage.style.display = 'none';
      }, 5000); // 5000 milisegundos (5 segundos)
  })
  .catch(function (error) {
    alert('Error al enviar el correo electrónico:' + error);
  });
      
  });
