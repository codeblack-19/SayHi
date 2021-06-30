const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socketio = require('socket.io');
const cors = require('cors');

const io = socketio(server, {
    cors : {
        origin : '*',
        methods : ['GET', 'POST']
    }
});

const PORT = process.env.PORT || 3001;
app.use(cors());

app.get('/', function(req, res){
    res.send('Server is running on port 3001');
});


io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
    })

    socket.on('callUser', ({userTocall, signalData, from, name }) => {
        io.to(userTocall).emit("callUser", {signal : signalData, from, name })
    })

    socket.on('answerCall', (data) => {
        io.to(data.to).emit("callaccepted", data.signal)
    })
})

server.listen(PORT, () => console.log(`Server has started on Port ${PORT}`));