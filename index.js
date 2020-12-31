const webpack = require('webpack');
const redis = require("redis");
const client = redis.createClient();
const settings = require('./config/webpack.config');
const compiler = webpack(settings);
const express = require('express');
const app = express();
const path = require("path");
const ws = require('ws');

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const wsServer = new ws.Server({noServer: true});

wsServer.on('connection', socket => {

    socket.on('message', message => {

        (async function () {
            await client.set("name", message, redis.print)
            client.get("name", function (err, value) {
                socket.send(value)
            })
        })()
    });
});


client.on("error", function (error) {
    console.error(error);
});

client.on("connect", function (res) {
    console.error("redis connect");
});

app.use(
    require('webpack-dev-middleware')(compiler, {
        publicPath: settings.output.publicPath
    })
);

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "./public/index.html"))
);

app.post('/server', (req, res) => {

    res.send({test: "success"});

    client.set(req.body.params.name, req.body.params.value, redis.print);

    console.log(req.body)

});


const server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-tnrxb.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {useNewUrlParser: true})
server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit('connection', socket, request);
    });
});