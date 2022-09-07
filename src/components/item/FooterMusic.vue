<template>
   <div class="FooterMusic">

    <!-- 底部左边部分 -->
    <div class="footerLeft">
        <img :src="playList[playListIndex].al.picUrl" alt="" class="footerImg">
        <div>
            {{playList[playListIndex].al.name}}
        
        </div>
    </div>

    <!-- 底部右边部分 -->
    <div class="footerRight">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-24gl-playCircle"></use>
        </svg>
        <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-24gl-playlistMusic"></use>
        </svg>
    </div>


   </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        computed:{
            ...mapState(['playList','playListIndex'])
        }
    }
</script>

<style>
    .FooterMusic{
        width: 100%;
        height: 1.1rem;
        background: white;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #999;
        display: flex;
        padding: 3px ;
        justify-content: space-between;
    }
    .footerLeft {
        width: 55%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-content: center;
    }

    .footerImg{
        width: 1rem;
        height:1rem;
        border-radius: 50%;
    }
    .footerRight{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    
    }
</style>