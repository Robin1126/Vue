<template>
  <div>
    <h3>品牌: {{ brand }}</h3>
    <h3>价格: {{ cprice }}</h3>
    <h3>颜色: {{ color }}</h3>
    <button @click="add">价格+1</button>
  </div>
</template>

<script>
export default {
  name : 'Car',
  data() {
    return {
       cprice : this.price
    }
  },
  methods : {
      add() {
        this.cprice++
      }
  },

  /*   data() {
        return {
            brand : 'BMWR8',
            price : '20',
            color : 'schwarz'
        }
    } */
    
    // 接受从父组件中传过来的参数,实现动态传参，不再局限写死的方式

    // 第一种接收方式：采用数组接收
    // props : ['brand','color','price']

    // 第二种接收方式：带有限定格式
/*     props : {
        brand : String,
        color : String,
        price : Number // 要传入数字
        
    } */

    // 第三种接收方式：添加限定格式，默认值，添加必要性
    // 注意：避免直接修改props当中的值，因为每次页面渲染的时候都会重新赋值
    // 可以考虑使用中间变量来变动相应的值，比如汽车价格
    props : {
      brand : {
        type : String,
        required : true
        // 表示这个属性是必须的，否则报错
      },
      color : {
        type : String,
        default : '红色'
        // 如果这个属性不传入参数，默认是红色
      },
      price : {
        type : Number,
        required : true
      }

    }


}
</script>
