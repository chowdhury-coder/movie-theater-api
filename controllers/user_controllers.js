const { User, Show } = require("../models/index")

module.exports.get_all_users = async (req, res) =>{
    const users = await User.findAll()
    res.status(200).json(users)
}

module.exports.get_user = async (req, res) =>{
    const user = await User.findByPk(req.params.id)
    if(user){
        return res.status(200).json(user)
    }else{
        return res.status(404).send(`Could not find a user with id: ${req.params.id}`)
    }
}

module.exports.get_user_shows = async (req, res) =>{
    const user = await User.findByPk(req.params.id, { include: Show})
    if(user){
        return res.status(200).json(user)
    }else{
        return res.status(404).send(`Could not find a user with id: ${req.params.id}`)
    }
}

module.exports.update_user_shows = async (req, res) =>{
    const user = await User.findByPk(req.params.id)
    const show = await Show.findByPk(req.params.showId)

    if(user){
        if(show){
            await user.addShow(show)
            res.send(`The show with id: ${show} has been added as watched for user id: ${user}`)
        }else{
            res.status(404).send(`Invalid show id`)
        }
    }else{
        res.status(404).send(`Invalid user id`)
    }
}