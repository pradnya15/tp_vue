<template>
    <b-nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">
        <button id="sidebarToggleTop" v-bind:class="[isActive ? 'test2' : '']" v-on:click="greet" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

       <!-- <search/>-->
         aa {{user.username}}
        <headerRightSection/>

    </b-nav>
</template>

<script>
import auth from '../../pages/login/auth.js';
import { search, headerRightSection } from './header_components'
export default {
  name: 'app_header',
  mixins: [auth],
  components: {
      search,
      headerRightSection
  },
  data(){
    return {
      isActive: false
    }
  },
  methods:{
      greet: function (event) {
          this.isActive = !this.isActive;
          var body = document.getElementById("body");
          var sidebar = document.getElementById("accordionSidebar");
          if(this.isActive){
           body.classList.add("sidebar-toggled");
           sidebar.classList.add("toggled");
          }
          else{
            body.classList.remove("sidebar-toggled");
            sidebar.classList.remove("toggled");
          }
      }
  }
}
/*$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });*/
</script>

<style>
.icon-bar {
    background-color: #018da9;
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
}
.icon-bar+.icon-bar {
    margin-top: 4px;
}
</style>