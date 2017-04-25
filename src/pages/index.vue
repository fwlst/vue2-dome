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
                <h2 class="news">最新消息</h2>
                <ul>
                    <li v-for="item in newsList">
                        <a :href="item.url" class="new-item">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <slide :options="options" ref="indexSlide"></slide>
            <div class="index-board-list">
                <div class="index-board-item" v-for="(item, index) in boardList"
                     :class="[{'line-last' : index % 2 !== 0}]">
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
    import slide from '@/components/slide';
    export default {
        mounted () {
            this.$store.dispatch('fatchIndexData');
        },
        computed:{
            options(){
                return this.$store.getters.getOptions
            },
            boardList(){
                return this.$store.getters.getBoardList
            },
            newsList(){
                return this.$store.getters.getNewsList
            },
            productList(){
                return this.$store.getters.getProductList
            }
        },
        components: {
            slide
        }
    };
</script>
<style lang="less" type="text/css" rel="stylesheet/less" scoped>
    .index-wrap {
        width: 100%;
        display: flex;
        .index-left {
            flex: 1 0 0;
            .index-left-block {
                margin: 15px 15px 15px 0;
                background: #fff;
                box-shadow: 0 0 1px #ddd;
                &.lastest-news {
                    max-height: 461px;
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
                .news {
                    margin-bottom: 5px;
                }
                ul {
                    padding: 10px 15px;
                    li {
                        padding: 5px;
                        .new-item {
                            display: block;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            width: 235px;
                        }
                    }
                    .hot-tag {
                        display: inline-block;
                        font-size: 12px;
                        height: 18px;
                        line-height: 18px;
                        font-weight: 300;
                        background: #ff0000;
                        color: #fff;
                        padding: 0 5px;
                    }
                }
            }
        }
        .index-right {
            flex: 3 0 0;
            margin-top: 15px;
            .index-board-list {
                margin-top: 15px;
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
                            .button {
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

