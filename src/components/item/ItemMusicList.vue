<template>

    <div class=itemMusicList>
        <div class="title">
            <div class="titleLeft">
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <span class="middleFont">播放全部</span>
                <span class="miniFont" v-if="playlist.tracks != null ">(共{{playlist.tracks.length}}首)</span>
    
            </div>
            <div class="titelRight">
    
                <van-button round type="success" color="red">+收藏({{playlist.subscribedCount}})</van-button>
    
            </div>
        </div>
        <div class="itemList" v-for="(item,i) in playlist.tracks" :key="i">
            
            <!-- 左边部分 -->
            <div class="itemListLeft" @click="playMusic(i)">
                <span class="leftSpan">{{ i + 1}}</span>
                <div>
                    <p>{{item.name}}</P>
                    <span v-for="(item1,index) in item.ar" :key="index" class="arName">
                        {{item1.name}}
                    </span>
                </div>
            </div>

            <!-- 右边部分 -->
            <div class="itemListRight">
                <svg class="icon" aria-hidden="true" v-if='item.mv != 0'>
                    <use xlink:href="#icon-shipinbofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-24gl-ellipsisVertical"></use>
                </svg>



            </div>
           
        </div>

    </div>
    
</template>

<script>
import { mapMutations } from 'vuex'

    export default {
        setup(props){
            console.log(props)
        },
        props:['playlist'],

        methods:{
            playMusic: function(i){
                this.updatePlayList(this.playlist.tracks)
                this.updatePlayListIndex(i)

            },

            ...mapMutations(['updatePlayList','updatePlayListIndex'])
        }
    }
</script>

<style scoped>

    .itemMusicList{
        width:100%;
        height:10rem;
        background-color:#fff;
        
        border-top-left-radius:20px;
        border-top-right-radius:20px
    }
    .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
       
        }
    .titleLeft,.titelRight{
       
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .2rem;
    }

    .middleFont{
        font-weight:666;
    }

    .miniFont{
        font-size:12px;
        color: gray;
    }

    .itemList{
        display:flex;
        justify-content:space-between;
        margin:0 0.2rem;
    }

    .itemListLeft{
        display:flex;
    }

    .leftSpan {
        margin:.2rem;
        color:gray
    }
    .arName {
        font-size:12px;
        color:gray;
    }
    .icon{
        width:.5rem;
    }

    

</style>