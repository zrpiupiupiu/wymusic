<template>
    <div class="itemMusicTop">
        <img :src="playlist.coverImgUrl" alt="" class="backgroundImg">
        <div class="itemLeft">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <span class="font">歌单</span>
        </div>

        <div class="itemRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        setup(props){
            console.log(props)

        },
        props:['playlist'],
    }
</script>

<style>
    .itemMusicTop{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
       
        position: relative;
    }

    .backgroundImg{
        width: 100%;
        height: 11rem;
        position: fixed;
        z-index: -1;
        filter: blur(30px);

    }

    .itemLeft{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .2rem;

    }

    .itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .2rem;

    }

    .font {
        font-size: 26px;
        color:white;
    }

    .icon{
        fill: white;
    }

    
</style>