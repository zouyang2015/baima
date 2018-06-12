<template>
  <div class="baima-container">
    <advert></advert>
    <div class="login-container">
      <language></language>
      <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"
               label-position="left">
        <el-form-item prop="username">
          <el-input name="username" type="text" v-model="loginForm.username" :placeholder="$t('login.telOrEmail')"/>
        </el-form-item>
      </el-form>
    </div>
  </div>

  <!--<el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm"-->
  <!--label-position="left">-->
  <!--<h3 class="title">学员模拟系统</h3>-->
  <!--<el-form-item prop="username">-->
  <!--<span class="svg-container svg-container_login">-->
  <!--<i class="icon-user"></i>-->
  <!--</span>-->
  <!--<el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username"/>-->
  <!--</el-form-item>-->
  <!--<el-form-item prop="password">-->
  <!--<span class="svg-container">-->
  <!--<i class="icon-mima"></i>-->
  <!--</span>-->
  <!--<el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"-->
  <!--autoComplete="on"-->
  <!--placeholder="password"></el-input>-->
  <!--<span class="show-pwd" @click="showPwd">-->
  <!--<i class="icon-eye-off" v-if="pwdType"></i>-->
  <!--<i class="icon-eyeopen" v-else></i>-->
  <!--</span>-->
  <!--</el-form-item>-->
  <!--<el-form-item>-->
  <!--<el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">-->
  <!--Sign in-->
  <!--</el-button>-->
  <!--</el-form-item>-->
  <!--</el-form>-->
</template>

<script>
import { isvalidUsername } from 'common/js/validate'
import Advert from 'base/advert'
import Language from 'base/language'

export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: 'admin'
      },
      loginRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePass}]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log(111)
          this.loading = true
          //          this.$store.dispatch('Login', this.loginForm).then(() => {
          this.loading = false
          this.$router.push({path: '/'})
          //          }).catch(() => {
          //            this.loading = false
          //          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  components: {
    Advert,
    Language
  }
}


</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "common/styles/variable.scss";

$dark_gray: #889aa4;
$light_gray: #eee;

.baima-container {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  .login-container {
    flex: 1;
  }
  .login-form {
    position: absolute;
    left: 50%;
    right: 0;
    top: 50%;
    width: 366px;
    margin: 0 auto;
  }
}

.login-container {
  /*position: fixed;*/
  /*height: 100%;*/
  /*width: 100%;*/

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
