<style>
  body {
    height: 100vh;
  }
  html{ height:100%}
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;

    /*min-height: 1000px;*/
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
    /*min-height: 834px;*/
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left{
    background: #464c5b;
    height: 100vh;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
      <Menu active-name="1" theme="dark" width="auto">
        <div class="layout-logo-left"></div>
        <MenuItem name="1">
          <Icon type="ios-navigate" :size="iconSize"></Icon>
          <span class="layout-text">选项 1</span>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad" :size="iconSize"></Icon>
          <span class="layout-text">选项 2</span>
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics" :size="iconSize"></Icon>
          <span class="layout-text">选项 3</span>
        </MenuItem>
      </Menu>
      </Col>
      <Col :span="spanRight">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
      </div>
      <div class="layout-content">
        <div class="layout-content-main">
          <router-view></router-view>
        </div>
      </div>
      <div class="layout-copy">
        2017 &copy; TalkingData
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 4,
        spanRight: 20
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 4) {
          this.spanLeft = 1
          this.spanRight = 23
        } else {
          this.spanLeft = 4
          this.spanRight = 20
        }
      }
    }
  }
</script>
