<template>
  <div class="login-wrapper">
  <form class="form-signin"  @submit.prevent="submit">
    <!--<form class="form-signin" @submit.prevent="login">-->{{title}}
      <h2 class="form-signin-heading">Login to <img src="../../assets/img/TimePay.png" style="height:50px;vertical-align: sub;"/></h2>
      <!--<label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>-->
      <div class="form-group has-float-label">
        <input class="form-control" v-bind:class="{'has_error': login_error }" id="email" type="email" placeholder="username@companydomain.com"/>
        <label for="email">Email</label>
        <div class="error_msg" v-if="login_error">Please enter a valid email.</div>
      </div>
      <div class="form-group has-float-label">
        <input class="form-control" id="password" :type="passwordFieldType" v-model="password" placeholder="••••••••" style="padding: 22px 50px 7px 10px;"/>
        <label for="password">Password</label>
        <a class="pwd_visibility m-t-1 text-uppercase" href="javascript:;"  @click="switchVisibility"><span v-show="!showPass">Show</span><span v-show="showPass">Hide</span></a>
      </div>
      <div class="form-group text-right">
        <div><a href="javascript:;" class=""  v-b-modal.modal-multi-1.modal-sm>Forgot Password?</a></div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-lg btn-primary btn-block">Login <img src="../../assets/img/up-arrow.svg"/></button>
      <!--<router-link class="btn btn-lg btn-primary btn-block"  to="/home">Login</router-link>-->
      </div>
      <div class="form-group">
      <router-link class="btn btn-lg btn-soft-primary btn-block"  to="/home">Login with Google</router-link>
      </div>
    </form>
    <forgotPWD ref="modal"/>
  </div>
</template>

<script>
import forgotPWD from './forgotPassword.vue'
import auth from './auth.js';
import { constants } from 'fs';
export default {
  name: 'Login',
  mixins: [auth],
  data () {
    return {
      email: '',
      password: '',
      showPass: false,
      login_error:'',
      showModal: false,
      passwordFieldType: 'password'
    }
  },
  components:{
    forgotPWD
  },
  created: function() {
    this.title = "It's will change global var";
  },
  methods: {
  switchVisibility(){
    this.showPass = !this.showPass;
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
  },
  forgotPWD() {
    let element = this.$refs.modal.$el
    $(element).modal('show')
  },
  loginFailed () {
    this.login_error = 'Login failed!'
    delete localStorage.token
  },
  submit() {
    this.login_error = true;
    this.title = this.authenticate();
    console.log(this.title);
  },
  loginSuccessful (req) {
    console.log("loginisuccess");
    console.log(req);
    if (!req.data[0].token) {
      this.loginFailed()
      return
    }

    localStorage.token = req.data.token
    this.error = false

    this.$router.replace(this.$route.query.redirect || '/')
  },
  login () {
      axios.get("http://localhost:3004/user").then((response) => {
        
          if(response.data[0].status){
            this.loginSuccessful(response)
          }
      });
      /* axios.get('http://localhost:3004/user', { username: this.email, password: this.password })
       .then(request => {this.loginSuccessful(request)})
      .catch(() => {console.log("loginFailed");this.loginFailed()});*/
    }
  }
}
</script>

<style lang="css">
@import "../../assets/css/bootstrap-float-label.css";

.login-wrapper {
  background: #fff;
  width: 85%;
  margin: 8% auto;
}

.form-signin {
  max-width: 350px;
  padding: 2% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 36px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  text-align: center;
  font-size: 24px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-group {
  margin-bottom: 12px;
}
.pwd_visibility{
  position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  color: #008DA9
}
a,a:hover{
  color: #008DA9;
    text-decoration: none;
}
.has_error{
  border: 1px solid rgba(212, 59, 59, 1);
}
.error_msg{
  color: rgba(212, 59, 59, 1);
  margin-top: 8px;
}
.btn-soft-primary{
  background: #F5FAFB;
  color: #008DA9;
}

</style>