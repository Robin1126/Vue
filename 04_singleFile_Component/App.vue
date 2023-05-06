<template>
    <div>
        <h1>App组件</h1>
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
