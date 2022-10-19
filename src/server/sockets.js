import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Server } from 'socket.io';
import { createServer } from 'http';


const app = express();
const server = createServer(app); 
const socketio = new Server(server);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/', (req,res) =>{
  res.status(200).json({msg:'Hello from Socket.io'});
});

socketio.sockets.on('connection', function(socket){
  socket.send(JSON.stringify({
    type: 'hello from server',
    content: [ 1, '2' ]
  }));
});

socketio.sockets.on('message', (data) => {
  const packet = JSON.parse(data);

  switch (packet.type) {
  case 'hello from client':
    //some code
    break;
  }
});

async function startApi(){
  try {
    app.listen(8000, ()=> console.log('Server started'));   
  } catch (e) {
    console.log(e);
  }
}

startApi();