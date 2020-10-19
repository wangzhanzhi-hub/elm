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
       <nav> 
           <div v-if="foodType.length"><div>
              <div v-for="item in foodType" :key="item.index" class="swiper-slide">  
                  <router-link :to="{path:'/food'}"  v-for="item1 in item" :key="item1.id" >
            <figure>
              <img :src="imgurl+item1.image_url" >
              <figcaption>{{item1.title}}</figcaption></figure>
                </router-link>
               </div></div>
               </div>
       </nav>
       
       
   </div>
</template>

<script>
import headerTop from "../../components/header/head"
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
        headerTop
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
.swiper-slide{
    font-size:.65rem;
}
figure{
       font-size:.65rem;
}
figure img{
   font-size:.65rem;
}
</style>