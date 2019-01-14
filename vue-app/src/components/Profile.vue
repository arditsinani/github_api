<template>
    <div>
        <div class="row">
            <div class="col-md-11   "></div>
            <div class="col-md-1">
                <b-button variant="warning" v-on:click="logOut()">Log Out</b-button>
            </div>
        </div>
        <div class="col-lg-12 col-sm-12">
            <div class="card hovercard">
                <div class="card-background">
                    <img class="card-bkimg" alt=""  v-bind:src="data.profile.avatar_url">
                </div>
                <div class="useravatar">
                    <img alt="" v-bind:src="data.profile.avatar_url">
                </div>
                <div class="card-info"> <span class="card-title">{{data.profile.login}}</span>

                </div>
            </div>
        </div>
        <div>
        <div class="row">
            <div class="col-12">
                <div class="card">

                    <div class="card-body">
                        <div class="card-title mb-4">
                            <div class="d-flex justify-content-start">
                                <div class="ml-auto">
                                    <input type="button" class="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <ul class="nav nav-tabs mb-4" id="myTab">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Basic Info</a>
                                    </li>
                                </ul>
                                <div class="tab-content ml-1" id="myTabContent">
                                    <div class="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                        <div class="row">
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">Full Name</label>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                {{data.profile.login}}
                                            </div>
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">Created</label>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                {{data.profile.created_at}}
                                            </div>
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">Followers</label>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                {{data.profile.followers}}
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">Location</label>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                {{data.profile.location}}
                                            </div>
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">Public Repositories</label>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                {{data.profile.public_repos}}
                                            </div>
                                            <div class="col-sm-3 col-md-2 col-5">
                                                <label style="font-weight:bold;">Private Repositories</label>
                                            </div>
                                            <div class="col-md-2 col-6">
                                                {{data.profile.total_private_repos}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                <div class="row">
                            <div class="col-12">
                                <ul class="nav nav-tabs mb-4" id="myTab">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">Plan Info</a>
                                    </li>
                                </ul>
                                <div class="tab-content ml-1" id="myTabContent">
                                    <div class="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">
                                        <div class="row">
                                            <div class="col-sm-3 col-md-3 col-5">
                                                <div class="row">
                                                    <div class="col-sm-3 col-md-6 col-5">
                                                        <label style="font-weight:bold;">Plan type</label>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        {{data.profile.plan.name}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-md-3 col-5">
                                                <div class="row">
                                                    <div class="col-sm-3 col-md-6 col-5">
                                                        <label style="font-weight:bold;">Private Repositories</label>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        {{data.profile.plan.private_repos}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-md-3 col-5">
                                                <div class="row">
                                                    <div class="col-sm-3 col-md-6 col-5">
                                                        <label style="font-weight:bold;">Collaborators</label>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        {{data.profile.plan.collaborators}}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-3 col-md-3 col-5">
                                                <div class="row">
                                                    <div class="col-sm-3 col-md-6 col-5">
                                                        <label style="font-weight:bold;">Space</label>
                                                    </div>
                                                    <div class="col-md-6 col-6">
                                                        {{data.profile.plan.space}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <br>
        <h3 style="text-align:center" v-if="!show"><b-button variant="success" v-on:click="showStarred">Show Starred Repositories</b-button></h3>
        <h3 style="text-align:center" v-if="show"><b-button  v-on:click="showStarred">Hide Starred Repositories</b-button></h3>
        <v-data-table
            :headers="headers"
            v-bind:items="data.starred"
            class="elevation-1"
            hide-actions
            v-if="show" >
            <template slot="items" slot-scope="props" >
            <td class="text-xs-center">{{ props.item.name }}</td>
            <td class="text-xs-center"> <img alt="" style="height:50px"  v-bind:src="props.item.owner.avatar_url"></td>
            <td class="text-xs-center">{{ props.item.full_name }}</td>
            <td class="text-xs-center">{{ props.item.clone_url }}</td>
            <td class="text-xs-center">{{ props.item.has_downloads }}</td>
            <td class="text-xs-center">{{ props.item.open_issues }}</td>
            <td class="text-xs-center">{{ props.item.private }}</td>
            <td class="text-xs-center">{{ props.item.updated_at }}</td>
            <td class="text-xs-center">{{ props.item.watchers }}</td>
            </template>
        </v-data-table>
    </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Profile',
    data (){
        return {
            data:[],
            headers: [
          {
            text: 'Name',
            align: 'center',
            sortable:false,
            value: 'name'
          },
          { text: 'Avatar Url',
            align: 'center',
            sortable:false,
            value: 'avatar_url' },
          { text: 'Full Name',
            align: 'center',
            sortable:false,
             value: 'full_name' },
          { text: 'Clone Url',
            align: 'center',
            sortable:false,
             value: 'clone_url' },
          { text: 'Has Downloads',
            align: 'center',
            sortable:false,
             value: 'has_downloads' },
          { text: 'Open Issues',
            align: 'center',
            sortable:false,
             value: 'open_issues' },
          { text: 'Private',
            align: 'center',
            sortable:false,
             value: 'private' },
          { text: 'Updated At',
            align: 'center',
            sortable:false,
             value: 'updated_at' },
          { text: 'Watchers',
            align: 'center',
            sortable:false,
             value: 'watchers' }
        ],

        show: false
        }
    },
    methods:{
        showStarred(){
            if(!this.show){
                this.show = true
            }else{
                this.show = false
            }
        },
        logOut(){
            localStorage.removeItem('token');
            axios.defaults.headers.common['Authorization'] = null;
            this.$router.push('/login')
        }
        
    },
    created() {
        let token = localStorage.getItem('token');
        if(token){
            axios.get('http://localhost:3000/api/profile',token).then( (res) =>{
                this.data = res.data[0];
                this.flashMessage.success({title: 'Success', message: 'User info updated',time:1000});
            }).catch((err) =>{
                this.flashMessage.error({title: 'Error', message: 'Try again',time:1000});
            })
        }else{
            this.$router.push('/login')
        }
    },
}
</script>

<style lang="css">
.card {
    margin-top: 20px;
    padding: 30px;
    background-color: rgba(214, 224, 226, 0.2);
    -webkit-border-top-left-radius:5px;
    -moz-border-top-left-radius:5px;
    border-top-left-radius:5px;
    -webkit-border-top-right-radius:5px;
    -moz-border-top-right-radius:5px;
    border-top-right-radius:5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.card.hovercard {
    position: relative;
    padding-top: 0;
    overflow: hidden;
    text-align: center;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 1);
}
.card.hovercard .card-background {
    height: 220px;
}
.card-background img {
    -webkit-filter: blur(25px);
    -moz-filter: blur(25px);
    -o-filter: blur(25px);
    -ms-filter: blur(25px);
    filter: blur(25px);
    margin-left: -100px;
    margin-top: -200px;
    min-width: 130%;
}
.card.hovercard .useravatar {
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
}
.card.hovercard .useravatar img {
    width: 200px;
    height: 200px;
    max-width: 200px;
    max-height: 200px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.5);
}
.card.hovercard .card-info {
    position: absolute;
    bottom: 14px;
    left: 0;
    right: 0;
}
.card.hovercard .card-info .card-title {
    padding:0 5px;
    font-size: 30px;
    line-height: 1;
    color: #262626;
    background-color: rgb(255, 255, 255);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.card.hovercard .card-info {
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    color: #737373;
    text-overflow: ellipsis;
}
.card.hovercard .bottom {
    padding: 0 20px;
    margin-bottom: 17px;
}
.btn-pref .btn {
    -webkit-border-radius:0 !important;
}

body{
  margin-top: auto;
    background-color: #f1f1f1;
  }
  .border{
    border-bottom:1px solid #F1F1F1;
    margin-bottom:10px;
  }
  .main-secction{
    box-shadow: 10px 10px 10px;
  }
  .image-section{
    padding: 0px;
  }
  .image-section img{
    width: 100%;
    height:250px;
    position: relative;
  }
  .user-image{
    position: absolute;
    margin-top:-50px;
  }
  .user-left-part{
    margin: 0px;
  }
  .user-image img{
    width:100px;
    height:100px;
  }
  .user-profil-part{
    padding-bottom:30px;
    background-color:#FAFAFA;
  }
  .follow{    
    margin-top:70px;   
  }
  .user-detail-row{
    margin:0px; 
  }
  .user-detail-section2 p{
    font-size:12px;
    padding: 0px;
    margin: 0px;
  }
  .user-detail-section2{
    margin-top:10px;
  }
  .user-detail-section2 span{
    color:#7CBBC3;
    font-size: 20px;
  }
  .user-detail-section2 small{
    font-size:12px;
    color:#D3A86A;
  }
  .profile-right-section{
    padding: 20px 0px 10px 15px;
    background-color: #FFFFFF;  
  }
  .profile-right-section-row{
    margin: 0px;
  }
  .profile-header-section1 h1{
    font-size: 25px;
    margin: 0px;
  }
  .profile-header-section1 h5{
    color: #0062cc;
  }
  .req-btn{
    height:30px;
    font-size:12px;
  }
  .profile-tag{
    padding: 10px;
    border:1px solid #F6F6F6;
  }
  .profile-tag p{
    font-size: 12px;
    color:black;
  }
  .profile-tag i{
    color:#ADADAD;
    font-size: 20px;
  }
  .image-right-part{
    background-color: #FCFCFC;
    margin: 0px;
    padding: 5px;
  }
  .img-main-rightPart{
    background-color: #FCFCFC;
    margin-top: auto;
  }
  .image-right-detail{
    padding: 0px;
  }
  .image-right-detail p{
    font-size: 12px;
  }
  .image-right-detail a:hover{
    text-decoration: none;
  }
  .image-right img{
    width: 100%;
  }
  .image-right-detail-section2{
    margin: 0px;
  }
  .image-right-detail-section2 p{
    color:#38ACDF;
    margin:0px;
  }
  .image-right-detail-section2 span{
    color:#7F7F7F;
  }

  .nav-link{
    font-size: 1.2em;    
  }
  
</style>
