<template>
    <div>
        home page
        <h2>{{title}}</h2>
        <button @click="bar">按钮</button>
    </div>
</template>

<script>
import BasePage from './BasePage.vue';
    export default {
        extends:BasePage
    }
</script>

<style scoped>

</style>