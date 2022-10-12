<template>
   <div class="FooterMusic">

    <!-- 底部左边部分 -->
    <div class="footerLeft" @click="updateDetailShow" >
        <img :src="playList[playListIndex].al.picUrl" alt="" class="footerImg">
        <div>
            <div>
                {{playList[playListIndex].name}}
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
        <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow" :addDuration="addDuration" />
    </van-popup>

   </div>
</template>

<script>

    import { mapMutations, mapState } from 'vuex'
    import MusicDetail from '@/components/item/MusicDetail.vue'

    export default {
        data(){
            return{
                interVal:0
            }
        },
        computed:{
            ...mapState(['playList','playListIndex','isbtnShow','detailShow'])//解构
        },
        mounted(){
            console.log(this.$refs);
            this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
            this.updateTime()

        },
        updated(){

            this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
            this.addDuration()

        },
        methods:{
            play:function(){

                //判断是不是在播放
                if(this.$refs.audio.paused){
                    this.$refs.audio.play()
                    this.updateIsbtnShow(false)
                    this.updateTime()//播放则调用函数进行传值

                }else{
                    this.$refs.audio.pause()
                    this.updateIsbtnShow(true)
                    clearInterval(this.interVal)//暂停则清楚定时器
                }
            },
            addDuration:function(){
                this.updateDuration(this.$refs.audio.duration)

            },
            updateTime:function(){
                this.interVal=setInterval(()=>{
                    this.updateCurrentTime(this.$refs.audio.currentTime)
                    
                },1000)
            },


            ...mapMutations(['updateIsbtnShow','updateDetailShow','updateCurrentTime','updateDuration'])//解构
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
        },
        components:{
            MusicDetail
        }
    }
</script>

<style scoped>
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