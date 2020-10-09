const express = require("express")

const projectsRouter = require("./projectsRouter")
const actionsRouter = require("./actionsRouter");

const server = express()
const port = 4000

server.use(express.json())
//server.use(projectsRouter)
server.use("/actions", actionsRouter)

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})