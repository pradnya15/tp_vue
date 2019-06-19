<template>
    <b-nav-item-dropdown 
      id="my-nav-dropdown" 
      html="Email Replies <span class='badge badge-danger'>7<span>" 
      extra-toggle-classes="nav-link-custom" right>
        <b-dropdown-item v-for="item in items" v-bind:key="item.id">{{item.text}}</b-dropdown-item>
    </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'notification',
  data: function () {
    return {
      items: [
        { id: 1, text: 'Notification 1' },
        { id: 2, text: 'Notification 2' },
        { id: 3, text: 'Notification 3' }
      ]
    }
  }
}
</script>

<style>

</style>