inputs = document.querySelectorAll('.input')

const botao = document.querySelector('button')

function addLoading() {
    botao.innerHTML = '<img src="loading-43-256.png" class="loading">'
}

function removeLoading () {
    botao.innerHTML = 'Enviar'
}



const handleFocus = (({target}) => {
    const p = target.previousElementSibling

    p.classList.add('input_focus')
})

const handleFocusOut = (({target}) => {
    const p  = target.previousElementSibling

    if (target.value === '') {
        p.classList.remove('input_focus')
    } else {
        p.classList.add('input_focus')
    }
})



const Submissao = async (event) => {
    event.preventDefault()
    const name = document.querySelector('input#idnome').value
    const email = document.querySelector('input#idemail').value

    addLoading()

    

    

    fetch('https://api.sheetmonkey.io/form/8amCzMES18qJmVA42ehecP', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email })
    }).then(() => removeLoading())

}

document.querySelector('form').addEventListener('submit', Submissao)

inputs.forEach((input) => input.addEventListener('focus', handleFocus))

inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut))

