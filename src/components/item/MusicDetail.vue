<template>
    <img :src="musicList.al.picUrl" alt="" class="bgImg">
    
    <!-- 顶部 -->
    <div class="detailTop">
        <!-- 顶部左边 -->
        <div class="detailTopLeft">
            <svg class="icon" aria-hidden="true"  @click="backHome" >
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
    <!-- 中间 -->
    <div class="musicLyric" ref="musicLyric" v-show="isLyricShow" @click="isLyricShow=false">
        <!-- {{lyricList}}
        {{lyric}} -->
       <p v-for="item in lyric" :key="item" :class="{lyricActive:(currentTime*1000>=item.time && currentTime*1000<item.pre)}" class="lyrics">
        {{item.lrc}}
       </p>
    </div>
    <div class="detailContent" v-show="!isLyricShow">
        <img src="@/assets/needle-ab.png" alt="" class="img_needle" :class="{img_needle_active:!isbtnShow}">
        <img src="@/assets/circle.png" alt="" class="img_circle">
        <!-- <img :src="musicList.al.picUrl" alt="" class="img_core" :class="{img_core_paused:isbtnShow,img_core_active:!isbtnShow}"> -->
        <img :src="musicList.al.picUrl" alt="" class="img_core" :class="isbtnShow?'img_core_paused':'img_core_active'" @click="isLyricShow=true">
        <!-- 两种写法都可以,感觉三目更易懂233 -->

        
    </div>
    <!-- 底部 -->
    <div class="detailFooter">
        <div class="footerTop">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-aixin"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-xiazai1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-changpian2-copy"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-31xiaoxi"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-gengduo-shuxiang"></use>
            </svg>

        </div>
        <div class="footerMiddle">
            <input type="range" class="range" min="0" max="duration" v-model="currentTime" step="0.03">

        </div>
        <div class="footer">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-icon-"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                <use xlink:href="#icon-shangyishoushangyige"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-if="isbtnShow"  @click="play">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else @click="play">
                <use xlink:href="#icon-bofang_" ></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-24gl-playlistMusic"></use>
            </svg>


        </div>
    </div>


    
</template>

<script>
    import { Vue3Marquee } from 'vue3-marquee'
    import 'vue3-marquee/dist/style.css'
    import { mapMutations, mapState } from 'vuex';

    export default {
        date(){
            return{
                isLyricShow:false
            }
        },
        computed:{
            ...mapState(['lyricList','currentTime','playListIndex','playList','duration']),
            lyric:function(){
                 let arr;
                if(this.lyricList.lyric){
                    // eslint-disable-next-line no-unused-vars
                    arr=this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
                        let min=item.slice(1,3);
                        let sec=item.slice(4,6);
                        let mill=item.slice(7,10);
                        let lrc=item.slice(11,item.length);
                        
                        let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill);

                        // console.log(typeof(min));
                        
                        // console.log(min,sec,mill,lrc);
                       
                        return {min,sec,mill,lrc,time}
                    })
                    arr.forEach((item,i) => {
                        if(i==arr.length-1 || isNaN(arr[i+1].time)){
                            item.pre=100000;
                        }else{
                            item.pre=arr[i+1].time
                        }
                        
                    });
                }
                // console.log(arr);
             
                return arr;
            }
        },

        mounted(){
            // console.log(this.musicList);
            // console.log(this.lyricList.lyric);//打印一下歌词
            // console.log(typeof(this.lyricList.lyric));
            this.addDuration()
        },
        props:['musicList','isbtnShow','play','addDuration'],
        methods:{
            ...mapMutations(['updateDetailShow','updatePlayListIndex']),
            backHome:function(){
                this.isLyricShow=false
                this.updateDetailShow()
            },
            goPlay:function(num){
                let index=this.playListIndex+num
                if(index<0){
                    index=this.playList.length-1
                }else if(index==this.playList.length){
                    index=0
                }

                this.updatePlayListIndex(index)

            }
        },
        watch:{
            currentTime:function(newValue){
                let p=document.querySelector("p.active")
                // console.log([p]);
                if(p){
                    if(p.offsetTop>250){
                        this.$refs.musicLyric.scrollTop=p.offsetTop-250
                  
                    }

                }
                if(newValue===this.duration){
                    if(this.playListIndex===this.playList.length-1){
                        this.updatePlayListIndex(0)
                        this.play()
                        
                    }else{
                        this.updatePlayListIndex(this.playListIndex+1)
                    }
                }


                
               
                // console.log([this.$refs.musicLyric]); 
            }

        },
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
    .musicLyric{
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        overflow: scroll;

    }

    .lyrics{
        color: rgb(243, 229, 229);
        margin-bottom: 20px;
        
    }
    .lyricActive{
        color: #fff;
        font-size: 18px;
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
        transform: rotate(-8deg);
        transition: all 2s;
    }
    .img_needle_active {
        width: 2rem;
        height: 3rem;
        position: absolute;
        left: 46%;
        transform-origin: 0 0 ;
        transform: rotate(5deg);
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
        animation: rotete_core 10s linear infinite;
    }
    .img_core_active{
        animation-play-state: running;
    }
    .img_core_paused{
        animation-play-state: paused;
    }
    @keyframes rotete_core {
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
        
    }
    .detailFooter{
        width: 100%;
        height: 3rem;
        position: absolute;
        bottom: 10px;
        display: flex;
        flex-direction: column;
        
    }
    .footerTop,.footer{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }
    .icon{
        width: 18px;
        height: 18px;
        fill: rgb(245,234, 234);

    }
    .range{
        width: 100%;
        height: 0.06rem;
    }


</style>