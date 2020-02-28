<template>
  <v-app>    
    <v-content>
      <favs/>
    </v-content>
  </v-app>
</template>

<script>
import favs from '@/components/Favorite';

export default {
  name: 'Favorites',

  components: {
    favs,
  },

  data: () => ({
    //
  }),
};
</script>
