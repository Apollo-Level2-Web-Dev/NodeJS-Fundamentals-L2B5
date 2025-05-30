import app from "./app";

let server;
const port = 5000


const bootstrap = async () => {
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

bootstrap()