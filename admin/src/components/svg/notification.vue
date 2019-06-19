<template>
  <span class="icon icon-arrow"></span>
</template>

<script>

export default {
  name: 'notification',
  data () {
    return {
     
    }
  }
}
</script>


<style>
.icon-arrow {
  mask: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/icon-arrow-black.svg);
}
.icon.icon-arrow {
  display: inline-block !important;
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.54);
  vertical-align: middle;
  mask-size: cover;
}
.nav-link:hover .icon,
.icon:focus {
  background: #018da9;
}

</style>
