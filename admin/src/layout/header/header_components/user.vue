<template>
     <b-nav-item-dropdown
                id="my-nav-dropdown"
                html='<span class="mr-2 d-none d-lg-inline text-gray-600 small">Angad Prajapati</span>
                <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">'
                extra-toggle-classes="nav-link-custom"
                no-caret
                >
                <b-dropdown-item>Profile</b-dropdown-item>
                <b-dropdown-item>Settings</b-dropdown-item>
                <b-dropdown-item to="/">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style>

</style>