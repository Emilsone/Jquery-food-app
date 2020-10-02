new Vue({
    el: '#app',
    created() {
        this.fetchData();	
    },
    data: {
        posts: []
    },
    methods: {
        fetchData() {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(response => {
          console.log(this.posts  = response.data); 
            });
        }
    }
});