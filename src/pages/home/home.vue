<template>
<div class="home">
    <header-top signUp="home"> 
    <span slot="logo" class="head-logo">ele.me</span>
    </header-top>
    <nav class="city-nav">
        <div class="city_tip">
            <span>当前定位城市</span>
            <span>如果定位不准确，请在城市列表中选择</span>
        </div>
        <router-link :to="{path:'/city/'+guesscityId}" class="guess_city">
         <span>{{guesscity}}</span>
         <i class="el-icon-arrow-right"></i>
         </router-link>
       </nav>
       <section class="hotcity">
           <h4 class="hotcity_title">热门城市</h4>
           <ul class="hotcity_tip"><router-link tag="li"   v-for="item in hotcity" :key="item.id" :to="{path:'/city', params: {cityid:item.id}}">
           {{item.name}}
           </router-link></ul>
       
       </section>
       <section>


           <ul>
               <li  class="grouptitle" v-for="(value, key, index) in allcity" :key="key">
                <h4>{{key}} <span v-if="index==0">(按字母排序)</span></h4>
             
                <ul  class="group-ul">
                   <router-link :to="{path:'/city/'}" v-for="item in value" :key="item.id"
                   class="group" tag="li">
                       {{item.name}}
                    </router-link>
                    
                </ul> 
              </li>
          </ul>  
       </section>
</div>
</template>

<script>
import headerTop from "../../components/header/head"

export default {
    data(){
        return {
            guesscity:"",
            guesscityId:0,
            hotcity:{},
            allcity:{},
            
        }
    },
    created(){
        this.getdata();
        this.gethotdata();
        this.getalldata();
    },
    name:'home',

    methods:{
     getdata(){
        this.$axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"guess"}})
        .then(res=>{
           this.guesscity=res.data.name;
           this.guesscityId=res.data.id;
           console.log(res);
           console.log(this.guesscity)
        })
        .catch((err)=>{console.log(err)})
     },
     gethotdata(){
          this.$axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"hot"}})
        .then(res=>{
          this.hotcity=res.data;
          console.log(typeof this.hotcity)
           console.log(res.data);
           
        })
        .catch((err)=>{console.log(err)})
     },
     getalldata(){
         this.$axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"group"}})
        .then(res=>{
          
           this.allcity=res.data;
       
           
        })
        .catch((err)=>{console.log(err)})
     }
    },
components:{
    headerTop,
}
}
</script>

<style>
.head-logo{
    color:#ffffff;
    position:absolute;
    left:.4rem;
    font-size:.7rem;
    font-weight:400;
    top:50%;
    transform: translateY(-50%);
}
.city-nav{
    padding-top: 2.35rem;
    margin-bottom:.4rem;
}
.city_tip{
   padding:0 .45rem;
   color:#666;
   font-size:.55rem;
   display:flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid #e4e4e4;
}
.guess_city{
  height: 1.8rem;
    text-decoration: none;
    
    border-bottom: 2px solid #e4e4e4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .75rem;
    padding: 0 .45rem;
}
.guess_city >span{
    color:#3190e8;
}
.guess_city >i {
       width:.6rem;
       height:.6rem;
       color: #999
    
}
ul{
    list-style: none;
    
}
.hotcity_tip{
overflow:hidden;
}
li{
    color:#3190e8;
    float:left;
    width: calc(25% - .065rem);
    height: 1.75rem;
    font-size: .55rem;
        display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
}
.hotcity{
    margin-bottom:.4rem;
}
.hotcity_title{
border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-indent: .45rem;
    font-size: .55rem;
    font-weight: 400;
    height: 1.85rem;
    color: #666;
    display: flex;
    align-items: center;
}
.grouptitle{
    width:100%;
}
.grouptip{
    height:1.75rem;
}
.group-ul{
    width:100%;
}
.group{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>