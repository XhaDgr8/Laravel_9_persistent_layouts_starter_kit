<template>
    <div class="hero-1-box">
    <!-- Left Skewed Div -->
        <div>
            <!-- Skew Canceling -->
            <div class="float-right">
                <img :src="$page.props.assets + `/Site/sillouat.svg`" alt="">
                <div id="content">
                    <h2 class="text-2xl">
                        We are Creative
                        &HorizontalLine;&HorizontalLine;&HorizontalLine;&HorizontalLine;&HorizontalLine;&HorizontalLine;&HorizontalLine;&HorizontalLine;&HorizontalLine;
                    </h2>
                    <h1 class="text-6xl">
                        Web & Game Dev Agency
                    </h1>
                    <div id="contact-form" class="mt-8">
                        <jet-input class="input-bordered" />
                        <jet-button class="min-w-fit">
                            Send Mail
                        </jet-button>
                    </div>
                </div>
            </div>
            <!-- Skew Canceling -->
        </div>
    <!-- Left Skewed Div End -->

    <!-- Right Skewed Div -->
        <div>
            <div></div>
        </div>
    <!-- Right Skewed Div End -->
    </div>
</template>

<script>
import JetInput from "@/Jetstream/Input";
import JetInputError from "@/Jetstream/InputError";
import JetLabel from "@/Jetstream/Label";
import JetButton from "@/Jetstream/Button";

export default {

    components: {
        JetInput,
        JetInputError,
        JetLabel,
        JetButton,
    }

}
</script>

