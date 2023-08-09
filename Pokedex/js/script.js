const Imagem = document.querySelector('.pokemon_image')
const nome = document.querySelector('.name')
const input = document.querySelector('.input')
const form = document.querySelector('.form')
const num = document.querySelector('.pokemon_number')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const button = document.querySelector('.button')




let ide = 1


const fetchPokemon = async (pokemon) => {

    loading()
    const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    if (fetchData.status === 200) {
        const data = await fetchData.json()

        ide = data.id

        return data

    }

}



const loading = () => {
    nome.innerHTML = 'Loading...'
    num.innerHTML = ' -'
}

const render_Pokemon = (data) => {



    if (data) {
        Imagem.style.display = 'block'
        Imagem.src = data['sprites']['versions'] ['generation-v']['black-white']['animated'] ['front_default']
        nome.innerHTML = data.name
        num.innerHTML = `${data.id} -`
        input.value = ''
    } else {
        Imagem.style.display = 'none'
        nome.innerHTML = 'undefined'
        num.innerHTML = ' -'
        input.value = ''
    }

    ide = data.id

    


}


const handleSubmit = async (event) => {
    event.preventDefault()
    
    const data = await fetchPokemon(input.value.toLowerCase())

    render_Pokemon(data)
}


form.addEventListener('submit', handleSubmit)
next.addEventListener('click', async () => {
    ide += 1
    const data = await fetchPokemon(ide)
    render_Pokemon(data)
})

prev.addEventListener('click', async () => {
    ide = ide - 1
    if (ide >= 1) {
        const data = await fetchPokemon(ide)
        render_Pokemon(data)
    }
})



const initial = async () => {
    const data = await fetchPokemon('1')

    render_Pokemon(data)
}

initial()