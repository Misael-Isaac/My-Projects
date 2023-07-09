


const mario = document.querySelector('.mario')

const pipe = document.querySelector('.pipe')


const jump = () => {

   mario.classList.add('jump')
   

   setInterval(() => {
      mario.classList.remove('jump')
   }, 500)

    
}






document.addEventListener('keydown', jump);






