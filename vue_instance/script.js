// vm czesto używane jako nazwa zmiennej apki, konwencja
var data = {
    a: 1,
    b: 5
}


var vm = new Vue({
    el: "#app",
    data: data,

    // Vue hook - uruchamiany na stworzenie aplikacji
    created: function() {
        console.log("a is: " + this.a);
        console.log("b is: " + this.b);
    }
})

// Wywoływane na zmianę a
vm.$watch('a', function (newValue, oldValue){
    vm.b = newValue * 5;
});