<template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>

                <template v-for="product in productList">
                    <h3>{{ product.title}}</h3>
                    <ul>
                        <li v-for="item in product.list">
                            <a :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <div v-if="!product.last" class="hr"></div>
                </template>
            </div>
            <div class="index-left-block lastest-news">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="item in newsList">
                        <a :href="item.url" class="new-item">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <!--<slide-show :slides="slides" :inv="invTime"></slide-show>-->
            <div class="index-board-list">
                <div class="index-board-item" v-for="(item, index) in boardList" :class="[{'line-last' : index % 2 !== 0}]">
                    <div class="index-board-item-inner" :class="['index-board-' + item.id]">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                        <div class="index-board-button">
                            <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        created: function () {
            //this.fetchData();
        },
        data(){
            return {
                boardList: [
                    {
                        title: '开放产品',
                        description: '开放产品是一款开放产品',
                        id: 'car',
                        toKey: 'analysis',
                        saleout: false
                    },
                    {
                        title: '品牌营销',
                        description: '品牌营销帮助你的产品更好地找到定位',
                        id: 'earth',
                        toKey: 'count',
                        saleout: false
                    },
                    {
                        title: '使命必达',
                        description: '使命必达快速迭代永远保持最前端的速度',
                        id: 'loud',
                        toKey: 'forecast',
                        saleout: true
                    },
                    {
                        title: '勇攀高峰',
                        description: '帮你勇闯高峰，到达事业的顶峰',
                        id: 'hill',
                        toKey: 'publish',
                        saleout: false
                    }
                ],
                newsList: [],
                productList: {
                    pc: {
                        title: 'PC产品',
                        list: [
                            {
                                name: '数据统计',
                                url: 'http://starcraft.com'
                            },
                            {
                                name: '数据预测',
                                url: 'http://warcraft.com'
                            },
                            {
                                name: '流量分析',
                                url: 'http://overwatch.com',
                                hot: true
                            },
                            {
                                name: '广告发布',
                                url: 'http://hearstone.com'
                            }
                        ]
                    },
                    app: {
                        title: '手机应用类',
                        last: true,
                        list: [
                            {
                                name: '91助手',
                                url: 'http://weixin.com'
                            },
                            {
                                name: '产品助手',
                                url: 'http://twitter.com',
                                hot: true
                            },
                            {
                                name: '智能地图',
                                url: 'http://maps.com'
                            },
                            {
                                name: '团队语音',
                                url: 'http://phone.com'
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            fetchData () {
                const _this = this;
                const url = 'api/getNewsList';
                this.$http.get(url).then(function (res) {
                    _this.newsList = res.data.newsList
                }).catch(function (err) {
                    console.log(err)
                })
            }
        },
    };
</script>
<style lang="less" type="text/css" rel="stylesheet/less" scoped>
    .index-wrap{
        width: 100%;
        display: flex;
        .index-left {
            flex: 1 0 0;
            .index-left-block {
                margin: 15px 15px 15px 0;
                background: #fff;
                box-shadow: 0 0 1px #ddd;
                &.lastest-news {
                    min-height: 512px;
                }
                h2 {
                    background: #4fc08d;
                    color: #fff;
                    padding: 10px 15px;
                    margin-bottom: 20px;
                }
                h3 {
                    padding: 0 15px 5px 15px;
                    font-weight: bold;
                    color: #222;
                }
                .hr {
                    margin-bottom: 20px;
                }
                ul {
                    padding: 10px 15px;
                    li {
                        padding: 5px;
                    }
                }
            }
        }
        .index-right {
            flex: 3 0 0 ;
            margin-top: 15px;
            .index-board-list {
                overflow: hidden;
                .index-board-item {
                    float: left;
                    width: 400px;
                    background: #fff;
                    box-shadow: 0 0 1px #ddd;
                    padding: 20px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                    &.line-last {
                        margin-right: 0;
                    }
                    .index-board-item-inner {
                        min-height: 125px;
                        padding-left: 120px;
                        &.index-board-car {
                            background: url(../assets/img/1.png) no-repeat;
                        }
                        &.index-board-loud {
                            background: url(../assets/img/2.png) no-repeat;
                        }
                        &.index-board-earth {
                            background: url(../assets/img/3.png) no-repeat;
                        }
                        &.index-board-hill {
                            background: url(../assets/img/4.png) no-repeat;
                        }
                        h2 {
                            font-size: 18px;
                            font-weight: bold;
                            color: #000;
                            margin-bottom: 15px;
                        }
                        .index-board-button {
                            margin-top: 20px;
                            .button{
                                background: #4fc08d;
                                color: #fff;
                                display: inline-block;
                                padding: 10px 20px;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

