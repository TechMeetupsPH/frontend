<template>
    <div>
        <v-jumbotron color="primary" dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex text-xs-center>
                <h1 class="testHomeHead">join tech meetups</h1>
                <h1 class="testHomeHead">or</h1>
                <v-btn :to="{path: '/want-to-start-a-tech-meetup'}" color="error">
                  Start Your Own
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
        
        <v-divider></v-divider>

        <v-container grid-list-sm fluid>

          <v-layout align-center row wrap>
            <v-flex xs12 sm3 test-xs-center pa-3 v-for="meetup in meetups" v-bind:key="meetup.id">
              <v-card class="elevation-6 clickable">
                <v-card-media @click="redirectToMeetup(meetup.id)"
                              :src="meetup.summary_image_url" 
                              height="200px"
                              class="clickable"></v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">
                      <router-link :to="{ name: 'Meetup', params: { meetup_id: meetup.id } }">
                      {{ meetup.title }}
                      </router-link>
                    </h3>
                    <div>
                      When:{{ getDateOnly(meetup.start_date) }}
                      <br>
                      Where: {{ meetup.city }}
                      <br>
                      Hosted By Joe Palala
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex> 
          </v-layout>
        </v-container>

    </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Home',
  data () {
    return {
      meetups: []
    }
  },
  methods: {
    getDateOnly (startDate) {
      return moment(startDate).format('MMMM D, YYYY')
    },
    redirectToMeetup (meetupId) {
      this.$router.push({ name: 'Meetup', params: { meetup_id: meetupId } })
    }
  },
  mounted () {
    this.$store
      .dispatch('fetchMeetups')
      .then(() => {
        this.meetups = this.$store.getters.meetups
      })
  }
}
</script>

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
  text-decoration: none;
}
.clickable {
  cursor: pointer;
}
</style>

