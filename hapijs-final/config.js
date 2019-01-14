var config = {
  mongo: {
    db: {
      host: '@ds155294.mlab.com',
      port: 55294,
      database_name: 'github_api'
    },
    authentication:{
     username:'arditsinani',
     password:'nuktajap2018',
    },
    options:{
     useMongoCLient: true,
    }
   },
   jwt: {
      secret: 'helloworld',
   },
}

module.exports = config;
