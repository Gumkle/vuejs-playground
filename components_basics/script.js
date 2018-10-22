
// Definicja komponentu
Vue.component('button-counter', {
    // W przypadku komponentu - data zawsze musi być funkcją, aby zachować niezależność właściwości
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button @click="count++">You clicked me {{count}} times.</button>'
});

Vue.component('blog-post', {
    // Jeżeli chcemy przekazać dane do komponentu, to musimy ich nazwy zawrzeć w tablicy propsów
    props: ['post'],
    template: '<div class="post-entry" :style="{fontSize: postFontSize + \'em\'}">' +
    '<h3>{{ post.title }}</h3>' +
    '<p>{{ post.content }}</p>' +
        // emit emituje nowy rodzaj eventu, ktory pozniej mozemy nasluchac. Moze rowniez emitowac wartosc - tu 0.1
    '<button @click="$emit(\'enlarge-text\', 0.1)">' +
    'Enlarge text' +
    '</button>' +
    '</div>'
});

// Definicja aplikacji
new Vue({
    el: "#app",
    data: {
        posts: [
            {title: "Post 1", content: "post 1 content"},
            {title: "Post 2", content: "post 2 content"},
            {title: "Post 3", content: "post 3 content"},
            {title: "Post 4", content: "post 4 content"},
        ],
        postFontSize: 1
    }
});


