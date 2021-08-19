<template>
    <div>
        <h2 v-format-time="'YYYY-MM-DD'">{{timestamp}}</h2>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        setup(props) {
            const timestamp="1629347353";

            return {
                timestamp
            }
        }
    }
</script>

<style scoped>

</style>