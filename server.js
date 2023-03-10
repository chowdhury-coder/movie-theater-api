const express = require("express")
const seed = require("./seed")
const app = express()
const port = 3000;

app.use(express.json())
app.use(require("./routes/user_routes"))
app.use(require("./routes/show_routes"))



app.listen(port, ()=> {
    seed()
    console.log(`Server running on port: ${port}`)
})