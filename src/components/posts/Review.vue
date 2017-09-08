
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
    <div class="router-view">
      <div class="artivcle-preview">
        <div class="">
          <div class="article-title">请输入文章标题</div>
          <div class="article-time">2017-09-22 22:22:22</div>
          <div class="content">
            <p>快来开始写博客吧asdsdad快来开始写博客吧asdsdadsa快来开始写博客吧asdsdadsa快来开始写博客吧asdsdadsa快来开始写博客吧asdsdadsa快来开始写博客吧asdsdadsa快来开始写博客吧asdsdadsa快来开始写博客吧asdsdadsasa</p>
            <p>快来开始写博客吧asdsdadsa</p>
    </div>
          <div class="article-preview-footer">
            <Button type="primary" shape="circle" size="large">修改文章</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import NavAside from '../../common/NavAside.vue'
  import Edit from '../../common/Edit.vue'
  export default {
    name: 'review',
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
  .router-view {
    position: relative;
    height: 100%;
    margin-left: 321px;
  }
  .artivcle-preview {
    padding: 15px;
  }
  .article-title {
    font-size: 22px;
    cursor: pointer;
    border-left: 3px solid #a0a0a1;
    padding-left: 10px;
    color: #2c3e50;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .article-time{
    font-size: 14px;
    padding: 20px 0;
  }
  .content{
    font-size: 16px;
    width: 660px;
  }
  .article-preview-footer {
    position: fixed;
    right: 20px;
    bottom: 30px;
  }
</style>
