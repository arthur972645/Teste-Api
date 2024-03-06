const axios = require('axios')

async function ApiRick() {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    
    return response.data
}
test('verificar se obtem os dados corretamente', async () => { 
    const dados = await ApiRick()
    //verificar se possui algum dado em uma determinada API
    expect(dados.results[0].species).toContain('Human')
})