
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
    path: '/news-overview/',
    handler(request, h) {
      return [
        {
          title: 'Санкт-Петербург',
          text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
          date: '10.02.2020',
          photo: '',
        },
        {
          title: 'Санкт-Петербург',
          text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
          date: '10.02.2020',
          photo: '',
        },
        {
          title: 'Санкт-Петербург',
          text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
          date: '10.02.2020',
          photo: '',
        },
        {
          title: 'Санкт-Петербург',
          text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
          date: '10.02.2020',
          photo: '',
        },
        {
          title: 'Санкт-Петербург',
          text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
          date: '10.02.2020',
          photo: '',
        },
        {
          title: 'Санкт-Петербург',
          text: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted insensible as. Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened stanhill. Repeated offended you opinions off dissuade ask packages screened. She alteration everything sympathize impossible his get compliment. Collected few extremity suffering met had sportsman.',
          date: '10.02.2020',
          photo: '',
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
