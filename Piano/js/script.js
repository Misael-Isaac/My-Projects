

const teclas = document.querySelectorAll('.tecla')


const tocarNota = (nota) => {
    const audio = new Audio(`../notes/${nota}.wav`)
    audio.play()
}

const segurar = (tecla) => {

    tocarNota(tecla.getAttribute('data-note'))


    if (tecla.className.includes('black')) {
        tecla.classList.add('segurou--preta')
        return
    }

    tecla.classList.add('segurou--branca')
}

const soltou = (tecla) => {

    if (tecla.className.includes('black')){
        tecla.classList.remove('segurou--preta')
        return
    }

    tecla.classList.remove('segurou--branca')
}


teclas.forEach((tecla) => {

    tecla.addEventListener('mousedown', () => {
        segurar(tecla)
    })

    tecla.addEventListener('mouseup', () => {
        soltou(tecla)
    })
})

const botao = document.querySelector('.switcher')

const mostrar = document.querySelector('.mostrar')

const piano = document.querySelector('.teclas')

const mostrartecla = () => {

    if (botao.className.includes('switcher--active')) {
        botao.classList.remove('switcher--active')
        piano.classList.add('desabilitado')
        return
    }

    botao.classList.add('switcher--active')
    piano.classList.remove('desabilitado')
}

botao.addEventListener('click', mostrartecla)

