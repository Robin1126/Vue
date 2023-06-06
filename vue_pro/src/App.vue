<template>
    <div>
        <!-- 完成编写之后，在对应文件夹下的terminal当中运行 run npm serve来运行 -->
        <h1>测试自己的脚手架挂件</h1>
        <hr>
        <h1>{{ msg }}</h1>
        <hr>
        <!-- 父组件中可以传参数给子组件 -->
        <!-- 使用v-bind将price后面的改成数字，bind后面可以跟表达式，常量等 -->
        <!-- 这里表示使用自定义的Car组件，并且对引入的Car组件当中Components进行了赋值 -->
        <Car brand="奔驰320" color="红色" :price="10"></Car>
        <hr>
        <Car brand="宝马520" color="黑色" :price="20"></Car>
        <hr>
        <Car brand="特斯拉Model-M" :price="20"></Car>
       
    </div>
   
</template>

<script>
import Car from './components/Car.vue'
export default {
    name : 'App',
    data() {
        return {
            msg : '汽车信息'
        }
    },
    components : {Car}
}
</script>
