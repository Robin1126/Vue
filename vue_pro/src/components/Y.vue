<template>
    <div>
            <h2>Y组件</h2>
            <!-- 使用组件 -->
            <subY></subY>
    </div>
</template>

<script>
import subY from './Y1.vue'
export default {
    // 注册子组件Y1
    components : {subY}
}
</script>
