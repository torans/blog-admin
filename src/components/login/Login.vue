<template>
  <div class="login">
    <div class="form">
      <Card style="padding: 30px;margin-top: 60px;">
        <div style="text-align:center">
          <h1>{{ msg }}</h1>
          <div class="inputs">
            <Input v-model="username" size="large" placeholder="UserName" class="username"></Input>
            <Input v-model="password" size="large" type="password" placeholder="PassWorld" class="password" @keyup.13='login()'></Input>
          </div>
          <Button type="success"  size="large" shape="circle" long @click="login()">登 录</Button>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data () {
      return {
        msg: '后台管理系统',
        username: '',
        password: '',
        notice: '未知错误',
        apiUrl: 'http://hao.shetu.cc/api/user/login'
      }
    },
    methods: {
      login: function () {
        var _this = this
        if (_this.username === '') {
          _this.notice = '用户名不能为空'
          _this.error()
          return false
        }
        if (_this.password === '') {
          _this.notice = '密码不能为空'
          _this.error()
          return false
        }
        axios.post(_this.apiUrl, {
          username: _this.username,
          password: _this.password
        })
          .then(function (response) {
            var res = response.data
            _this.notice = res.msg
            if (res.error === 1) {
              _this.error()
              return false
            }
            localStorage.setItem('sessionId', res.token)
            _this.success()
            //  跳转到首页
//            router.push({path: 'register', query: {plan: 'private'}})
            _this.$router.push('/post/')
          })
      },
      success () {
        this.$Message.success(this.notice)
      },
      warning () {
        this.$Message.warning(this.notice)
      },
      error () {
        this.$Message.error(this.notice)
      }
    }
  }
</script>

<style>
  body {
    background: #f1f1f1!important;
    margin: 0;
    padding: 0;
    font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
  }
  .login{
    margin-top: 10vh;
  }
  .form{
    width: 420px;
    margin: 0 auto;
    padding: 30px;
  }
  .inputs{
    margin: 30px 0;
  }
  .inputs .username{
    margin-bottom: 20px;
  }
</style>
