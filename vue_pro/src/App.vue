<template>
    <div>
        <h1>App组件</h1>
        <X></X>
        <Y></Y>
    </div>
   
</template>

<script>
import X from './components/X.vue'
import Y from './components/Y.vue'
export default {
    components : {X, Y}
}
</script>
