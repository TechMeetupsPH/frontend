<template>
  <div class="container">
    <div class="left">
      <h1>{{ title }}</h1>
    </div>
    <div class="right">
      You are in {{ current }}
      <br /> If you have any issues please contact techmeetupsph@gmail.com
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  computed: mapState([
    'title'
  ]),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
