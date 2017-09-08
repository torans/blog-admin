<template>
  <div class="login">
    <div class="form">
      <Card style="padding: 30px;margin-top: 60px;">
        <div style="text-align:center">
          <h1>{{ msg }}</h1>
          <div class="inputs">
            <Input v-model="username" size="large" placeholder="UserName" class="username"></Input>
            <Input v-model="password" size="large" type="password" placeholder="PassWorld" class="password"></Input>
          </div>
          <Button type="success"  size="large" shape="circle" long>登 录</Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '后台管理系统',
      username: '',
      password: ''
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
    margin-top: 100px;
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
