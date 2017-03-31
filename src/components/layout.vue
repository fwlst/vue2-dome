<template>
   <div>
       <div class="w-header">
           <div class="inner">
               <div class="logo"><img src="../assets/logo.png" width="50" height="50"></div>
               <div class="head-nav">
                   <ul class="nav-list">
                       <li @click="logClick">登录</li>
                       <li class="nav-pile">|</li>
                       <li @click="regClick">注册</li>
                       <li class="nav-pile">|</li>
                       <li @click="aboutClick">关于</li>
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
       <v-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
           <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
       </v-dialog>

       <v-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
           登录
           <!--<log-form @has-log="onSuccessLog"></log-form>-->
       </v-dialog>

       <v-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
           注册
           <!--<reg-form></reg-form>-->
       </v-dialog>
   </div>
</template>
<script type="text/ecmascript-6">
    import Dialog from '@/components/base/dialog'
    export default {
        components:{
            "v-dialog": Dialog
        },
        data(){
            return{
                isShowAboutDialog: false,
                isShowLogDialog: false,
                isShowRegDialog: false,
            }
        },
        methods: {
            aboutClick () {
                this.isShowAboutDialog = true
            },
            logClick () {
                this.isShowLogDialog = true
            },
            regClick () {
                this.isShowRegDialog = true
            },
            closeDialog (attr) {
                this[attr] = false
            }
        }
    };
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

