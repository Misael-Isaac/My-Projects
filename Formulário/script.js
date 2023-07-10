function clicou(event) {
    const p = document.querySelector("div#bloco_nome p")
    const pp = document.querySelector("div#bloco_email p")


    p.style.marginTop = "-25px"
    pp.style.marginTop = "-25px"
}

const Submissao = (event) => {
    event.preventDefault()
    const name = document.querySelector('input#idnome').value
    const email = document.querySelector('input#idemail').value

    fetch('https://api.sheetmonkey.io/form/8amCzMES18qJmVA42ehecP', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, email: email })
    })

}

document.querySelector('form').addEventListener('submit', Submissao)

