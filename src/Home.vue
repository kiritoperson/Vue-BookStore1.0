<!--/Home.vue-->
<template>
    <div id="App" >
<slider></slider>
<div class="announcement">
    <label for="">快讯</label>
    <span>{{ announcement }}</span>
</div>
 
<!---->
<div v-if="page_data">
<div class="section" >
    <book-list :books="page_data.promotions"
                heading="最新更新"
                 @select="preview($event)">
    </book-list>
</div>

<div class="section">
    <book-list :books="page_data.recommended"
                heading="编辑推荐">
    </book-list>
</div>

 <modal-dialog ref="dialog"
                @dialogClose="selected=undefined">
            <div slot="heading">
            <div class="dismiss"
                @click.prevent="$refs.dialog.close()"></div>
            </div>

            <div v-if="selected">
              <a slot="close" class="aui_close"  @click.prevent="$refs.dialog.close()">×</a>
              <h2 class="title" slot="heading">{{selected.title}}</h2>
              <div class="xq">
                  <img :src="selected.img_url">
                  <ul>
                      <li>作者：<span>{{ selected.authors | join }}</span></li>
                      <li>页数：<span>123</span></li>
                      <li>书号：<span>123-123-456</span></li>
                      <li>出版日期：<span>2019-03-27</span></li>
                  </ul>
                  </div>
                  <p class="introduction">统计数据之所以强大有力，原因在于它对我们的希望、梦想和信仰无动于衷——数据让我们客观地看待事物。不过，当人们不喜欢数据告诉我们的结果时，常常对其进行操纵……因此懂得解释统计数据，了解各种歪曲、滥用数据的技术对于理解数据真相是非常必要的。
《揭开数据真相：从小白到数据分析达人》教给读者神圣的技术，让读者学会如何质疑“看得见”的数据，并挖出“看不见”的数据真相，还原基本的事实。</p>
              </div>

　<ul class="btn-numbox">
    <li><span class="price">价格：69</span></li>
            <li><span class="number">数量</span></li>
            <li>
                <ul class="count">
                    <li><span id="num-jian" class="num-jian"  @click="plus">+</span></li>
                    <li><input type="text" class="input-num" id="input-num" v-model="result" /></li>
                    <li><span id="num-jia" class="num-jia" @click="minus">-</span></li>
                </ul>
            </li>
            <li><span class="kucun">（库存:54）</span></li>
　　　  </ul>
        <div class="gm">
        <button class="gw">立即购买</button>
        <button class="gw gw2">加入购物车</button>
        </div>
        </modal-dialog>
        </div>
    

    </div>           
       
</template>

<script>
    import Slider from "./components/Slider.vue"
    import BookList from "./books/list.vue"
    import ModalDialog from "./books/dialog.vue"
    import faker from "./components/fixtures/faker"
export default {
name: "App",
data(){
    return{
      page_data: undefined,
        selected:undefined,
        result: 0,
        announcement: '今日上架的图书全部8折'
    }
},
   mounted(){
            document.title = "Book store"
        },
            created() {

            this.page_data= faker.getHomeData()

//            this.$http.get('/books/promotions', (res)=> {
//                this.page_data = res.data
//            }, (error)=> {
//                // 处理出错信息
//            })

        },
    methods: {
       preview (book) {
                this.selected = book
                this.$refs.dialog.open()
            },
    minus() {
this.result--;
this.$emit('input', {res: this.result, other: '--'})
},
plus() {
this.result++;
this.$emit('input', {res: this.result, other: '++'})
}
    },
     filters: {
            join(args){
                return args.join(',')
            }
        },
    components: { Slider, BookList, ModalDialog}
}
</script>

<style>
@import './books/home.css';
</style>
