<script setup>
import CraftingGui from "@/components/CraftingGui.vue";

defineProps({
    material: String,
    tier: String
});
</script>

<template>
    <CraftingGui
        :slot_1="''"
        :slot_2="''"
        :slot_3="''"
        :slot_4="material"
        :slot_5="''"
        :slot_6="material"
        :slot_7="material"
        :slot_8="''"
        :slot_9="material"
        :output="`mod:${tier}_boots`"
        :output_count="1"
    />
</template>