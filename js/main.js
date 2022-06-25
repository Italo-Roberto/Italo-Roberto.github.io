var numero = document.querySelector('#numero')
var mensagem = document.querySelector('#mensagem')
var link = document.querySelector('#link')

function gerarLink() {
    if (numero.value != '' && mensagem.value != '') {
        link.classList.add('link-show')
        link.innerHTML = `https://api.whatsapp.com/send/?phone=55${numero.value}&text=${mensagem.value}&app_absent=0`
    } else {
        alert('Necessário preencher campos de Número e Mensagem')
    }
}

function copiarLink(){
    navigator.clipboard.writeText(link.value)
    .then(() => {
        alert('Link copiado com sucesso! Abra uma nova aba de navegador e digite Crtl + V, para inicar uma conversa com esse link')
    })
}

function limparCampos() {
    numero.value = ''
    mensagem.value = ''
    link.classList.remove('link-show')
}