const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GithubModel = new Schema({
        profile:{
                login: {type:String},
                id: {type:Number},
                node_id:{type:String},
                avatar_url: {type:String},
                gravatar_id: {type:String},
                url:{type:String},
                html_url:{type:String},
                followers_url: {type:String},
                following_url:{type:String},
                gists_url: {type:String},
                starred_url:{type:String},
                subscriptions_url: {type:String},
                organizations_url: {type:String},
                repos_url: {type:String},
                events_url: {type:String},
                received_events_url: {type:String},
                type: {type:String},
                site_admin:{type:Boolean},
                name: {type:String},
                company: {type:String},
                blog: {type:String},
                location: {type:String},
                email: {type:String},
                hireable: {type:String},
                bio: {type:String},
                public_repos: {type:Number},
                public_gists: {type:Number},
                followers: {type:Number},
                following: {type:Number},
                created_at: {type:Date},
                updated_at: {type:Date},
                private_gists: {type:Number},
                total_private_repos: {type:Number},
                owned_private_repos: {type:Number},
                disk_usage: {type:Number},
                collaborators: {type:Number},
                two_factor_authentication: {type:Boolean},
                plan: {
                        name: {type:String},
                        space: {type:Number},
                        collaborators: {type:Number},
                        private_repos: {type:Number}
                }
        },
        starred:[]
});

module.exports = mongoose.model('github_api', GithubModel);