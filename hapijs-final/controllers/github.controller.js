const config = require('../config')
const GithubModel = require('../models/github_user.model');
const request = require('request');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = {
    login(req,reply){
        var header=req.headers['authorization']||'',
        token=header.split(/\s+/).pop()||'',
        auth=new Buffer.from(token, 'base64').toString(),
        parts=auth.split(/:/),
        username=parts[0],
        password=parts[1];
        let query = {
            'profile.login':username
        }
        GithubModel.find(query,(err,user) =>{
            let result = JSON.stringify(user);
            let profileContent;
            let starredContent = [];
            if(result === '[]'){
                request.get('https://api.github.com/user',{
                    headers: { 'User-Agent': 'Mozilla/5.0' },
                    auth: { 
                        'username':username,
                        'password':password
                    }
                },(error, response, body) => {
                    if(body.includes('Bad credentials')){
                        reply("Bad credentials").code(404);
                    }else{
                        let starred_urlFull;
                        let starredUrl;
                        if(profileContent){
                            if(profileContent.starred_url){
                                starred_urlFull = profileContent.starred_url;
                                starredUrl = starred_urlFull.substring(0, starred_urlFull.indexOf('{'));
                            }
                        }
                        request.get(`${starredUrl}`,{
                            headers: { 'User-Agent': 'Mozilla/5.0' },
                            auth: { 
                                'username':username,
                                'password':password
                            }
                        },(error, response, body) => {
                            if(error){
                                reply(error);
                            }else{
                                starredContent = JSON.parse(body);
                                let user = {
                                        profile:{
                                            login:profileContent.login,
                                            id:profileContent.id,
                                            node_id:profileContent.node_id,
                                            avatar_url: profileContent.avatar_url,
                                            gravatar_id: profileContent.gravatar_id,
                                            url:profileContent.url,
                                            html_url:profileContent.html_url,
                                            followers_url: profileContent.followers_url,
                                            following_url:profileContent.following_url,
                                            gists_url: profileContent.gists_url,
                                            starred_url:profileContent.starred_url,
                                            subscriptions_url: profileContent.subscriptions_url,
                                            organizations_url: profileContent.organizations_url,
                                            repos_url: profileContent.repos_url,
                                            events_url: profileContent.events_url,
                                            received_events_url: profileContent.received_events_url,
                                            type: profileContent.type,
                                            site_admin:profileContent.site_admin,
                                            name: profileContent.name,
                                            company: profileContent.company,
                                            blog: profileContent.blog,
                                            location: profileContent.location,
                                            email: profileContent.email,
                                            hireable: profileContent.hireable,
                                            bio: profileContent.bio,
                                            public_repos: profileContent.public_repos,
                                            public_gists: profileContent.public_gists,
                                            followers: profileContent.followers,
                                            following: profileContent.following,
                                            created_at: new Date(profileContent.created_at),
                                            updated_at: new Date(profileContent.updated_at),
                                            private_gists: profileContent.private_gists,
                                            total_private_repos: profileContent.total_private_repos,
                                            owned_private_repos: profileContent.owned_private_repos,
                                            disk_usage: profileContent.disk_usage,
                                            collaborators: profileContent.collaborators,
                                            two_factor_authentication: profileContent.two_factor_authentication,
                                            plan: {
                                                    name: profileContent.plan.name,
                                                    space: profileContent.plan.space,
                                                    collaborators: profileContent.plan.collaborators,
                                                    private_repos: profileContent.plan.private_repos
                                            }
                                        },
                                        starred:starredContent
                                }
                                GithubModel.create(user)    
                                const token = jwt.sign({ login: username }, config.jwt.secret);
                                return reply({ token })
                            }
                        });
                    }
                })
                    
            }else{
                request.get('https://api.github.com/user',{
                    headers: { 'User-Agent': 'Mozilla/5.0' },
                    auth: { 
                        'username':username,
                        'password':password
                    }
                },(error, response, body) => {
                    if(body.includes('Bad credentials')){
                        reply("Bad credentials").code(404);
                    }else{
                        const token = jwt.sign({ login: username }, config.jwt.secret);
                        return reply({ token });
                    }
                })
            }
        });
    },
    profile(req,reply) {
        let query = {
            'profile.login': req.auth.credentials.login
        }
        GithubModel.find(query,(err,user) =>{
            if (err){
                reply(err)
            }else{
                reply(user)
            }
        })
    }
}