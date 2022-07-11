var numero = document.querySelector('#numero')
var mensagem = document.querySelector('#mensagem')
var link = document.querySelector('#link')

function gerarLink() {
    if(numero.value.length < 11 || isNaN(numero.value)){
        alert('Digite um número de telefone no formato válido, ex: 81999999999 (ddd e número tudo junto sem parentêses ou acentos)')
    }else if(numero.value != '' && mensagem.value != '') {
        link.classList.add('link-show')
        link.innerHTML = `https://api.whatsapp.com/send/?phone=55${numero.value}&text=${mensagem.value}&app_absent=0`
    }else {
        alert('Necessário preencher campos de Número e Mensagem')
    }
}

function copiarLink(){
    if(gerarLink && mensagem.value != ''){
        navigator.clipboard.writeText(link.value)
        .then(() => {
            alert('Link copiado com sucesso! Abra uma nova aba de navegador e digite Crtl + V, para inicar uma conversa com esse link')
        })
    }else{
        alert('Necessário preencher campos de Número e Mensagem para copiar o link gerado!')
    }
}

function limparCampos() {
    numero.value = ''
    mensagem.value = ''
    link.classList.remove('link-show')
}