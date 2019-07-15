<template>
  <div>
    <h1>Hello IT {{ $route.params }}</h1>
    <img src="/images/logo.png">
    <ul>
      <li><nuxt-link to="/data" >01-data page 2</nuxt-link></li>
      <li><nuxt-link to="/info/history" >History</nuxt-link></li>
      <li><nuxt-link to="/info/vision" >Vision</nuxt-link></li>
    </ul>
    <v-btn color="success" @click="hiStory">History2</v-btn>
  </div>
</template>
<script>
export default {
  data(){

  },
  methods: {
    hiStory(){
      console.log('hiStory')
      this.$router.replace('/info/6202001')
    },
  }
}
</script>
