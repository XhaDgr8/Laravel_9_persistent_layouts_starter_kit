<template>
    <Head title="Create Team" />
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <create-team-form />
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import CreateTeamForm from '@/Pages/Teams/Partials/CreateTeamForm.vue'

    export default defineComponent({
        components: {
            CreateTeamForm,
        },
    })
</script>
