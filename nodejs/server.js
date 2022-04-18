const { Server } = require("socket.io");

const io = new Server({ cors: {
    credentials: false
  } 
});

io.on("connection", (socket) => {

    socket.on("send", (data) => {
        io.emit("message", {
            date: new Date().toISOString(),
            user: data.username,
            text: data.message
        });
    });
   
});


io.listen(9999);