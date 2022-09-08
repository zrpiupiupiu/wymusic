<template>
   <div class="FooterMusic">

    <!-- 底部左边部分 -->
    <div class="footerLeft" @click="updateDetailShow" >
        <img :src="playList[playListIndex].al.picUrl" alt="" class="footerImg">
        <div>
            <div>
                {{playList[playListIndex].al.name}}
            </div>
          
            <span class="tip">(左右滑动可以切换歌曲哦)</span>
        
        </div>
    </div>

    <!-- 底部右边部分 -->
    <div class="footerRight">
        <svg class="icon" aria-hidden="true" v-if="isbtnShow" @click="play">
            <use xlink:href="#icon-24gl-playCircle" ></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-else @click="play">
            <use xlink:href="#icon-bofang_" ></use>
        </svg>
        <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-24gl-playlistMusic"></use>
        </svg>
    </div>

    <audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`" autoplay="autoplay" ></audio>

    <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%',width:'100%' }">
        弹出层内容
    </van-popup>

   </div>
</template>

<script>

    import { mapMutations, mapState } from 'vuex'

    export default {
        computed:{
            ...mapState(['playList','playListIndex','isbtnShow','detailShow'])//解构
        },
        mounted(){
            console.log(this.$refs);
        },
        methods:{
            play:function(){

                //判断是不是在播放
                if(this.$refs.audio.paused){
                    this.$refs.audio.play()
                    this.updateIsbtnShow(false)

                }else{
                    this.$refs.audio.pause()
                    this.updateIsbtnShow(true)
                }
            },

            ...mapMutations(['updateIsbtnShow','updateDetailShow'])//解构
        },
        watch:{
            playListIndex:function(){//监听,如果下标发生改变,就自动播放音乐
                // if(this.$refs.audio.paused){
                //     this.$refs.audio.play()
                //     this.updateIsbtnShow(false)
                // }else{
                //     this.$refs.audio.play()

                // }

                // this.$refs.autoplay=true;
                if(this.$refs.audio.paused){//判断,如果本身为暂停状态,还需要改变图标
                    this.updateIsbtnShow(false)
                }
            },
            playList:function(){
                if(this.isbtnShow){
                    // this.$refs.audio.play()
                     this.updateIsbtnShow(false)

                    
                

                }
            }
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
    .tip{
        font-size:12px;
        color:gray;
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