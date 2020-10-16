<template>
<div id="header">
  <slot name="logo"></slot>
  <section >
    <i class="el-icon-arrow-left" v-if="goback" @click="this.$router.go(-1)"></i>
  </section>
 <router-link :to="{ path:'/login'}" v-if=signUp><span class="login" >登录/注册</span ></router-link>
 <span class="head_title" v-if=headTitle>{{headTitle}}</span>
 <slot name="changecity"></slot>
</div>
</template>

<script>
export default {
    props:["signUp","headTitle","goback"],
}
</script>

<style>
 #header{
   position:fixed;
   left:0;
   top:0;
   background-color: #3190e8;
   width:100%;
   height:1.95rem;
   z-index:100;
 }
 
 .login{
   position:absolute;
   color:#ffffff;
   right:.55rem;
   font-size:.7rem;
   position: absolute;
    top: 50%;
    transform: translateY(-50%);
 }
 .head_title{
   color:#ffffff;
    font-size: .8rem;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
 }
 .el-icon-arrow-left{
   width: .6rem;
    height: 1rem;
    color: #ffffff;
    line-height: 2.2rem;
    margin-left: .4rem;
}
 
</style>