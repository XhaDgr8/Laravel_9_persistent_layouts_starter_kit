<template>
    <!--  Confirmation Model  -->
    <confirmation-modal :show="authModelIsOpen" @close="authModelIsOpen = false">
        <template #title>
            Authentication Required
        </template>

        <template #content>
            {{authModelMessage}}
        </template>

        <template #footer>
            <Link :href="route('login')" class="btn btn-primary">
                Login
            </Link>
            <Link :href="route('register')" class="ml-2 btn btn-secondary">
                Register
            </Link>
        </template>
    </confirmation-modal>
    <!--  Confirmation Model End -->

    <header class="header">

        <div>
            <Link href="/">
                <jet-application-mark class="h-[50px] drop-shadow-md"/>
                <h1 class="text-black drop-shadow-sm">ChoseDev</h1>
            </Link>

<!--            < />-->

            <nav>
                <Link :href="route('site')">Site</Link>
                <Link :href="route('dashboard')">Portfolio</Link>
                <Link :href="route('dashboard')">About</Link>
                <Link :href="route('dashboard')" v-if="$page.props.user" >Dashboard</Link>
                <Link :href="route('login')"  v-if="!$page.props.user">Log in</Link>
                <Link :href="route('register')" v-if="!$page.props.user">Register</Link>
            </nav>

            <div class="flex items-center">
                <jet-button class="inline-flex">
                    Contact Us
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </jet-button>
            </div>
        </div>

    </header>
</template>

<script>
import { defineComponent } from 'vue'
import ConfirmationModal from "@/Jetstream/ConfirmationModal";
import SecondaryButton from "@/Jetstream/SecondaryButton";
import JetNavLink from '@/Jetstream/NavLink';
import JetButton from '@/Jetstream/Button';
import JetApplicationMark from '@/Jetstream/ApplicationMark';
import JetApplicationLogo from '@/Jetstream/ApplicationLogo';

export default defineComponent({
    components: {
        SecondaryButton,
        ConfirmationModal,
        JetNavLink,
        JetButton,
        JetApplicationMark,
        JetApplicationLogo
    },
    data(){
        return {
            authModelIsOpen: false,
            authModelMessage: '',
        }
    },
    watch: {
        '$page.props.flash': function () {
            this.authModelIsOpen = this.$page.props.flash.requiredAuth != null ? true : false;
            this.authModelMessage = this.$page.props.flash.requiredAuth;
        }
    },
});
</script>
