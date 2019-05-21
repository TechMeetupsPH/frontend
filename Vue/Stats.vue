<template>
  <div class="stats">
    <h1>Look at all the meetups you can signup for!</h1>
    <p>There are currently {{ countMeetups }} links</p>
  </div>
</template>

<script>
//import { mapGetters } from 'vuex'
import meetupCount as meetupCountService from 'services/meetupcount'

export default {
  name: 'DashboardStats',
  computed: {
    meetups: {
       getCount: function() {
          return  meetupCountService.get();
       }

  },
  methods: {
  }

}
</script>
