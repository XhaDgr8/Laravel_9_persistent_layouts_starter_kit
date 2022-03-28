<template>
    <div class="hero-1-box">
    <!-- Left Skewed Div -->
        <div>
            <div class="glass absolute rounded-2xl top-20 right-24 w-full h-[75%]"></div>
            <!-- Skew Canceling -->
            <div class="float-right skew-cancel">
                <img :src="$page.props.assets + `/Site/sillouat.svg`" alt="">
                <div id="content" class=" relative z-40">
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
            <div class="skew-cancel"></div>
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

