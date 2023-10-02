const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return;
    }

    if (mensaje === '') {
        alert('Por favor, ingresa un mensaje.');
        return;
    }

    const formData = {
        nombre,
        email,
        mensaje,
    };

    // Envío de correo electrónico usando Email.js
    emailjs.init("2ZmHVsAd3EDZlg6BB"); 
    const templateParams = {
        to_name: 'Destinatario',
        from_name: 'Remitente',
        message: mensaje, 
    };

    emailjs.send('service_wlpiwds', 'template_zyzon7p', templateParams)
        .then(function(response) {
            alert('Correo electrónico enviado con éxito:'+ response);
        })
        .catch(function(error) {
            alert('Error al enviar el correo electrónico:' + error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            const emailData = {
                service_id: "service_wlpiwds", 
                template_id: "template_q6wacej", 
                user_id: "2ZmHVsAd3EDZlg6BB", 
                template_params: {
                    to_name: 'Destinatario',
                    from_name: nombre, 
                    from_email: email, 
                    message: mensaje,
                },
            };

      // Envía el correo electrónico
      emailjs
        .send(emailData.service_id, emailData.template_id, emailData.template_params)
        .then(function (response) {
          console.log("Correo electrónico enviado con éxito:", response);
        })
        .catch(function (error) {
          console.error("Error al enviar el correo electrónico:", error);
        });
    });
  }

});

//Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}