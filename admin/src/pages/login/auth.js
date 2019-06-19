
import axios from 'axios';
export default {
    props:{
       maxHeight:{
          type:Number,
          required:false
       }
    },
    data() {
      return {
        title: 'Mixins are cool',
        copyright: 'All rights reserved. Product of super awesome people',
        user : []
      };
    },
    created: function () {
       
    },
    mounted(){
       
    },
    computed : {
    
    },
    methods: {
      validate: function(){
         return "Pradnyaa"
      },
      authenticate: function(){
         let that = this;
         axios.get('http://localhost:3000/login', {
                "email": "1111@gmail.com",
                "password": "1111"
              })
              .then(function (response) {
                  that.user = response.data;
                  that.title = that.user.status;
                  return that.user.status; 
              })
              .catch(function (error) {
                console.log(error);
              });
      },
      setCookie: function(cname,cvalue,exdays) {
         var d = new Date();
         d.setTime(d.getTime() + (exdays*24*60*60*1000));
         var expires = "expires=" + d.toGMTString();
         document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      },
      getCookie: function(cname) {
         var name = cname + "=";
         var decodedCookie = decodeURIComponent(document.cookie);
         var ca = decodedCookie.split(';');
         for(var i = 0; i < ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0) == ' ') {
             c = c.substring(1);
           }
           if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
           }
         }
         return "";
      }
       
    }
}