<template>

    <Head title="Welcome"/>

    <hero1 />

</template>

<script>
import {defineComponent} from 'vue'
import GuestLayout from "@/Layouts/GuestLayout.vue";
import Hero1 from "@/Components/LandingPage/Hero-1";


export default defineComponent({
    layout: GuestLayout,
    components: {
        Hero1,
    }

})
</script>
