const GithubController = require('../controllers/github.controller'); 
module.exports = [
    {
        path: '/api/login',
        config: {
            auth: false,
        },
        method: 'GET',
        handler: GithubController.login
    },
    {
        path: '/api/profile',
        config: {
            auth: 'jwt',
        },
        method: 'GET',
        handler: GithubController.profile
    }
]