const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(`[RECV-USER] ${message}`);
    ws.send(`[USER] ${message}`);
  });
});

class JS13 {
    constructor() {
        this.World = {
            SizeX: 256,
            SizeY: 16,
            SizeZ: 256,
            Data: Array((256 * 16 * 256)).fill().map(u => Object.create(null))
        };
        if (Object.seal) Object.seal(this.World.Data);

        this.Entities = Object.create(null);

        // TODO: REMOVE
        this.ms = 0;
    }

    Initialize() {
        // Call Module Initializations Here

        this.Entities.Clown = {
            Velocity: {
               X: 10,
               Y: 0,
               Z: 0
            },
            Position: {
                X: 0,
                Y: 0,
                Z: 0
            }
        };

        return true;
    }

    Terminate() {
        // Call Module Terminations Here
    }

    Run(tps) {
        if (!this.Initialize()) return false;
        const timer = setInterval(() => {
            let status = this.Update(1000 / tps);
            if (!status) {
                clearInterval(timer);
                this.Terminate();
            }
        }, 1000 / tps);
        return true;
    }

    Update(delta) {
        // Call Module Updates Here

        this.Entities.Clown.Position.X = this.Entities.Clown.Position.X + (this.Entities.Clown.Velocity.X * delta / 1000);
        this.Entities.Clown.Position.Y = this.Entities.Clown.Position.Y + (this.Entities.Clown.Velocity.Y * delta / 1000);
        this.Entities.Clown.Position.Z = this.Entities.Clown.Position.Z + (this.Entities.Clown.Velocity.Z * delta / 1000);

        ws.send(JSON.stringify(this.Entities.Clown));

        return true;
    }
}

let game = new JS13();
game.Run(50);
