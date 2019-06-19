<template>
   <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Employee Name:</label>
            <input type="text" class="form-control" v-model="Emp.employee_name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Employee Age:</label>
            <input type="text" class="form-control" v-model="Emp.employee_age">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Employee Salary:</label>
            <input type="text" class="form-control" v-model="Emp.employee_salary">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'addEmpForm',
  data () {
    return {
      title: '',
      desc: '',
      emp:{},
      Emp:{
        
      }
    }
  },
  props: {
   Emp: {
    type: Object,
    default: () => []
   }
  },
  methods: {
      addPost(){
        console.log("aa");  
        console.log(this.title);
        let uri = 'http://localhost:3004/employees';
        this.emp.employee_name = this.title;
        this.emp.employee_age = this.desc;
        console.log("test: " + this.emp.employee_name);
        axios.post(uri, this.emp).then((response) => {
          this.$router.push({name: 'listing'});
        });
      }
    }
}
</script>


<style >

</style>
