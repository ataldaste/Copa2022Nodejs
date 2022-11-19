const jogos = require('../dataBase/models/jogos')

module.exports = {
    async index(req, res) {
        
        const Jogos = await jogos.find()

        return res.json(Jogos)
    },

    async grupo(req, res) {
        
        const Grupos = await jogos.find({grupo: req.query.grupo})
        .then(jogo => {
            if(jogo.length < 1)
            res.send("grupo inexistente :P")
            res.status(201).json(jogo)
        }).catch(e => {
            console.log(e)
            res.status(400).send('grupo inexistente :P')
        })
        
    },
    async timeAdv(req, res) {
        const time = await jogos.find({time: req.query.time})
        const adv = await jogos.find({adversario: req.query.time})

        const result = [...time, ...adv]

        res.json(result)        
    },
    async data(req, res) {
        
        const Datas = await jogos.find({data: req.query.data})
        .then(jogo => {
            if(jogo.length < 1)
            res.send("grupo inexistente :P")
            res.status(201).json(jogo)
        }).catch(e => {
            console.log(e)
            res.status(400).send('grupo inexistente :P')
        })
        
    },


async store(req, res) {
    const { grupo, data, hora, time, adversario } = req.body
    Jogos = await jogos.create({
        grupo,
        data,
        hora, 
        time,
        adversario
    })
    .then(jogo => {
        res.status(201).json(jogo)
    }).catch(e => {
        console.log(e)
        res.status(400).send('erro ao criar')
    })
    
}

}