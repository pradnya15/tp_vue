<template>
  <div class="update">
  <b-modal id="modal-multi-1" ref="modal-multi-1" size="lg" title="Update" ok-only no-stacking>
  Data : {{Emp}}
     <form @submit.prevent="updateContact(Emp.id)" :ccc="Emp.id">
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
  </b-modal>
    
  </div>
</template>

<script>
import axios from 'axios';
import {APIService} from '../APIService';
const apiService = new APIService();

export default {
  name: 'Update',
  props: {
   Emp: {
    type: Object,
    required: true,
     default: () => []
   },
  method: { type: Function }
  },
  created: function () {
    console.log('user data from parent component:')
    console.log(this.user) 
  },
  data () {
    return {
      title: '',
      desc: '',
      emp:{}
    }
  },
  methods: {
    updateContact(contact){
        console.log("update" + contact);
        console.log(this.Emp);
        apiService.updateContact(contact,this.Emp).then((data) => {
          this.$emit('update_contact');
            this.$refs['modal-multi-1'].hide();
        });
    } 
  }
}
</script>


<style >

</style>
