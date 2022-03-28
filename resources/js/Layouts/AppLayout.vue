<template>
    <div>
        <jet-banner />

        <div class="min-h-screen bg-gray-100">
            <navbar1-auth />
            <!-- Page Content -->
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Navbar1Auth from "@/Components/Navbars/Navbar-1-auth";

    export default defineComponent({
        props: {
            title: String,
        },

        components: {
            Navbar1Auth
        },

        data() {
            return {
                showingNavigationDropdown: false,
            }
        },

        methods: {
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            logout() {
                this.$inertia.post(route('logout'));
            },
        }
    })
</script>
