<template>
    <transition name="drop">
        <div class="dialog-wrap" v-if="isShow" @click="closeMyself">
            <div class="dialog-content" @click.stop.prevent>
                <p class="dialog-close" @click="closeMyself">x</p>
                <slot>empty</slot>
            </div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeMyself () {
                this.$emit('on-close')
            }
        }

    };
</script>
<style lang="less" type="text/css" rel="stylesheet/less" scoped>
    .dialog-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        background: rgba(0, 0, 0, 0.3);
        &.drop-enter-active {
            transition: all .5s ease;
        }
        &.drop-leave-active {
            transition: all .3s ease;
        }
        &.drop-enter {
            transform: translateY(-100%);
        }
        &.drop-leave-active {
            transform: translateY(-100%);
        }
        .dialog-content {
            width: 46%;
            position: fixed;
            max-height: 46%;
            overflow: auto;
            background: #fff;
            top: 27%;
            left: 27%;
            border: 1px solid #ddd;
            padding: 4%;
            line-height: 1.6;
            .dialog-close {
                position: absolute;
                right: 5px;
                top: 5px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                font-size: 30px;
                text-align: center;
                cursor: pointer;
                &:hover {
                    color: #4fc08d;
                }
            }
        }
    }
</style>

