// create new instance
var vueInst=new Vue({

    el:'#vue_inst',

    data:{

        firstname:'Wesley',

        lastname:'Okemwa'
    },

    methods:{

        myDetails : function (){

            return "i am "+firstname+""+lastname;
        }
    }
})