
const segundo = document.querySelector('.segundos')
const minuto = document.querySelector('.minutos')
const hora = document.querySelector('.horas')

const pegarTempo = () => {

    const tempo = new Date()

    return {
        segundos: tempo.getSeconds(),
        minutos: tempo.getMinutes(),
        horas: tempo.getHours()
    }

}


setTimeout(() => {

    const { segundos, minutos, horas} = pegarTempo()

    segundo.style.transform = `translate(0, -50%) rotate(${segundos * 6}deg)`
    minuto.style.transform = `translate(0, -50%) rotate(${minutos * 6}deg)`
    hora.style.transform = `translate(0, -50%) rotate(${horas * 30}deg)` 

}, 1000)

