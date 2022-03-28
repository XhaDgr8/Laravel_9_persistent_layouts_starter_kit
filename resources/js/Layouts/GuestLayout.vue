<template>
    <navbar1 />
    <slot></slot>
</template>
<script>
import navbar1 from "@/Components/Navbars/Navbar-1";
import { defineComponent } from 'vue'
export default defineComponent({
    components: {navbar1},
});
</script>
<style scoped>
</style>
