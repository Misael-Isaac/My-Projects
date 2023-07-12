

const botao = document.querySelector('.login__button')

const inputs = document.querySelectorAll('.input')

const handleFocus = (event) => {
    const p = event.target.previousElementSibling

    p.classList.add('focus')
}

const handleFocusOut = (event) => {
    const p = event.target.previousElementSibling

    if (event.target.value === '') {
        p.classList.remove('focus')
    } else {
        p.classList.add('focus')
    }
}

const verificacao = () => {
    const [nome, senha] = inputs

    if (nome.value && senha.value.length >= 8) {
        botao.removeAttribute('disabled')
    } else {
        botao.setAttribute('disabled', '')
        
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', handleFocus)
});

inputs.forEach((input) => {
    input.addEventListener('focusout', handleFocusOut)
} )

inputs.forEach((input) => {
    input.addEventListener('input', verificacao)
})