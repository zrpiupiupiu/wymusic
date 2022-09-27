<template>
    <div class="iconlist">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-meirituijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-diantai"></use>
            </svg>
            <span>私人电台</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
 
    </div>
</template>

<style>
    .iconlist{

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
    .icon {
        height: 1rem;
        width: .8rem;
    }


</style>