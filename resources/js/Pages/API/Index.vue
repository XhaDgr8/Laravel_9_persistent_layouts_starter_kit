<template>
    <Head title="PI Tokens" />
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <api-token-manager :tokens="tokens"
                           :available-permissions="availablePermissions"
                           :default-permissions="defaultPermissions" />
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import ApiTokenManager from '@/Pages/API/Partials/ApiTokenManager.vue'

    export default defineComponent({
        props: [
            'tokens',
            'availablePermissions',
            'defaultPermissions',
        ],

        components: {
            ApiTokenManager,
        },
    })
</script>
