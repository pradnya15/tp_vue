<template>
 <b-modal id="modal-multi-1" ref="modal-multi-1" size="sm" hide-footer no-stacking>
  <div slot="modal-header-close">
    <img src="../../assets/img/close.svg"/>
  </div>
  <div class="modal-body">
    <div v-if="isLinkSent">
     <h2>We've emailed you a password reset link.</h2>
     <p>If you didn't receive an email - <br/>
       - Please make sure you've entered the email you registered with. <br/>
       - Check your spam folder.
     </p>
      <button @click="hideModal" class="btn btn-lg btn-primary btn-block">
            OK
      </button>
    </div>
    <div v-else class=" text-center">
      <h2 class="modal-heading text-center">Forgot Password?</h2>
      <p>No worries, just enter you email below.</p>
      <form class="form-signin">
        <div class="form-group has-float-label">
          <input class="form-control" id="email" type="email" placeholder="username@companydomain.com"/>
          <label for="email">Email</label>
          <div class="error_msg">Please enter a valid email.</div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-lg btn-primary btn-block" @click="submit">
            SUBMIT
          </button>
        </div>
      </form>
      </div>
  </div>
  </b-modal>
</template>

<script>

export default {
  name: 'forgotPWD',
  data () {
    return {
     isLinkSent: false
    }
  },
  methods : {
      submit(){
        this.isLinkSent = true;
      },
      hideModal() {
        this.$refs['modal-multi-1'].hide();
        this.isLinkSent = false;
      }
   }
}
</script>


<style>
.modal-header{
  border: 0px solid #fff
}
.modal{
  color: rgba(0, 0, 0, 0.87);
}
.modal h2{
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
