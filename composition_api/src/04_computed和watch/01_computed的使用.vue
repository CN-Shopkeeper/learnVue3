<template>
    <div>
        <h2>{{fullName}}</h2>
        <button @click="changeName">修改firstname</button>
    </div>
</template>

<script>
import {ref, computed} from "vue";
    export default {
        setup(props) {
            const firstName = ref("kobe");
            const lastName = ref("bryant");

            // 用法一：传入一个getter函数
            // 返回值为一个ref对象computedRef
            // const fullName=computed(()=>firstName.value+" "+lastName.value);
            // 用法二：传入一个对象
            const fullName=computed({
                get:()=>firstName.value+" "+lastName.value,
                set:(newValue)=>{
                    const names=newValue.split(" ");
                    firstName.value=names[0];
                    lastName.value=names[1];
                }
            })
            const changeName=()=>{
                // firstName.value="james";
                fullName.value="shop keeper";
            }
            return {
                fullName,
                changeName
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>