<template>
    <div class="imgbox">
        <div class="user-head-portrait" 
            :style="{backgroundImage: 'url(' + background + ')'}">
        </div>
        <div class="default-img shop-box-center">
            <i class="el-icon-picture"></i>
        </div>
        
        <!-- <img src="../assets/img/default.png" 
            class="default-img"/> -->
    </div>
</template>
<script>

export default {
    props:['background'],
    data: function () {
        return {
            path:'path/aa'
        }
    },
    mounted() {
    
    },
}
</script>
<style lang="less" scoped>

@import '../assets/css/mixins.less';
@import '../assets/css/base.less';
.imgbox{
    width: 100%;
    height: 100%;
    position: relative;
    .default-img{
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        background: #f1f1f1;
        text-align: center;
        i{
            font-size: 36px;
            color: #ddd;
        }
    }
}
.user-head-portrait{
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 1;
    border-radius: 12 /@dev-width * 1px;
}
.default-img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
</style>
