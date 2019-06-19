<template>
    <div id="vueselect">
        <vue-select class="vue-select1" name="select1" :options="options1" :model.sync="result1">
        </vue-select>
        <p class="form-control-static">
          Selected Result: <span class="vue-result1">{{result1}}</span>
        </p>
    </div>
</template>

<script>
export default {
  name: 'vueselect2',
  components: {
    "vue-select": require("vue-select")
  },
  data: {
    options1: [
      "value1",
      "value2",
      "value3"
    ],
    options2: [{
      text: "name1",
      value: "value1"
    }, {
      text: "name2",
      value: "value2"
    }, {
      text: "name3",
      value: "value3"
    }],
    options3: [{
      label: "group1",
      options: [{
        text: "name1",
        value: "value1"
      }, {
        text: "name2",
        value: "value2"
      }, {
        text: "name3",
        value: "value3"
      }]
    }, {
      label: "group2",
      options: [{
        text: "name4",
        value: "value4"
      }, {
        text: "name5",
        value: "value5"
      }, {
        text: "name6",
        value: "value6"
      }]
    }],
    result1: "",
    result2: "",
    result3: ""
  }
}
</script>

<style>

</style>