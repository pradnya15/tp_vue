<template>
  <div class="hello">
  
     <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="desc" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import addEmpForm from '../components/addEmpForm.vue'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Hello',
      title: '',
      desc: '',
       options: [],
      emp:{}
    }
  },
  components: {
    addEmpForm
  },
  methods: {
      addPost(){
        console.log("aa");  
        console.log(this.title);
        let uri = 'http://localhost:3000/employees';
        this.emp.employee_name = this.title;
        this.emp.employee_age = this.desc;
        console.log("test: " + this.emp.employee_name);
        axios.post(uri, this.emp).then((response) => {
          this.$router.push("/listing");
        });
      }
    }
}
</script>


<style >

</style>
