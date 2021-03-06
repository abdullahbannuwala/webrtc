const http = require("http");
const WebSocketServer = require("websocket").server;
let connection = null;

const httpserver  = http.createServer((req,res)=>{
    console.log("We have recive the request");
});

const websocket = new WebSocketServer({
    "httpServer": httpserver
});

websocket.on("request", request=> {

    connection = request.accept(null, request.origin)
    connection.on("open", () => console.log("Opened!!!"))
    connection.on("close", () => console.log("CLOSED!!!"))
    connection.on("message", message => {

        console.log(`Received message ${message.utf8Data}`)
        connection.send(`got your message: ${message.utf8Data}`)
    })

    sendevery5seconds();
})
    

httpserver.listen(8080,()=>console.log("My Server is Listening at 8080"));


function sendevery5seconds(){

    connection.send(`Message ${Math.random()}`);

    setTimeout(sendevery5seconds, 5000);


}




//client code 
//let ws = new WebSocket("ws://localhost:8080");
//ws.onmessage = message => console.log(`Received: ${message.data}`);
//ws.send("Hello! I'm client")