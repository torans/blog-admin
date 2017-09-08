
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
        <Articles></Articles>
      </ul>
    </div>
    <div class="router-view">
      <div class="articel-edit-wrap">
        <div class="article-title">
          <input type="text" placeholder="文章标题">
        </div>
        <div class="article-toolbar">
          <div class="label">
          <span>
            <div class="el-popover" style="width: 150px; display: none;">
              <ul class="tag-list-wrap"><li>yyy</li>
                <li>的说法都是</li><li>你好</li>
                <li>不是日本</li>
                <li>而我</li>
              </ul>
            </div>
          </span>
            <Icon type="pricetags" style="font-size: 30px;"></Icon>
          </div>
          <div class="action-button">
            <Button>保存草稿</Button>
            <Button type="primary">发布文章</Button>
          </div>
        </div>
        </div>
        <div class="article-editor">
          <Edit></Edit>
        </div>
      </div>
    </div>
</template>
<script>
  import NavAside from '../../common/NavAside.vue'
  import Edit from '../../common/Edit.vue'
  import Articles from '../../common/Articlelists.vue'
  export default {
    data () {
      return {}
    },
    components: {
      NavAside,
      Edit,
      Articles
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
  .article-editor{
    padding-right: 1vw;
  }
  .article-instructions {
    height: 65px;
    line-height: 65px;
    padding-left: 20px;
    border-bottom: 1px solid #f1f1f1;
    color: #666;
    font-size: 20px;
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
  .articel-edit-wrap {
    width: 100%;
    height: 100%;
  }
  .article-title {
    height: 45px;
    border-bottom: 1px solid #f1f1f1;
  }
  .article-title>input {
    border: none;
    outline-style: none;
    width: 97%;
    height: 43px;
    padding-left: 10px;
    font-size: 20px;
  }
  .article-toolbar, .label {
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
  }
  .label, .label>img {
    vertical-align: middle;
  }
  .el-popover {
    position: absolute;
    background: #fff;
    min-width: 150px;
    border-radius: 2px;
    border: 1px solid #d1dbe5;
    padding: 10px;
    z-index: 2000;
    font-size: 12px;
  }
  .tag-list-wrap {
    border: 1px solid #e0e6ed;
    padding: 5px;
    max-height: 150px;
    overflow: auto;
  }
  .tag-list-wrap>li {
    margin: 2px;
    padding: 3px;
    cursor: pointer;
    height: 30px;
    line-height: 36px;
  }
  .label>img {
    cursor: pointer;
  }
  .action-button {
    min-width: 120px;
    float: right;
    padding-right: 20px;
    margin-top: -60px;
  }

</style>
