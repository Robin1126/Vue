<template>
    <div>
        <h1>App组件</h1>
        <!-- 多层挂件 -->
        <!-- 今日休息，周日继续 -->
        <!-- Review render  -->
        <X></X>
        <Y></Y>
    </div>
   
</template>

<script>
import X from './X.vue'
import Y from './Y.vue'
export default {
    components : {X, Y}
}
</script>
