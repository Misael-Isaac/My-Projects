
const button = document.querySelector('button')

const input = document.querySelector('input')


const handleChange = () => {


    if (input.value.length > 2) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }

}

const Submissao = (event) => {
    event.preventDefault()

    localStorage.setItem('Jogador', input.value)

    window.location = 'pages/jogo.html'
}





input.addEventListener('input', handleChange)

document.querySelector('form').addEventListener('submit', Submissao)