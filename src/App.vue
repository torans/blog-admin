<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    mounted: function () {
      this.checkLogin()
    },
    methods: {
      checkLogin: function () {
        var token = localStorage.getItem('sessionId')
        if (token === '') {
          this.$router.push('/')
        }
      }
    }
  }
</script>

<style>
  #app {

  }
</style>
