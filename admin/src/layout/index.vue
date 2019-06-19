<template>
  <div id="layout">
  <div id="wrapper">
  <sidebar/>  
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
       <appHeader/>
       <div class="container-fluid">
          <router-view/>
       </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import appHeader from './header'
import sidebar from './sidebar/sidebar.vue'

export default {
  name: 'layout',
  components: {
    sidebar,
    appHeader
  }
}
</script>


<style >

</style>
