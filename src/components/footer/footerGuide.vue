<template>
  <div id="footerGuide">
    <section>
      <section class="footer-item"><i class="el-icon-eleme"></i><span>外卖</span></section>
      <section class="footer-item"><i class="el-icon-discover"></i><span>搜索</span></section>
      <section class="footer-item"><i class="el-icon-tickets"></i><span>订单</span></section>
      <section class="footer-item"><i class="el-icon-user"></i><span>我的</span></section>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#footerGuide{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    
}
.footer-item{
  width:23%;
  display:inline-flex;
  color: #666;
    flex-direction: column;
    align-items: center;
}
.footer-item span{
  font-size:.45rem;
}
.footer-item span i{
  width: .8rem;
    height: .8rem;
    margin-top: .3rem;
}
</style>