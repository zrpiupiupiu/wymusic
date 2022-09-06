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

    <div class="itemMusicMiddle">

        <img :src="playlist.coverImgUrl" alt="" class="miniBG">

        <div class="middleCount">
            <p>
                <span class="stressFont">{{playlist.name}}</span>

            </p>
           
            <!-- playlist.creator 为空的时候,不去渲染下面的ui -->
            <p class="creator" v-if="playlist.creator != null " >
                <img :src="playlist.creator.avatarUrl" alt="" class="creatorPhoto">
                <span class="creatorName">{{playlist.creator.nickname}}</span>
                <svg class="miniIcon" aria-hidden="true">
                    <use xlink:href="#icon-youjiantou"></use>
                </svg>
            </p>

            <div class="description">
                <div class="details">
                    <span>{{playlist.description}}</span>
                </div>
                
               
                    <svg class="miniIcon" aria-hidden="true">
                        <use xlink:href="#icon-youjiantou"></use>
                    </svg>
            </div>
        </div>
    </div>

    <div class="itemMusicFoot">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouye"></use>
            </svg>
            <span>{{playlist.commentCount}}</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{playlist.shareCount}}</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai"></use>
            </svg>
            <span>下载</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-show_duoxuan"></use>
            </svg>
            <span>多选</span>
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
        filter: blur(40px);

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
        color: white;
    }

    .itemMusicMiddle{
        width: 100%;
        height: 150px;
        display: flex;

    }

    .miniBG{
        width: 40%;
        height: 80%;
        align-items: center;
        margin: 10px;
        border-radius: 10px;
        margin: 3px;
    }
    .stressFont{
        height: 25%;
        font-size: 18px;
        font-weight: 666;
        font-style: italic;
        color: white;
    }

    .creator{
        height: 20%;

        display: flex;
        align-items: center;
    }
    .creatorName{
        color: whitesmoke;
    }
   
    .creatorPhoto{
        width: 25px;
        height: 25px;
        border-radius: 15px
    }
    .miniIcon{
        width: 15px;
        height:60px;
        
    }
    .description{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
    }

    .details{
        color: gainsboro;
        height: 45%;
        width: 85%;
        font-size: 0.3rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
    }

    .itemMusicFoot{

        margin-top: 10px;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .iconItem{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    
    }
   

    
   



    
</style>