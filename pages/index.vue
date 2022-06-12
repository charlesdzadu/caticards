<template>
  <h1>
    {{ $t('welcome') }} sur mon site {{ $config.baseURL }}
    <hr>
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
  </h1>
</template>

<script >
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {

  }
})
</script>
