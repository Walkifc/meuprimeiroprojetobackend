const mongoose = require('mongoose')

async function conectaBancoDeDados() {
    try {
        console.log('Conexeção com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://walconcursos:8Hf00QVFKtnoSh1d@clustermulheres.deh0rnm.mongodb.net/?retryWrites=true&w=majority')
    
        console.log('Conexão com o banco de dados feita com sucesso!') 
    } catch(erro) {
        console.log (erro)
    }
}

module.exports = conectaBancoDeDados