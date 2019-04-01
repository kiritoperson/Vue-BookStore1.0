<template>
<div class="swiper-container" ref="slider">

  <div class="swiper-wrapper">
      <div class="swiper-slide">
      <img src="./fixtures/sliders/t1.svg">
      </div>
      <div class="swiper-slide">
          <div class="swiper-slide">
      <img src="./fixtures/sliders/t2.svg">
      </div></div>
  </div>
 <div class="swiper-pagination"
             ref="pagination"></div>
             
  </div>
</div>


</template>
<style>
    @import 'swiper/dist/css/swiper.css';
        .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .swiper-wrapper {
        height: 200px;
    }

    .swiper-slide img {
        max-width: 100%;
    }

    .swiper-slide {
        text-align: center;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>

<script>
import Swiper from "swiper"


    export default{
        props: ['slides'],
        data(){
            return{
                slides: [
                    {id:1, img_url:'./fixtures/sliders/t1.svg'},
                    {id:2, img_url:'./fixtures/sliders/t2.svg'},
                ]
            }
        },
        mounted() {
            debugger
            new Swiper(this.$refs.slider, {
                pagination: this.$refs.pagination,
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay:true,
                autoplayDisableOnInteraction: false
            })
        },
    }
</script>


