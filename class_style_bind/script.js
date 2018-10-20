var vm = new Vue({
    el: "#app",
    data: {
        message: "Hello"
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
});

var vm2 = new Vue({
    el: "#app2",
    data: {
        firstName: 'Dawid',
        lastName: 'Dziedzic',
    },
    computed: {
        // FullName niekoniecznie musi być funkcją. Może być obiektem zawierającym metody set i get. W takim przypadku set i get będą wywoływane odpowiednio przy ustawianiu i pobieraniu wartości.
        // DOmyślnie funkcja computed jest getterem, żeby zmienić jej wartość trzeba zmienić jej składowe
        fullName: function () {
            return this.firstName+' '+this.lastName;
        }
    }
});

var vm3 = new Vue({
    el: "#app3",
    data: {
        a: 10,
        b: 5
    },
    methods: {
        sum: function(){
            return this.a + this.b;
        }
    }
})

var vm4 = new Vue({
    el: "#app4",
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask question!'
    },
    watch: {
        // watch question for changes
        question: function (newValue, oldValue) {
            this.answer = "Waiting for you to stop typing...";
            this.debouncedGetAnswer();
        }
    },
    created: function () {
        // debounce to funkcja dostarczana przez loadsh, narzucająca limit na częstotliwość wykonywania operacji
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        getAnswer: function(){
            if (this.question.indexOf('?') === -1){
                this.answer = "Questions usually end with question mark :DDD";
                return 0;
            }
            this.answer = "Thinking...";
            var vm = this;

            // axios dostarcza obsługę Ajaxa
            axios.get('https://yesno.wtf/api')
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch(function(error){
                    vm.answer = 'Error! Could not reach the API! ' + error;
                });
        }
    }
})

