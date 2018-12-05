<template>

  <v-container fluid>

    <v-layout>
      <v-flex xs12 sm4 offset-sm4>

        <v-card>
          <v-card-title priamary-title>
            <h3 class="headline mb-0">Login</h3> 
          </v-card-title>
          <v-card-content>
            <div class="pa-3">
              <v-btn color="primary" dark block large>
                Login with Facebook
              </v-btn>
            </div>
          </v-card-content>
        </v-card> 

      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
export default {
  name: 'Login'
}
</script>

