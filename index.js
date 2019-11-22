// Import stylesheets
import './style.css';

import Vue from 'vue';
import axios from 'axios';

new Vue({
  el: '#app',
  data: {
    fetch: false,
    info: null,
    errored: false,
    btnText: 'Show User Data',
  },
  methods: {
    fetchUsers() {
      this.fetch = !this.fetch;

      if(this.fetch) {
        this.btnText = 'Hide User Data';
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.info = response.data
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      } else {
        this.btnText = 'Show User Data';
      } // else end
    } // fetchUsers end
  }, // methods end
})