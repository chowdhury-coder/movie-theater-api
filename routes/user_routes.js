const router = require("express").Router()
const user_controller = require("../controllers/user_controllers")

// GET all users
router.get('/users', user_controller.get_all_users)

// GET one user
router.get('/user/:id', user_controller.get_user)

// GET all shows watched by a user (user id in req.params) 
router.get('/user/:id/shows', user_controller.get_user_shows)

// PUT update and add a show if a user has watched it
router.put('/user/:id/shows/:showId', user_controller.update_user_shows)


module.exports = router