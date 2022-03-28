<template>

    <Head title="Site"/>

    <!--App Logo-->
    <div class="max-w-4xl mx-auto mt-8 bg-gray-800 shadow-lg rounded-lg p-4">

        <h1 class="text-2xl text-white">App Logo</h1>

        <!-- App Logo Button -->
        <p class="text-lg text-white">Application Logo</p>
        <jet-application-logo />
        <!-- App Logo Button End -->

        <br><br>

        <!-- App Logo Button -->
        <p class="text-lg text-white">Application Mark</p>
        <jet-application-mark class="h-24"/>
        <!-- App Logo Button End -->

        <br><br>

        <!-- App Logo Button -->
        <p class="text-lg text-white">Authentication Card Logo</p>
        <jet-authentication-card-logo />
        <!-- App Logo Button End -->

    </div>
    <!--App Logo End-->

    <!--Buttons-->
    <div class="max-w-4xl mx-auto mt-8 bg-gray-800 shadow-lg rounded-lg p-4">
        <h1 class="text-2xl text-white">Buttons</h1>

        <div class="flex justify-evenly">
            <!-- Primary Button -->
            <jet-button>
                Primary Button
            </jet-button>
            <!-- Primary Button End -->

            <!-- Secondary Button -->
            <jet-secondary-button>
                Secondary Button
            </jet-secondary-button>
            <!-- Secondary Button End -->

            <!-- danger Button -->
            <jet-danger-button>
                Danger Button
            </jet-danger-button>
            <!-- danger Button End -->
        </div>

    </div>
    <!--Buttons End-->

    <!--Inputs-->
    <div class="max-w-4xl mx-auto mt-8 bg-gray-800 shadow-lg rounded-lg p-4">
        <h1 class="text-2xl text-white">Inputs</h1>
        <div class="flex justify-evenly">
            <!-- Check Box -->
            <jet-checkbox />
            <!-- Check Box -->

            <div>
                <!-- Label -->
                <jet-label for="email" value="Email" class="text-white" />
                <!-- Label End -->

                <!-- Input -->
                <jet-input />
                <!-- Input End -->

                <!-- Input -->
                <jet-input-error message="some Error message"/>
                <!-- Input End -->
            </div>
        </div>
    </div>
    <!--Buttons End-->

    <br>
    <br>

</template>

<script>
import {defineComponent} from 'vue'
import GuestLayout from "@/Layouts/GuestLayout.vue";

// Logos
import JetApplicationLogo from '@/Jetstream/ApplicationLogo';
import JetApplicationMark from '@/Jetstream/ApplicationMark';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue'
// Logos End

// Buttons
import JetButton from '@/Jetstream/Button';
import JetSecondaryButton from '@/Jetstream/SecondaryButton';
import JetDangerButton from '@/Jetstream/DangerButton';
// Buttons End

// Inputs
import JetCheckbox from '@/Jetstream/Checkbox';
import JetInput from '@/Jetstream/Input';
import JetInputError from '@/Jetstream/InputError';
import JetLabel from "@/Jetstream/Label";

export default defineComponent({
    layout: GuestLayout,
    components: {
        //Logo
        JetApplicationLogo,
        JetApplicationMark,
        JetAuthenticationCardLogo,

        // Buttons
        JetButton,
        JetSecondaryButton,
        JetDangerButton,

        // Inputs
        JetCheckbox,
        JetInput,
        JetInputError,
        JetLabel,

    }

})
</script>
