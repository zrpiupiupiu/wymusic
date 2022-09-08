<template>
    <img :src="musicList.al.picUrl" alt="" class="bgImg">
    
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

    <div class="detailContent">
        <img src="@/assets/needle-ab.png" alt="" class="img_needle">
        <img src="@/assets/circle.png" alt="" class="img_circle">
        <img :src="musicList.al.picUrl" alt="" class="img_core">
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

    .detailContent{
        width: 100%;
        height: 9rem;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .img_needle{
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin: 0 0 ;
        transform: rotate(-10deg);
        transition: all 2s;
    }
    .img_circle{
        width: 5rem;
        height: 5rem;
        position: absolute;
        bottom: 1.8rem;
        z-index: -1;
        left: 20%;

    }
    .img_core{
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        position: absolute;
        bottom: 2.74rem;
        left: 32%;
    }


</style>