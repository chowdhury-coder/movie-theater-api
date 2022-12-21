const router = require("express").Router()
const show_controller = require("../controllers/show_controller")

// GET all shows
router.get("/shows", show_controller.get_shows)

// GET one show
router.get("/show/:id", show_controller.get_show)

// GET shows of a particular genre (genre in req.params)
router.get("/shows/genres/:genre", show_controller.get_genre)

// DELETE a show
router.delete("/show/:id", show_controller.delete_show)

// PUT update the status of a show
router.put("/show/:id/watched", show_controller.update_show_status)

module.exports = router