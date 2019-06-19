<template>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

         
          <li class="nav-item dropdown no-arrow d-sm-none">
            <mobileSearch/>
          </li>
            <!-- Nav Item - Messages -->
           <li class="nav-item dropdown no-arrow mx-1">
             <notification/>
           </li>

            <div class="topbar-divider d-none d-sm-block"></div>
            <li>
                <user/>
            </li>
          </ul>

</template>

<script>

import user from './user'
import mobileSearch from './mobileSearch'
import notification from './notification'
export default {
  name: 'headerRightSection',
  components: {
      notification,
      user,
      mobileSearch
  }
}
</script>

<style>

</style>