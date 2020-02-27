<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- V-bind is used to replace the mustache tag on HTML attributes, : is short for v-bind -->
      </v-col>
     
      <v-col v-for="(next,i) in beers" :key="i" :cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :height="250"
            contain
            v-cloak
            :src="next.image_url "
          ></v-img>

          <v-card-title>{{next.name}}</v-card-title>

          <v-card-subtitle>{{next.tagline}}</v-card-subtitle>

          <v-card-actions>
            <v-btn text icon color="pink">
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="updateShowStatus(i)">
              <v-icon>{{ show[i] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show[i]">
              <v-divider></v-divider>

              <v-card-text>{{next.description}}</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import vue from "vue";

export default {
  name: "Favs",
  data: () => ({
    search: "",
    beers: [],
    disableLoad: false,
    dialog: false,
    show: []
  }),

  computed: {
    favorites() {
      return this.$store.state.FavoritesBeers;
    }
  },
  mounted() {
    // let self = this; used to acess variable from global scope localy
    
  },
  methods: {
    updateShowStatus(i) {
      vue.set(this.show, i, !this.show[i]);   
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
[v-cloak] {
  display: none;
}
[v-cloak]::before {
  content: "loading...";
}
body {
  background: #f2f2f2;
  font-family: "Open Sans", sans-serif;
}
</style>

