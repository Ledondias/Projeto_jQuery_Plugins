$(document).ready(function (){
    $('#carousel-img').slick({
        autoplay: true
    })
    $('.hamburguer-menu').click(function (){
        $('nav').slideToggle()
    })
    $('#tel-input').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            message: {
                required: true,
            },
            interestVehicle: {
                required: false
            }
        },
        messages: {
            name: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu email.',
            tel: 'Por favor, insira seu número de telefone.',
            message: 'Nos conte mais sobre você!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectInputs = validator.numberOfInvalids()
            console.log(incorrectInputs)

            if(incorrectInputs){
                alert(`Existem ${incorrectInputs} campos incorretos!`)
            }
        }
    })
    $('.vehicle-list button').click(function() {
        const destiny = $('#contact')
        const vehicleName = $(this).parent().find('h3').text()
        
        $('#interestVehicle').val(vehicleName)

        $('html').animate({
            scrollTop: destiny.offset().top
        }, 1000)
    })
})