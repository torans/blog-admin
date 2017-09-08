<template>
  <ul>
    <li v-for="item in articles">
      <h3 class="articlePreview-title-publish">
        {{ item.title }}
      </h3>
      <p>{{ item.create_time }}</p>
    </li>
  </ul>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        articles: [],
        token: localStorage.getItem('sessionId'),
        apiurl: 'http://hao.shetu.cc/api/adminarticle/getlists/?token=' + localStorage.getItem('sessionId')
      }
    },
    mounted: function () {
      this.getArticles()
    },
    methods: {
      getArticles: function () {
        var _this = this
        axios.get(_this.apiurl)
          .then(function (response) {
            var json = response.data
            console.log(json)
            console.log(_this.token)
            _this.articles = json.data
          })
      }
    }
  }
</script>
<style>
  .mavonEditor{
    height: 80vh;
  }
</style>
