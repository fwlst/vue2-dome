<template>
    <div class="login-form">
        <div class="g-form">
            <div class="g-form-line">
                <span class="g-form-label">用户名：</span><div class="g-form-input">
                    <input type="text" v-model="usernameModel" placeholder="请输入用户名">
                </div>
                <span class="g-form-error">{{ userErrors.errorText }}</span>
            </div>
            <div class="g-form-line">
                <span class="g-form-label">密码：</span><div class="g-form-input">
                    <input type="password" v-model="passwordModel" placeholder="请输入密码">
                </div>
                <span class="g-form-error">{{ passwordErrors.errorText }}</span>
            </div>
            <div class="g-form-line">
                <div class="g-form-btn">
                    <a class="button" @click="onLogin">登录</a>
                </div>
            </div>
            <p class="pic">{{ errorText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            usernameModel: '',
            passwordModel: '',
            errorText: ''
        }
    },
    computed: {
        userErrors () {
            let errorText, status;
            if (!/@/g.test(this.usernameModel)) {
                status = false;
                errorText = '不包含@'
            }
            else {
                status = true;
                errorText = ''
            }
            if (!this.userFlag) {
                errorText = '';
                this.userFlag = true
            }
            return {
                status,
                errorText
            }
        },
        passwordErrors () {
            let errorText, status;
            if (!/^\w{1,6}$/g.test(this.passwordModel)) {
                status = false;
                errorText = '密码不是1-6位'
            }
            else {
                status = true;
                errorText = ''
            }
            if (!this.passwordFlag) {
                errorText = '';
                this.passwordFlag = true
            }
            return {
                status,
                errorText
            }
        }
    },
    methods: {
        onLogin () {
            if (!this.userErrors.status || !this.passwordErrors.status) {
                this.errorText = '请输入正确的用户名和密码'
            }
            else {
                this.errorText = '';
                this.fetchData();
            }
        },
        fetchData () {
            const url = 'api/login';
            this.$http.post(url).then((res) => {
                this.$emit('has-log', res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/css" rel="stylesheet/less" scoped>
    .g-form{
        width: 60%;
        min-width: 500px;
        margin: 0 auto;
        .g-form-line{
            padding: 15px 0;
            .g-form-label{
                width: 20%;
                font-size: 16px;
                display: inline-block;
            }
            .g-form-input{
                display: inline-block;
                width: 50%;
                input{
                    height: 30px;
                    width: 80%;
                    line-height: 30px;
                    vertical-align: middle;
                    padding: 0 10%;
                    border: 1px solid #ccc;
                }
            }
            .g-form-error{
                color: red;
                padding-left: 15px;
            }
            .g-form-btn{
                width: 30%;
                margin: 0 auto;
                .button{
                    width: 100%;
                    height: 45px;
                    line-height: 45px;
                    text-align: center;
                    background: #4fc08d;
                    color: #fff;
                    display: inline-block;
                    cursor: pointer;
                }
            }
        }
        .pic{
            color: red;
        }
    }


</style>
