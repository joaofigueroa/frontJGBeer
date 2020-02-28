<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c099.png"
          transition="scale-transition"
          width="40"
        />
    
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="GoToView('/')" text> Home </v-btn>
      <v-btn @click="GoToView('/favoritos')" text> favoritos </v-btn>

    </v-app-bar>
    
    <v-content>
      
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  components: {

  },

  data: () => ({

  }),

  methods : {
     GoToView(path){       
      this.$router.push(path);
    }
  },
};
</script>
