<template>
    <div class="slide" @mouseover="clearInv" @mouseout="runInv" ref="slide">
        <div class="slide-img">
            <a class="clearFloat" :href="options.slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="options.slides[nowIndex].src" ref="slideImg">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="options.slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <div class="title">{{options.slides[nowIndex].title}}</div>
        <ul class="page-nub">
            <li @click="goToSlide(prevIndex)"><</li>
            <li v-for="(slide,index) in options.slides" @click="goToSlide(index)" :class="{active: index === nowIndex}"> {{index + 1}}</li>
            <li @click="goToSlide(nextIndex)">></li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    import Vue from 'vue'
    export default {
        props: {
            options: {
                type: Object,
                default: {
                    slides: [],
                    invTime: 1000
                }
            }
        },
        computed: {
            prevIndex () {
                if (this.nowIndex === 0) {
                    return this.options.slides.length - 1
                }
                else {
                    return this.nowIndex - 1
                }
            },
            nextIndex () {
                if (this.nowIndex === this.options.slides.length - 1) {
                    return 0
                }
                else {
                    return this.nowIndex + 1
                }
            }
        },
        mounted() {
            this.setAHeight();
            this.runInv();
        },
        methods: {
            goToSlide(index){
                this.isShow = false;
                setTimeout(() => {
                    this.isShow = true;
                    this.nowIndex = index;
                }, 10)
            },
            runInv () {
                this.invId = setInterval(() => {
                    this.goToSlide(this.nextIndex)
                }, this.options.invTime)
            },
            clearInv () {
                clearInterval(this.invId)
            },
            setAHeight(){
                let slideImg = this.$refs.slideImg;
                let slide = this.$refs.slide;
                slideImg.onload = function () {
                    let imgHeight = slideImg.getBoundingClientRect().height + 'px';
                    slide.style.height = imgHeight;
                };
            }
        },
        data() {
            return {
                nowIndex: 0,
                isShow: true
            }
        }
    };
</script>
<style lang="less" type="text/css" rel="stylesheet/less" scoped>
    .slide {
        width: 100%;
        position: relative;
        overflow: hidden;
        color: #fff;
        .slide-img{
            img{
                position: absolute;
                display: block;
                width: 100%;
            }
            .slide-trans-enter-active {
                transition: all .5s;
            }
            .slide-trans-enter {
                transform: translateX(100%);
            }
            .slide-trans-old-leave-active {
                transition: all .5s;
                transform: translateX(-100%);
            }
        }
        .title {
            position: absolute;
            left: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: left;
            padding-left: 15px;
        }
        .page-nub {
            position: absolute;
            right: 30px;
            bottom: 0;
            height: 50px;
            line-height: 50px;
            li {
                float: left;
                padding: 0 10px;
                &.active {
                    color: #fff700;
                }
            }
        }
    }
</style>

