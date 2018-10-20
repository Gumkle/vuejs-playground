var vm = new Vue({
    el: "#app1",
    data: {
        hasErrors: false,
        isActive: true,
        classObject: {
            'active': true,
            'color-danger': true
        },
        errorClass: 'color-danger',
        activeClass: 'active'
    },
});