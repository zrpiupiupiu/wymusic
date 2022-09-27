<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>

        <input type="text" placeholder="搜索框" v-model="searchKey" @keydown.enter="enterKey" >
       
    </div>
    <div class="searchHistory">
        <span class="searchSpan">历史</span>
        <span v-for=" item in keyWordList" :key="item" class="spanKey" @click="searchHistory(item)">
            {{item}}
        </span>

        <svg class="deleteIcon" aria-hidden="true" @click="delHistory" >
            <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>


</template>

<script>
    import { getSearchMusic } from '@/request/api/home.js'

    export default {
        data(){
            return{
                keyWordList:[],
                searchKey:"",
                searchList:[],
            }
        },
        mounted(){
            this.keyWordList=JSON.parse(localStorage.getItem('keyWordList')) ||[]
        },
        
        methods:{
            enterKey: async function (){
                if(this.searchKey!==""){
                    this.keyWordList.unshift(this.searchKey);
                //去重
                this.keyWordList=[...new Set(this.keyWordList)]
                //固定长度
                if(this,this.keyWordList.length>4){
                    this.keyWordList.splice(this.keyWordList.length-1,1)
                }
                localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList) )
                let res = await getSearchMusic(this.searchKey)
                console.log(res);

                this.searchList=res.data.result.soons
                // console.log(this.searchList);

                this.searchKey=""
                }
                
            },
            delHistory:function(){
                localStorage.removeItem("keyWordList")
                this.searchList=[]
            },
            searchHistory:async function(item){
                let res=await getSearchMusic(item);
                console.log(res);
                this.searchList=res.data.result.songs;
            }
        }

    }
</script>

<style>
    .searchTop{
        width: 100%;
        height: 1rem;
        padding: 0 10px;
        display: flex;
        align-items: center;

        
    }

    input{
        margin-left: .4rem;
        border: none;
        border-bottom: 1px solid #999;
        width: 95%;
        padding: 5px;
    }
    .searchHistory{
        width: 100%;
        height: 35px;
        padding: 10px;
        position: relative;
        

    }
    .searchSpan{
        font-weight: 700;
    }

    .spanKey{
        padding: 5px 10px;
        background-color: rgb(185, 169, 169);
        border-radius: 20px;
        margin: 5px 10px;
        display: inline-block;

    }
    .deleteIcon{
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
    }
</style>