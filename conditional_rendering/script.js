var vm = new Vue({
    el: "#app",
    data: {
        ok: false,
        loginType: 'username'
    },
    methods: {
        toggleLoginType: function (){
            if(this.loginType == "username")
                this.loginType = "email"
            else
                this.loginType = "username"
        }
    }
});