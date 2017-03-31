<template>
   <div>
       <div class="w-header">
           <div class="inner">
               <div class="logo"><img src="../assets/logo.png" width="50" height="50"></div>
               <div class="head-nav">
                   <ul class="nav-list">
                       <li>登录</li>
                       <li class="nav-pile">|</li>
                       <li>注册</li>
                       <li class="nav-pile">|</li>
                       <li>关于</li>
                   </ul>
               </div>
           </div>
       </div>
       <div class="w-content">
           <keep-alive>
               <router-view></router-view>
           </keep-alive>
       </div>
       <div class="w-footer">
           <p>©️ 2017 某某有限公司</p>
       </div>
   </div>
</template>
<script type="text/ecmascript-6">
    export default {};
</script>
<style lang="less" type="text/css" rel="stylesheet/less" scoped>
    .w-header{
        background: #363636;
        padding: 15px 0;
        .inner{
            display: flex;
            width: 1200px;
            margin: 0 auto;
            color: #b2b2b2;
            .logo{
                flex: 0 0 50px;
                width: 50px;
                img{
                    display: block;
                }
            }
            .head-nav{
                flex: 1;
                line-height: 50px;
                .nav-list{
                    float: right;
                    font-size: 18px;
                    li{
                        float: left;
                        &.nav-pile{
                            padding: 0 15px;
                        }
                    }
                }
            }
        }
    }

    .w-content{
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    .w-footer{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #ddd;
        p{
            width: 1200px;
            margin: 0 auto;
            font-size: 12px;
        }
    }
</style>

