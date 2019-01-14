const Hapi = require('hapi');
const jwtAuthPlugin = require('hapi-auth-jwt');
const githubRoutes = require('./routes/github.routes');
const mongoose = require('mongoose');
const config = require('./config')

let connectionString = `mongodb://${config.mongo.authentication.username}:${config.mongo.authentication.password}${config.mongo.db.host}:${config.mongo.db.port}/${config.mongo.db.database_name}`;

mongoose.connect(connectionString,config.mongo.options);
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});
mongoose.connection.on('error', (err) => {
    console.log('Error while connecting to mongoDB!', err);
})

const server = new Hapi.Server();

server.connection({
    host:'0.0.0.0',
    port:3000,
    routes:{cors:true}
});

server.register(jwtAuthPlugin, (err) => {
    server.auth.strategy('jwt', 'jwt', {
        key: config.jwt.secret,
        validateFunc: function (request, decoded, callback) {
            return callback(null, true, decoded);
        },
    });
    
    server.auth.default('jwt');
    
    server.route({
        path: '/',
        method: 'GET',
        config: {
            auth: false,
        },
        handler(req,reply){
            reply('Welcome to Github HAPI API');
        }
    });
    
    server.route(githubRoutes);
    
    
});

server.start((err) => {
    if(err){
        throw err;
    }
    console.log(`Server is Running at PORT ${server.info.port}`);
});
