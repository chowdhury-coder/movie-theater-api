const router = require("express").Router()
const show_controller = require("../controllers/show_controller")

// GET all shows
router.get("/shows", show_controller.get_shows)

// GET one show
router.get("/shows/:id", show_controller.get_show)

// GET shows of a particular genre (genre in req.params)
router.get("/shows/genres/:genre", show_controller.get_genre)

// DELETE a show
router.delete("/shows/:id", show_controller.delete_show)

// PUT update the status of a show
router.put("/shows/:id/updates", show_controller.updates_show_status)

// PUT update rating of a show that has been watched
router.put("/shows/:id/watched", show_controller.updates_show_rating)


module.exports = router