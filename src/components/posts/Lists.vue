<template>
  <div class="posts">
    <nav-aside></nav-aside>
    <div class="article-list">
      <div class="article-instructions">
        <Icon type="ios-list"></Icon>
        <span>文章列表</span>
        <Icon type="plus-round"></Icon>
      </div>
      <ul style="max-height: 782px;">
        <li>
          <h3 class="articlePreview-title-publish">
            请输入文章标题
          </h3>
          <p>2017-07-28 08:27:29</p>
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
