<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   data() {
            return {
                authenticated: false
            }
        },
  mounted() {
         
        },
   methods: {
       
        }
} 
</script>

<style>
  @import './assets/css/admin.css';
a{
  color: #36b9cc
}
.average,.box-primary.average .fa,.text-warning{
  color: rgba(236, 186, 22, 1) !important
}
.good,.box-primary.good .fa,.text-success{
  color: rgba(7, 153, 16, 1) !important
}
.bad,.box-primary.bad .fa,.text-danger{
  color: rgba(212, 59, 59, 1) !important
}
</style>
