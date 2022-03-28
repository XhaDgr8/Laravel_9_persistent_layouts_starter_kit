<template>
    <Link :href="'/'">
        <img class="h-16" :src="$page.props.assets + `/Site/logo.svg`" alt="App Mark">
    </Link>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            Link,
        },
    })
</script>
