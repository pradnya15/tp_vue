<template>
  <div class="box">
    <h3 class="count">{{boxCount}}</h3>
    <p>{{ boxTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: ['boxTitle','boxCount'],
  data () {
    return {
      msg: 'Hello'
    }
  }
}
</script>


<style >

.box{
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: rgba(0, 141, 169, 1);
  margin: 0 auto;
  padding: 15px;
  min-height: 146px;
  cursor:pointer;
  transition: all 0.5s
}
#client-performance .box h5{
  font-size: 18px;
  font-weight: bold
}
#client-performance .box p{
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px
}
#client-performance .box.box-primary p{
  color: #fff
}
#client-performance .box .fa{
  border: 2px solid #fff;
  border-radius: 50%;
  font-size: 16px;
}
#need-attention .box{
  width: 144px;
}

.box:hover,.box-primary{
  background: #008DA9;
  color: #fff;
}
</style>
