<template>
    <div class="musicList">

        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>

        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators="false">
                
                <van-swipe-item v-for="item in musicList" :key="item">
                    <router-link :to="{path:'/ItemMusic',query:{id:item.id}}">
                    <img :src="item.picUrl" alt="">
                    <span class=playCount>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                        <span class="name">{{item.name}}</span>
                        <!-- {{item.playCount}} -->
                    </span>
                    </router-link>
                </van-swipe-item>
                
            </van-swipe>
        </div>
    </div>
      
      
</template>


<script>
    // eslint-disable-next-line no-unused-vars
    import axios from 'axios'
    import { getMusicList } from '@/request/api/home';
    import {reactive, onMounted } from 'vue';

    export default {
        setup() {
            const state= reactive({
                musicList:[] 
            });
            // function changeCount(num) {
            //     if(num>=100000000){
            //         return(num/100000000).toFixed(1)+'亿';
            //     }else if(num>=10000){
            //         return(num/10000).toFixed(1)+'万';
            //     }
            // }

        
            onMounted(async ()=>{
              
                let res=await getMusicList();
                
                console.log(res)
               state.musicList =res.data.result;
               
              

            })

            return  (state);
        },
    };
    // import { getMusicList } from '@/request/api/home.js';       
    // export default {
    //     data(){
    //         return {
    //             musicList:[]
    //         }
    //     },

    //     methods: {
    //         async getGeDan(){
    //             let res=await getMusicList()
    //             console.log(res)
    //             this.musicList=res.data.result
    //         }
    //     },

    //     mounted(){
    //         this.getGeDan()
    //     }
    // },

</script>

<style scoped>
    .musicList {
        width: 100%;
        height: 5rem;
        padding: 0.2rem;
        
    }
    .musicTop{
        width: 100%;
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        
    }

    .title {
        font-size: 0.4rem;
        font-weight: 900;
    }
    .more {
        border: 1px solid #ccc;
        text-align: center;
        line-height: 0.6rem;/*设置垂直居中*/
        padding: 0 0.2rem;
        border-radius: 0.4rem;
    }
    .musicContent {
        width: 100%;
        height: 250px;
    
    }
    .my-swipe {
        height: 100%;
     


    }

    .img{
        width:33%;
        height:0.1rem;
      
    }
    .name {
        font-size:14px;
    }
    .playCount{
        display: flex;
    }


</style>


