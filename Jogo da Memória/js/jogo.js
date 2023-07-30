
const grid = document.querySelector('.grid')

const timer = document.querySelector('.timer')

let end = false

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer'
]


const fim = () => {
    const revelados = document.querySelectorAll('.revelado')

    setTimeout(() => {
        if (revelados.length === 20) {
            window.alert('WIN!!!')
            end = true
        }
    }, 800)

    
}

const criarElemento = (tag, classe) => {
    const elemento = document.createElement(tag)
    elemento.className = classe

    return elemento
}

const verificar = () => {
    const primeiropersonagem = primeira.getAttribute('data-personagem')
    const segundopersonagem = segunda.getAttribute('data-personagem')

    if (primeiropersonagem === segundopersonagem) {
        primeira.firstChild.classList.add('revelado')
        segunda.firstChild.classList.add('revelado')

        primeira = ''
        segunda = ''

        fim()
    } else {

        setTimeout(() => {
        primeira.classList.remove('revelar')
        segunda.classList.remove('revelar')

        primeira = ''
        segunda = ''
        }, 800)

    }
}

let primeira = ''
let segunda = ''

const revelar = ({ target }) => {
    const carta = target.parentNode
    
    if (primeira === '') {
        carta.classList.add('revelar')
        primeira = carta
    } else if (segunda === '') {
        carta.classList.add('revelar')
        segunda = carta

        verificar()
    }
}

const criarCarta = (personagem) => {

    const carta = criarElemento('div', 'card')
    const frente = criarElemento('div', 'face front')
    const costa = criarElemento('div', 'face back')

    carta.setAttribute('data-personagem', personagem)
    carta.appendChild(frente)
    carta.appendChild(costa)

    frente.style.backgroundImage = `url(../images/${personagem}.png)`

    costa.addEventListener('click', revelar)

    return carta

}


const carregarJogo = () => {

    const duplo = [...personagens, ...personagens]
    const baralho = duplo.sort(() => Math.random() - 0.5)

    baralho.forEach((personagem) => {
        const carta = criarCarta(personagem)
        grid.appendChild(carta)
    })


}

carregarJogo()




const nome = document.querySelector('.nome')


nome.innerHTML = 'Jogador: ' + localStorage.getItem('Jogador')



setInterval(() => {
    if (end === false) {
        const tempo = +timer.innerHTML

        timer.innerHTML = tempo + 1
    }
}, 1000)


