<template>
  <div id="clients">
    <div>
      <b-tabs content-class="mt-3">
        <!---- NEED ATTENTION ----->
        <b-tab title="Clients that need attention" active>
          <div class="row align-items-lg-center">
            <div class="col-md-2">
              <router-link  to="/needAttention">
                <box class="box-primary" box-title="Need Attention" box-count="127"/>
              </router-link>
            </div>
            <div class="col-md-2">
              <router-link  to="escalated">
                <box box-title="Escalated" box-count="12" v-bind:class="[isActive ? 'red' : 'blue']" @click="toggleClass()"/>
              </router-link>
            </div>
            <div class="col-md-2">
              <router-link  to="clients/not_followed">
              <box box-title="Not Followed Up With" box-count="18"/>
              </router-link>
            </div>
            <div class="col-md-2">
              <router-link  to="clients/need_email_reply">
              <box box-title="Need Email Reply" box-count="24"/>
              </router-link>
            </div>
            <div class="col-md-2">
              <router-link  to="clients/old_dues">
              <box box-title="Have Old Dues" box-count="8"/>
              </router-link>
            </div>
            <div class="col-md-2">
              <router-link  to="short_payments/">
                <box box-title="Have Short or Odd Payments" box-count="43"/>
              </router-link>
            </div>
         </div>
         <router-view/>
        </b-tab>
        <!---- NEED ATTENTION ----->

        <!---- ALL CLIENTS ----->
        <b-tab title="All Clients">
          <p>I'm the second tab content</p>
        </b-tab>
        <!---- ALL CLIENTS ----->

        <!---- CLIENT PERFORMANCE ----->
        <b-tab title="Clients Performance">
          <p>Disabled tab!</p>
        </b-tab>
        <!---- CLIENT PERFORMANCE ----->

        <!---- AGEING ----->
        <b-tab title="Ageing">
          <p>Disabled tab!</p>
        </b-tab>
        <!---- AGEING ----->

      </b-tabs>
    </div>
  </div>
</template>

<script>
import box from '../../components/box.vue'
import escalated from '../../components/escalated.vue'
import needAttention from '../../components/needAttention.vue'

export default {
  name: 'clients',
  data: function() {
    return  {
      isActive: true
    }
  },

  methods: {
    toggleClass: function(event){
       if(this.isActive){
         this.isActive = false;
       }else{
         this.isActive = true;
       }

    }
  },
  components: {
    box,
    escalated,
    needAttention
  }
}
</script>


<style >

#clients .nav-tabs .nav-link {
    border: 3px solid transparent;
    color: rgba(0, 0, 0, 0.54);
}
#clients .nav-tabs .nav-link:hover {
    border: 3px solid transparent;
    color: #018da9;
}
#clients .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    border-color: #ffffff #ffffff #018da9;
    color: #018da9;
}
#clients .nav-item {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center;
}

</style>
