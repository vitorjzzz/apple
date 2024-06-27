$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });       

    $('#telefone').mask('(00) 00000-0000') //nesses plugins o "0" representa número e o S representa letras

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: "Por favor, Insira seu Nome"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
     })

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
     })
