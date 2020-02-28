<template>
  <v-app>        
    <v-content>      
      <BeerHome/>
    </v-content>
  </v-app>
</template>

<script>
import BeerHome from '@/components/BeerHome';


export default {
  name: 'Home',

  components: {
    BeerHome,
    

  },

  data: () => ({
    //
  }),
};
</script>
