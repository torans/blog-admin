<style>
  .left-sidebar {
    width: 90px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    border-right: 1px solid #f1f1f1;
    background-color: #f8f8f8;
  }
  .admin-logo {
    width: 70px;
    height: 80px;
    margin: 0 auto;
    margin-top: 20px;
    border-bottom: 1px solid #eaeaea;
  }
  .admin-logo>img {
    overflow: hidden;
    display: block;
    margin: 0 auto;
  }
  .article-logo {
    height: 100px;
    margin-top: 50px;
  }
  .article-logo>img, .label-logo>img, .use-logo>img {
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
  .label-logo, .use-logo {
    height: 100px;
    margin-top: 20px;
  }

</style>
<template>
  <div class="left-sidebar">
    <div class="admin-logo">
      <img src="https://weiweiblog.herokuapp.com/dist/logo.png?bb87d143860c9d3612ffd46280f1b632" width="40" height="40">
    </div>
    <div class="article-logo">
      <img src="https://weiweiblog.herokuapp.com/dist/article.png?e3d39e12c2eb189c3cf39a41baec96c0" height="50" width="50">
    </div>
    <div class="label-logo">
      <img src="https://weiweiblog.herokuapp.com/dist/adminlabel.png?5a5d04d7b39478ef8ab2b560eeb5e399" height="50" width="50">
    </div>
    <div class="use-logo">
      <img src="https://weiweiblog.herokuapp.com/dist/use.png?b159746d31582b65e81ace8aef47b3ae" height="50" width="50">
    </div>
  </div>
</template>
<script>
  import MavonEditor from '../common/Edit.vue'
  export default {
    data () {
      return {
        spanLeft: 1,
        spanRight: 23
      }
    },
    props: {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 新增 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true // 保存（触发events中的save事件）
      }
    },
    components: {
      MavonEditor
    }
  }
</script>
