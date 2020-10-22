<template>
   <div>
       <header-top sign-up="msite">
       <router-link slot="search" :to="{path:'/search/'}">
       <i class="el-icon-search"></i>
       </router-link>
       <router-link  slot="msite_title" :to="{path:'/home'}">
       <span class="site_title"> 南花园</span>
       </router-link>
       </header-top>
       <nav class="swiper-nav"> 
           <div v-if="foodType.length" >
               <div class="swiper">
              <div v-for="item in foodType" :key="item.index" class="swiper-slide">  
                  <router-link :to="{path:'/food'}"  v-for="item1 in item" :key="item1.id" class="swiper-side-group">
            <figure>
              <img :src="imgurl+item1.image_url" >
              <figcaption>{{item1.title}}</figcaption></figure>
                </router-link>
               </div></div>
               </div>
       </nav>
    <div class="shop-list">
        <header >
            <i class="el-icon-platform-eleme"></i>
        <span class=shop-header-title>附近商家</span>


        </header>
    
    </div>
    <footer-guide> </footer-guide>   
   </div>
</template>

<script>
import headerTop from "../../components/header/head"
import footerGuide from "../../components/footer/footerGuide"
export default {
    created(){
   

    this.geohash=this.$route.query.geohash;
 
      this.$axios.get("https://elm.cangdu.org/v2/index_entry",{params: this.geohash,
	group_type: '1',
	'flags[]': 'F'
    }).then((res)=>{
        console.log(res);
        console.log(res.data.length);
        let footarr=res.data;//因为splice会修改原数组，所以把res.data保存到新数组中
        let foodarr=[];
       
        for(let i=0,j=0 ; i<=res.data.length;i+=8,j++)
        {
           foodarr[j]=footarr.splice(0,8);//每次截取八位到新数组中
           console.log(j);
        }
        this.foodType=foodarr;
      console.log(foodarr);
    }).catch(err=>{
        console.log(err);
    })        
    },
   
    data(){
       return {
           geohash:"",
           foodType:[],
           imgurl:'https://fuss10.elemecdn.com', //图片域名地址
    }},
    components:{
        headerTop,
        footerGuide
    },
    methods:{
        
}
    
}
</script>

<style>
.el-icon-search{
position: absolute;
    left: .5rem;
    top: 50%;
    transform: translateY(-50%);
    color: #ffffff;}
.site_title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #ffffff;
    font-size: .8rem;
}
.swiper-nav{
    border-bottom:.025rem solid #e4e4e4;
}
.swiper{
height: 10.6rem;
overflow: hidden;
margin-top:2.1rem;
padding-bottom: .6rem;
}
.swiper-slide{
       font-size:2px;
}
.swiper-side-group{
 width: 25%;
    padding: .3rem 0;
    display: inline-block;
    text-align: center;
    text-decoration: none;
}
figure{
       font-size:.65rem;
}
figcaption{
    font-size: .55rem;
    color: #666;
    
}
figure img{
   margin-bottom: .3rem;
    width: 3rem;
    height:3rem;
}
.el-icon-platform-eleme{
    color:#999;
    margin-left: .6rem;
    vertical-align: middle;
    width: .6rem;
    height: .6rem;
}
.shop-list{
    margin-top: .4rem;
    background-color: #fff;
    border-top: .025rem solid #e4e4e4;
    font-size:.55rem;
    
}
.shop-header-title{
    color:#999;
    vertical-align: middle;
}
</style>