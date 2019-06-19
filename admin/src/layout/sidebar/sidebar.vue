<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div class="sidebar-brand-icon rotate-n-15">
          tp
        </div>
        <div class="sidebar-brand-text mx-3">TimePay</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!--<li class="nav-item">
        <router-link  class="nav-link"  to="/add">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <img src="../../assets/img/notification.svg">
          <notification/>
          <span>Add Employee</span></router-link >
      </li>

      <li class="nav-item">
        <router-link  class="nav-link"  to="/listing">
          <notification/>
          <span>List Employee</span></router-link >
      </li>-->

      <li class="nav-item">
        <router-link  class="nav-link"  to="/home">
          <notification/>
          <span>Home</span></router-link >
      </li>

      <!--<li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item" href="buttons.html">Buttons</a>
            <a class="collapse-item" href="cards.html">Cards</a>
          </div>
        </div>
      </li>-->
      
      <li class="nav-item">
       <router-link  class="nav-link"  to="/clients">
          <notification/>
          <span>Clients</span></router-link >
      </li>
      
      <li class="nav-item">
        <router-link  class="nav-link"  to="/followups">
          <notification/>
          <span>Followups</span></router-link> 
      </li>
      
      <li class="nav-item">
        <router-link  class="nav-link"  to="/collections">
          <notification/>
          <span>Collections</span></router-link> 
      </li>

      <li class="nav-item">
        <router-link  class="nav-link"  to="/outstandings">
          <notification/>
          <span>Outstanding</span></router-link> 
      </li>
      
      <li class="nav-item">
        <router-link  class="nav-link"  to="/team">
          <notification/>
          <span>Team</span></router-link> 
      </li>
      
      <li class="nav-item">
        <router-link  class="nav-link"  to="#">
          <notification/>
          <span>Sales</span></router-link> 
      </li>
      
      <li class="nav-item">
        <router-link  class="nav-link"  to="/contacts">
          <notification/>
          <span>Contacts</span></router-link>
      </li>

      <hr class="sidebar-divider d-none d-md-block">
     <missingInfo/>
     <lastSync/>
      <!-- Sidebar Toggler (Sidebar) -->
      <!--<div class="text-center d-none d-md-inline bottom_sidebar_toggle">
        <button class="rounded-circle border-0" id="sidebarToggle">&lt;&lt;</button>
      </div>-->

    </ul>
</template>

<script>
import lastSync from './lastSync'
import missingInfo from './missingInfo'
import notification from '../../components/svg/notification.vue'

export default {
  name: 'sidebar',
  components: {
    lastSync,
    notification,
    missingInfo
  }
}
</script>


<style>
.sidebar-dark .nav-item .nav-link.router-link-active{
  color: #018da9
}
.sidebar-dark .nav-item .nav-link.router-link-active .icon{
  background: #018da9;
}
#accordionSidebar{
  position: relative;
}
/*.bottom_sidebar_toggle{
  position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background: #eaeaea;
}*/
</style>
