<template>

  <b-dropdown variant="link" size="lg" no-caret>
    <template slot="button-content">&#x1f50d;<span class="sr-only">Search</span></template>
    <b-dropdown-form  class="form-inline mr-auto w-100 navbar-search">
        <div class="input-group">
                        <b-form-input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."></b-form-input>
                        <div class="input-group-append">
                        <b-button variant="primary" class="btn btn-primary btn-sm" type="button">
                            <i class="fas fa-search fa-sm"></i>Search
                        </b-button>
                        </div>
                    </div>
        </b-dropdown-form>
    </b-dropdown>

</template>

<script>
export default {
  name: 'mobileSearch'
}
</script>

<style>

</style>