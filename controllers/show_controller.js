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

module.exports.updates_show_status = async (req, res) =>{
    const show = await Show.findByPk(req.params.id)

    if (show) {
        if (show.status === 'on-going'){
            show.status = 'canceled'
            await show.save()
            return res.status(200).send(`Show id: ${req.params.id} is updated`)
        }
        if (show.status === 'cancelled'){
            show.status = 'on-going'
            await show.save()
            return res.status(200).send(`Show id: ${req.params.id} is updated`)
        }

    } else {
        return res.status(404).send(`Invalid Show id: ${req.params.id}.`);
    }

}
module.exports.updates_show_rating = async (req, res) =>{
    // get ratings from request body

    const { rating } = req.body
    if(rating < 1 || rating > 10){
        return res.status(400).json({error: "Rating must be between 1 - 10"})
    }

    const show = await Show.findByPk(req.params.id)

    if(show.userId === null){
        return res.status(400).json({error: "Watch the show to enable you give ratings!"})
    }
    const showWatched = await show.update({
        rating: rating
    })
    return res.status(200).json(showWatched)
}