<template>
    <!-- Topbar Search -->
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" v-model="searchkey" class="form-control border-0 small" placeholder="Search for client and contacts" aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-light btn-sm search-btn" type="button" @click="search">
                  <i class="fas fa-search fa-sm"></i>Search
                </button>
              </div>
            </div>
          </form>
</template>

<script>
export default {
  name: 'search',
  data : {
    searchkey : null
  },
  methods: {
    search: function (event) {
      alert("You searched for : "+this.searchkey);
    }
  }
}
</script>

<style>
.search-btn{
    background: #eaeaea
}
</style>