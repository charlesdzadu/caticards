<template>
  <div>
    <h1>
      Bienvenue sur mon site {{ counter }}
    </h1>
    <hr>
    <nuxt-link to="/about"> Sur la page propos </nuxt-link>

    <br>

    <button @click="add"> Ajouter </button>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { useAuthentication } from '@/store/authentication/index';

export default Vue.extend({
  name: 'IndexPage',
  data: () => {
    return {
      counter: 0,
    }
  },
  setup() {

  },
  methods: {
    add(){
      this.counter++
    }
  },

  mounted() {
    var auth = useAuthentication();
    this.counter = auth.$state.counter;
  }
})
</script>
