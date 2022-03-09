const CONFIG = require('./config.json');
const util = require('minecraft-server-util');

const express = require('express');
const logger = require("morgan")
const path = require("path");

const port = process.env.PORT || CONFIG.PortServer;
const localIP = CONFIG.LocalIP;
const app = new express;

function queryingMinecraftServer(infoContainer){

    const options = {
        sessionID: 1, // a random 32-bit signed number, optional
        enableSRV: true // SRV record lookup
    };
    // TODO add config file to set the ip of the minecraft server

    util.queryFull(CONFIG.mcServerIP, CONFIG.mcServerPORT, options)
        .then((result) => {
            console.log('Received server status from minecraft server at: ' + new Date().toISOString());
            infoContainer.minecraftInfo = result;
        })
        .catch((error) => console.error(error))
}

function initializeServerInfo(){
    let minecraftServerINFO={minecraftInfo:null};
    queryingMinecraftServer(minecraftServerINFO);

    // TODO add config file to set the timeout of the querying of the server
    const intervalObj = setInterval(() => {
        queryingMinecraftServer(minecraftServerINFO);
    }, CONFIG.mcServerRequestInterval);
    return minecraftServerINFO;
}

// now we can send info to frontend system about how many players are online
minecraftServerINFO = initializeServerInfo();

// Express module use
app.use(logger("short"));

// THIS code is for sending the build reactProject
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,  '..',  'build',  'index.html'));
});
app.get('/api/mcServerInfo', (req, res) => {
    res.json(minecraftServerINFO);
})

// middleware for express app


// starting to listeing
app.listen(port, () => {
    console.log('listening on http://' + localIP + ':' + port);
});





