const enviar = document.getElementById('botao')
const campos = document.getElementsByClassName('campo')
const inputs = document.querySelectorAll('input')



enviar.addEventListener('click',function(){
    for (let i = 0; i < campos.length; i++) {
        
        if (inputs[i].value == ''){
            campos[i].classList.remove('inputOcupado')
            campos[i].classList.add('inputVazio')
        } else {
            campos[i].classList.remove('inputVazio')
            campos[i].classList.add('inputOcupado')
        }
        
    }
})