<template>
  <div class="ui container table-responsive">
    <downloadexcel
      class = "btn"
      :fetch   = "fetchData"
      :fields = "json_fields"
      :before-generate = "startDownload"
      :before-finish = "finishDownload" 
      name    = "filename.xls"
      type    = "xls">
      Download Excel
    </downloadexcel>
  <filter-bar></filter-bar> 
    <vuetable ref="vuetable" :per-page="5" 
      api-url="https://vuetable.ratiw.net/api/users"
      :fields="fields"
      pagination-path=""
      @vuetable:pagination-data="onPaginationData"
      detail-row-component="DetailRow"
      @vuetable:cell-clicked="onCellClicked"
    >
    </vuetable>
    <vuetable-pagination class="pagination" ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
  </div>
</template>

<script>
import FilterBar from '../components/FilterBar.vue'
import DetailRow from '../components/DetailRow'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import downloadexcel from 'vue-json-excel'
import axios from 'axios';

export default {
  components: {
    Vuetable,
    VuetablePagination,
    FilterBar,
    downloadexcel,
    DetailRow
  },
  data () {
    return {
      json_fields: {
        'Complete name': 'name',
        'Date': 'date',
        'Country': 'country'
      },
      fields: [
        {
          name: '__checkbox'
        },
        {
          name: 'name',
          sortField: 'name',
          direction: 'desc'
        },
        'email',
        {
          name: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          sortField: 'birthdate',
          callback: 'formatDate|DD-MM-YYYY'
        },
        {
          name: 'nickname',
          callback: 'allcap'
        },
        {
          name: 'gender',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'genderLabel'
        },
        {
          name: 'salary',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          callback: 'formatNumber'
        }
      ]
    }
  },
  methods: {
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber (value) {
      return value
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      return value
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onCellClicked (data, field, event) {
        console.log('cellClicked: ', field.name)
        this.$refs.vuetable.toggleDetailRow(data.id)
    },
    async fetchData(){
      const response = await axios.get('https://holidayapi.com/v1/holidays?key=a4b2083b-1577-4acd-9408-6e529996b129&country=US&year=2018&month=09');
      console.log(response);
      return response.data.holidays;
    },
    startDownload(){
        alert('show loading');
    },
    finishDownload(){
        alert('hide loading');
    }
    
  }
}
</script>

<style>
.pagination .item{
  position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    cursor: pointer
}
.pagination .item:hover{
  background-color:#f1f8fa
}
.pagination .item.active{
  background-color: #018da9;
  color: #fff;
  border-color: #018da9;
}
.table th.sorted-desc{
  background:red
}
</style>