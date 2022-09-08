<template>
    <img :src="musicList.al.picUrl" alt="" class="bgImg">
    <div>
        <!-- 顶部 -->
        <div class="detailTop">
            <!-- 顶部左边 -->
            <div class="detailTopLeft">
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-zuojiantou"></use>
                </svg>
                <div class="topLeftWord">
                    <Vue3Marquee style="color:white">
                        {{musicList.al.name}}
                    </Vue3Marquee>
                
                    <span v-for="item in musicList.ar" :key="item" class="alName">
                        {{item.name}}
                    </span>
                    <svg class="mIcon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
                   
                    
                </div>

            </div>
            <!-- 顶部右边 -->
            <div class="detailTopRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>

            </div>
        </div>
    </div>
</template>

<script>
    import { Vue3Marquee } from 'vue3-marquee'
    import 'vue3-marquee/dist/style.css'

    export default {

        mounted(){
            console.log(this.musicList);
        },
        props:['musicList'],
       components:{
        Vue3Marquee,
       }
    }
</script>

<style>
    .bgImg{
        width: 100%;
        height:100%;
        position:absolute;
        z-index: -1;
        filter: blur(80px);
    }
    .detailTop{
        width: 100%;
        height: 1rem;
        display: flex;
        padding:0.2rem;
        justify-content: space-between;
        align-items: center;
       
    }

    .detailTopLeft{
        display: flex;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .topLeftWord{
        height: 100%;
        padding: 0px;
        margin-left: 10px;
    
    }
    .alName{
        font-size:14px;
        color:#999;
    }

    .detailTopRight{
        margin: 0.2rem;
    }
    .mIcon{
        height: 12px;;
        width:15px;
        fill:#999
    }


</style>