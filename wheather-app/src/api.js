const chave = "a831813e657546319c7182152230207"

const fetchData = async (cidade) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${chave}&q=${cidade}&aqi=no
    `

    const fetchResponse = await fetch(url)
    
    const dados = await fetchResponse.json()
    return dados


}

export default fetchData