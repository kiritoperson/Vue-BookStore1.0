<template>
    <div class="dialog-wrapper"
         :class="{'open':is_open}">
        <div class="overlay" @click="close"></div>
        <div class="dialog">
            <div class="heading">
                <slot name="close"></slot>
                <slot name="heading"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data() {
            return{
                is_open:false
            }
        },
        methods: {
            open(){
                if(! this.is_open ){
                    this.$emit('dialogOpen')
                }
                this.is_open = true
            },
            close() {
                if(this.is_open){
                    this.$emit('dialogClose')
                }
                this.is_open = false
            }
        }
    }
</script>
<style lang="less" scoped>
@import './dialog.less';
</style>