const { User, Show } = require("../models/index")

module.exports.get_shows = async (req, res) =>{
    let shows = await Show.findAll()
    res.send(shows)
}

module.exports.get_show = async (req, res) =>{
    let show = await Show.findByPk(req.params.id)
    if(show){
        res.send(show)
    }else{
        res.status(400).send("Invalid shop id")
    }
}

module.exports.get_show = async (req, res) =>{
    let show = await Show.findByPk(req.params.id)
    if(show){
        res.send(show)
    }else{
        res.status(400).send("Invalid shop id")
    }
}

module.exports.get_genre = async (req, res) =>{
    let genre = await Show.findAll({
        where: {
            genre: req.params.genre
        }
    })
    if(genre.length > 0){
        res.status(200).send(genre)
    }else{
        res.status(404).send("No shows in this genre selected")
    }
}

module.exports.delete_show = async (req, res) =>{
    let show = await Show.findByPk(req.params.id)

    if(show){
        await show.destroy()    
    }else{
        res.status(404).send(`Invalid show with id: ${req.params.id}`)
    }
}

module.exports.update_show_status = async (req, res) =>{
    
}