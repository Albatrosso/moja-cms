
const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 9001,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        credentials: true,
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/news/',
    handler(request, h) {
      return [
        {

        },
      ];
    },
  });


  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
