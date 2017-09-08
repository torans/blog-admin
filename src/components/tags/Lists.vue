
<template>
  <div class="posts">
    <nav-aside></nav-aside>
    <div class="article-list">
      <div class="article-instructions">
        <img src="https://weiweiblog.herokuapp.com/dist/article-title.png?fddb6490e71d4de2da5d14d4a701b76a" height="20" width="20">
        <span>标签列表</span>
        <img src="https://weiweiblog.herokuapp.com/dist/add.png?2a817ed446993de7876c6045f960c4bc" height="17" width="17">
      </div>
      <ul style="max-height: 782px;">
        <li>
          <h3 class="articlePreview-title-publish">
            <Icon type="bookmark"></Icon>
            <router>Python</router>
            <span>(22)</span>
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import NavAside from '../../common/NavAside.vue'
  import Edit from '../../common/Edit.vue'
  export default {
    data () {
      return {}
    },
    components: {
      NavAside,
      Edit
    }
  }
</script>
<style>
  .article-list {
    width: 230px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 90px;
    border-right: 1px solid #f1f1f1;
    z-index: 1;
    background-color: #fff;
  }
  .article-instructions {
    height: 65px;
    line-height: 65px;
    padding-left: 20px;
    border-bottom: 1px solid #f1f1f1;
    color: #666;
  }
  .article-instructions>img {
    vertical-align: middle;
    cursor: pointer;
  }
  .article-instructions>span {
    width: 150px;
    display: inline-block;
  }
  .article-list>ul {
    overflow: auto;
    padding-left: 22px;
    padding-right: 22px;
  }
  .article-list>ul>li {
    border-bottom: 1px solid #f1f1f1;
    padding: 5px 10px;
  }
  .article-list>ul>li>h3 {
    width: 170px;
    padding: 5px 0;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .article-list>ul>li>p {
    font-size: 12px;
    color: #b3bbbc;
  }
</style>
