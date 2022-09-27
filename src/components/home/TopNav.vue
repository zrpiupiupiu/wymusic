<template>
    <div class="topNav">

        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-24gl-playlistHeart"></use>
            </svg>
        </div>
        
        <div class="topContent">
            <span @click="$router.push('/infoUser')">我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        

        <div class="topRight">
            <svg class="icon" aria-hidden="true" @click="$router.push('/searchView')" >
                <use xlink:href="#icon-sousuo"></use>
            </svg>

        </div>

    </div>
    
</template>

<style>
    .topNav{
        width: 100%;
        height: 50px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
            
    }
    .topContent {
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 18px;

    }
    .active {
        font-weight: 900;
    }


</style>