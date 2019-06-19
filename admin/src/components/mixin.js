export default {
    props:{
       maxHeight:{
          type:Number,
          required:false
       }
    },
    created: function () {
        this.hello()
    },
    mounted(){
       console.log("mounted from mixin");
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      },
      validate: function(){
         return "Pradnyaa"
      }
    }
}