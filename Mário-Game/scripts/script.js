


const mario = document.querySelector('.mario')

const pipe = document.querySelector('.pipe')

const score = document.querySelector('p#pontos')

const nuvem = document.querySelector('.nuvem')

let pontos = 0

let c = true



const jump = () => {

   mario.classList.add('jump')
   

   setTimeout(() => {
      mario.classList.remove('jump')
   }, 500)


}

const loop = setInterval(() => {

   const pipePosition = pipe.offsetLeft

   const nuvemPosition = nuvem.offsetLeft

   score.innerHTML = `${pontos}`

   if (c == true) {
      pontos++
   }

   

   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

   if (pipePosition <= 115 && marioPosition <= 90 && pipePosition > 0) {
      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`

      mario.style.animation = 'none'
      mario.style.bottom = `${marioPosition}px`

      nuvem.style.animation = 'none'
      nuvem.style.left = `${nuvemPosition}px`

      mario.src = '/imagens/game-over.png'
      mario.style.width = '75px'
      mario.style.marginLeft = '50px'  
      
      c = false
   }

   console.log(c)


}, 10)








document.addEventListener('keydown', jump);






