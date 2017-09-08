
<template>
  <div class="edit">
    <mavonEditor v-model="value" class="mavonEditor"/>
  </div>
</template>
<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    data () {
      return {}
    },
    components: {
      mavonEditor
    }
  }
</script>
<style>
  .mavonEditor{
    height: 80vh;
  }
</style>
