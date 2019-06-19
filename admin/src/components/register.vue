<template>
  <div class="register">
    <form @submit.prevent="registerUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username" v-model="register.username">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="text" class="form-control" id="email" v-model="register.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="text" class="form-control" id="epasswordmail" v-model="register.password">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Register</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'register',
  data () {
    return {
      register: {
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods:{
    registerUser(){
      console.log(this.register);
      let uri = 'http://localhost:3004/user';
      axios.post(uri, this.register)
      .then(response => {
        console.log("inside function");
        let token = this.generate_token(32);
        localStorage.setItem('token', token);
      })
    },
    generate_token(length){
        //edit the token allowed characters
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
        var b = [];  
        for (var i=0; i<length; i++) {
            var j = (Math.random() * (a.length-1)).toFixed(0);
            b[i] = a[j];
        }
        return b.join("");
    }
  }
}
</script>


<style >

</style>
