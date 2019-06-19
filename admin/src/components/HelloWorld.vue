<template>
  <div class="hello">
    <h1>{{ msg }}</h1></br>
    <!--
    <ul>
      <li v-for="item in listItems">{{ item }}</li>
    </ul>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>-->
    <hr/>
    <table class="table table-bordered table-hover">

<thead>

<tr>

<th>#</th>

<th>First Name</th>
<th>Age</th>
<th>Salary</th>
<th> Role ID </th>
<th>Actions</th>
</tr>
</thead>
<tbody>
<tr v-for="contact in contacts">

<th>{{ contact.id }}</th>

<th>{{ contact.employee_name }} </th> 


<td>{{ contact.employee_age }}</td>

<td>{{ contact.employee_salary }}</td>


<td>{{ contact.role_id }}</td>

<td>
<b-button v-b-modal.modal-multi-1 class="btn-sm btn-info" v-on:click.prevent="func($event)" v-bind:contact-id="contact.id">Update</b-button>
<button class="btn btn-sm btn-danger" @click="deleteContact(contact)">Delete</button>
</td>
</tr>
</tbody>
</table>

  <update :Emp="emp"  @update_contact="getContacts"/>
  </div>
</template>

<script>
import {APIService} from '../APIService';
import update from '../components/update.vue'
import mixin from '../components/mixin.js';

const API_URL = 'http://localhost:3004';
const apiService = new APIService();

export default {
  mixins: [mixin],
  name: 'HelloWorld',
  components: {
    update
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: "zxcvbnmasdfghjkl",
      title: "akask",
      listItems: ['buy food', 'play games', 'sleep'],
      count: 0,
      contacts: [],
      emp: []
    }
  },
  methods: {
    updateContact(contact){
      console.log("update" + contact);
      /*apiService.updateContact(contact.id).then((data) => {
          this.getContacts();
      });*/
    },
     handleCreate() {
      console.log('Child has been created.');
    },
    getContact(emp_id){
      apiService.getContact(emp_id).then((data) => {
          this.emp = data;
          console.log(this.emp);
      });
    },
    func: function (event) {
          var element = event.currentTarget
          var emp_id = element.getAttribute('contact-id');
          console.log("aaaaaaaa" + emp_id);
          this.getContact(emp_id);
      },
    
    getContacts(){
      apiService.getContacts().then((data) => {
          this.contacts = data;
      });
    },
    deleteContact(contact){
      apiService.deleteContact(contact.id).then((data) => {
          this.getContacts();
          console.log(data);
      });
    }
  },
  mounted() {
    console.log("mounted from helloworld");
    alert(this.validate());
    this.getContacts();
  },
  created: function () {
    console.log('component hook called')
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
