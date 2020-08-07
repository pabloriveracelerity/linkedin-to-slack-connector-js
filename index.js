'use strict';

require('dotenv').config();
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            

            return 'Up and running ...';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();